import express from 'express';
import downloadRouter from './routes/download';

const app = express();
const PORT = 4000;

app.use(express.json());
app.use('/api', downloadRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
