const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');
const path = require('path');

const app = express();

// Allow Cross-origin request
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

// Set a static folder
app.use(express.static('public'));

// All other paths lead to React's "index.html" file in public dir
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, public, 'index.html'));
});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`[*] Listening on port ${PORT} 🚦 `));
