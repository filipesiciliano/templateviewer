// app.ts
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import fs from 'fs';

const app = express();
const port = 8082;
const __dirname = path.resolve();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/listimages', (req, res) => {
    try {
        const filePath = path.join(__dirname, 'data/templates.json');
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        res.setHeader ('Access-Control-Allow-Origin', '*');
    
        res.json(data);
      } catch (error) {
        console.error('Internal Error:', error);
        res.status(500).json({ error: 'Internal Error' });
      }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});