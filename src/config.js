import dotenv from 'dotenv';

dotenv.config()

export default {
  secretKey: process.env.TOKEN,
  urlMongoDB: process.env.MONGO_URL,
  port: process.env.PORT
}