const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('👋 Hello from Niros!'));
app.get('/health', (req, res) => res.sendStatus(200));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

