import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.use(express.json());
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
