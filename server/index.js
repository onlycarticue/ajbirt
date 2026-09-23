const exp = require('express');
const crs = require('cors');

const app = exp();
const PORT = process.env.PORT || 5000;

app.use(crs());
app.use(exp.json());

const quotes = [
  { id: 1, text: "Eat. Sleep. Code. Repeat.", author: "Dev Life" },
  { id: 2, text: "Hello World!, Hello Future!", author: "Coder" },
  { id: 3, text: "It's not a bug, it's a feature!", author: "Programmer" }
];

app.get('/api/quotes', (req, res) => {
  res.set('Cache-Control', 'no-store');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});