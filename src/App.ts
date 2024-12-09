import express, { Application } from 'express';
import mainRouter from './routes/Route';

const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', mainRouter);

export default app;
