const mongoose = require('mongoose')

const connectMongo = async () => mongoose.connect(process.env.MONGO_URI);