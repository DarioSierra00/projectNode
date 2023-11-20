const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const useRouteProduct = require('./routes/producto');
const morgan = require('morgan');
mongoose.set('strictQuery',false);

async function main(){
    await mongoose.connect(process.env.MONGO_CNN);
    console.log('Database conected')
}
main().catch((err) => console.log(err));

app.use(express.json());
app.use(morgan('tiny'));
app.use('/producto',useRouteProduct);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

