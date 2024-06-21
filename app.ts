import express from 'express';
import bodyParser from 'body-parser';
import timelineRoutes from './src/routes/timeline';
import feedRoutes from './src/routes/feeds';

const app = express();

app.use(bodyParser.json());
app.use('/api', timelineRoutes);
app.use('/api', feedRoutes);

export default app;
