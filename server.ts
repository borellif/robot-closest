import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/robots/closest', (req, res) => {
    console.log('Hit POST endpoint of closest')
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});