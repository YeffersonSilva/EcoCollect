import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes/routes';
import itemsRoutes from './routes/points.routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(itemsRoutes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333, () => {
    console.log('Server running on port 3333');
  });