import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  try {
    const mongoUrl = process.env.MONGODB_URI;
    console.log(mongoUrl);
    
    if (!mongoUrl) {
      throw new Error('MONGODB_URL is not defined in environment variables');
    }

    const conn = await mongoose.connect(mongoUrl);
    console.log('MongoDB Connected:', conn.connection.host);
  } catch (error) {
    console.log('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};
