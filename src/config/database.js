import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const config = {
  uri: 'mongodb+srv://cluster0-lwpkc.mongodb.net/test',
  options: {
    user: 'test',
    pass: '1!2@3#4$',
    useNewUrlParser: true,
    useFindAndModify: false,
  },
}

mongoose.connection.on('open', () => {
  console.log('Successfully connected to database.')
})

mongoose.connection.on('error', () => {
  throw new Error('Could not connect to MongoDB.')
})

export default {
  connect: () => mongoose.connect(config.uri, config.options)
}
