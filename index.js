const Express = require('express');
const app = Express();
const router = require('./router');
const { PORT } = require('./config');

app.use(router);

app.listen(PORT, (error) => {
  if (error) console.log('error');
  console.log(`Server is running on ${PORT}`);
})