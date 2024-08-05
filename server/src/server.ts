import express from 'express';
import routes from './routes/routes';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

app.use('/uplodas', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
