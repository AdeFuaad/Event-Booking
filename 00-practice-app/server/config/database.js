const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Replace 'your-mongodb-connection-string' with your MongoDB connection string
    const connectionString = 'your-mongodb-connection-string';
    
    const connection = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
