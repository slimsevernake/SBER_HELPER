const express = require('express');
const session = require('express-session');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const sber_bot = require('./bot/settings');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  }),
);

// const sessionConfig = {
//   store: new MongoStore({ mongooseConnection: connection }),
//   key: 'sid',
//   secret: 'example',
//   resave: true,
//   saveUninitialized: true,
//   cookie: { expires: 6000000},
// };

// app.use(session(sessionConfig));

app.use('/', express.static(path.join(__dirname, 'client', 'dist')))
app.use('/user', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
})

app.listen(process.env.PORT, () => {
  console.log('Server Start at PORT: ', process.env.PORT);
  sber_bot.launch()
});
