import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { router } from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 4000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para logging
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`MuseArte corriendo en http://localhost:${PORT}`);
});
