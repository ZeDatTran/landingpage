const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/submit-demo', (req, res) => {
  const { contactName, email, phone, company, message } = req.body;
  console.log(`Demo request: Name: ${contactName}, Email: ${email}, Phone: ${phone}, Company: ${company}, Message: ${message}`);
  res.status(200).json({ message: 'Success' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});