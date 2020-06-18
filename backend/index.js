/* eslint-disable no-console */
require('dotenv').config();

require('./mongoClient');

const api = require('./api');

const PORT = process.env.PORT || 3000;

api.listen(PORT, () => console.log(`Server listening on ${PORT}`));
