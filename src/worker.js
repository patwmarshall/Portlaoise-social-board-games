const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Portlaoise Social Board Games</title>
    <style>
      body { font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; margin: 2rem; }
      header { margin-bottom: 1.5rem }
      .game { margin-bottom: 0.5rem }
    </style>
  </head>
  <body>
    <header>
      <h1>Portlaoise Social Board Games</h1>
      <p>Welcome — this site is served from a Cloudflare Worker. Open the console to see API responses.</p>
    </header>

    <section id="games">
      <h2>Games</h2>
      <div id="list">Loading…</div>
    </section>

    <script>
      async function loadGames() {
        try {
          const res = await fetch('/api/games');
          const games = await res.json();
          const list = document.getElementById('list');
          list.innerHTML = games.map(g => `<div class="game"><strong>${g.name}</strong> — ${g.players} players</div>`).join('');
        } catch (err) {
          document.getElementById('list').textContent = 'Could not load games.';
          console.error(err);
        }
      }
      loadGames();
    </script>
  </body>
</html>
`;

const games = [
  { id: 1, name: 'Catan', players: '3-4' },
  { id: 2, name: 'Carcassonne', players: '2-5' }
];

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = url.pathname.replace(/\/+$/, '') || '/';

    // API routes
    if (pathname === '/api/health') {
      return new Response(JSON.stringify({ status: 'ok' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
      });
    }

    if (pathname === '/api/games') {
      return new Response(JSON.stringify(games), {
        status: 200,
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
      });
    }

    // Serve the single-page HTML for root and index.html
    if (pathname === '/' || pathname === '/index.html') {
      return new Response(indexHtml, {
        status: 200,
        headers: { 'Content-Type': 'text/html;charset=UTF-8' }
      });
    }

    // Not found
    return new Response('Not found', { status: 404 });
  }
};
