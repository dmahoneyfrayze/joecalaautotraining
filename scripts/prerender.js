
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, '../dist');

const routes = [
    '/',
    '/about',
    '/what-we-do',
    '/corporate',
    '/industries',
    '/academy',
    '/mentorship',
    '/contact',
    '/blog',
    '/locations/myrtle-beach',
    '/training/automotive-sales',
    '/growth/dealership-strategies',
    '/industries/powersports',
    '/industries/real-estate',
    '/industries/high-ticket',
    '/terms',
    '/privacy',
    // Add 404
    '/404'
];

async function prerender() {
    console.log('Starting pre-rendering...');

    // 1. Start the static server (using vite preview)
    const server = spawn('npm', ['run', 'preview', '--', '--port', '4173'], {
        stdio: 'inherit',
        shell: true
    });

    // Give it a moment to boot
    console.log('Waiting for server...');
    const waitForServer = async (retries = 20) => {
        for (let i = 0; i < retries; i++) {
            try {
                await fetch('http://localhost:4173/');
                console.log('Server is ready!');
                return true;
            } catch (e) {
                await new Promise(r => setTimeout(r, 1000));
            }
        }
        return false;
    };

    if (!await waitForServer()) {
        console.error('Server failed to start.');
        server.kill();
        process.exit(1);
    }

    const browser = await puppeteer.launch({
        headless: "new"
    });
    const page = await browser.newPage();

    for (const route of routes) {
        try {
            console.log(`Prerendering: ${route}`);

            // Navigate
            await page.goto(`http://localhost:4173${route}`, {
                waitUntil: 'networkidle0',
                timeout: 30000
            });

            // Wait for Helmet to update title (as a proxy for mounting)
            // Or just wait a small buffer
            await new Promise(r => setTimeout(r, 500));

            // Extract HTML
            let html = await page.content();

            // Fix URLs
            html = html.replace(/http:\/\/localhost:4173/g, 'https://josephacala.com');

            // Determine output path
            // If route is / -> dist/index.html (Wait, we should be careful overwriting index.html main entry? 
            // Actually for / it is index.html. For others it is /route/index.html)

            let outputPath;
            if (route === '/') {
                outputPath = path.join(DIST_DIR, 'index.html');
            } else if (route === '/404') {
                outputPath = path.join(DIST_DIR, '404.html');
            } else {
                const routeDir = path.join(DIST_DIR, route);
                if (!fs.existsSync(routeDir)) {
                    fs.mkdirSync(routeDir, { recursive: true });
                }
                outputPath = path.join(routeDir, 'index.html');
            }

            fs.writeFileSync(outputPath, html);
            console.log(`Saved: ${outputPath}`);

        } catch (e) {
            console.error(`Failed to render ${route}:`, e);
        }
    }

    await browser.close();
    server.kill();
    console.log('Pre-rendering complete.');
    process.exit(0);
}

prerender();
