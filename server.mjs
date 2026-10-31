import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const base = fileURLToPath(new URL('.', import.meta.url));
let localKey = '';
try {
  const env = await readFile(resolve(base, '.env.local'), 'utf8');
  localKey = env.match(/^\s*GOOGLE_MAPS_API_KEY\s*=\s*["']?([^\r\n"']*)/m)?.[1]?.trim() || '';
} catch {}
const key = process.env.GOOGLE_MAPS_API_KEY || localKey;
const mime = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.svg':'image/svg+xml', '.json':'application/json' };
const server = createServer(async (req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  if (pathname === '/config.js') {
    res.writeHead(200, { 'Content-Type':'text/javascript; charset=utf-8', 'Cache-Control':'no-store' });
    res.end(`window.SIDEQUEST_API_KEY = ${JSON.stringify(key)};`);
    return;
  }
  const requested = pathname === '/' ? '/index.html' : pathname;
  const file = resolve(base, `.${requested}`);
  if (!file.startsWith(resolve(base, '.') + sep)) { res.writeHead(403); res.end('Forbidden'); return; }
  try {
    const content = await readFile(file);
    res.writeHead(200, { 'Content-Type':mime[extname(file)] || 'application/octet-stream' });
    res.end(content);
  } catch { res.writeHead(404); res.end('Not found'); }
});
const port = Number(process.env.PORT || 4173);
server.listen(port, '0.0.0.0', () => console.log(`Sidequest is ready at http://localhost:${port}`));
