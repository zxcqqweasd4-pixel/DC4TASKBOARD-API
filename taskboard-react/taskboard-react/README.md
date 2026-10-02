# TaskBoard React — file drop-in guide

Scaffold the app first:

    npm create vite@latest taskboard-react -- --template react
    cd taskboard-react
    npm install

Then copy `src/api.js`, `src/App.jsx`, and everything in `src/components/`
into your project (overwriting the generated `src/App.jsx`).

    npm run dev

Make sure it runs on http://localhost:5173 — if Vite picks a different
port, the API's CORS config will reject the requests.
