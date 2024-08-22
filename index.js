// const mongoose = require('mongoose');

// // Replace with your connection string
// const uri = "mongodb+srv://aneetajain205001:MSIXgNbvUY0tNqVM@cluster0.jsedu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected...'))
//   .catch(err => console.log('MongoDB connection error:', err));
const mongoose = require('mongoose');
const User = require('./model'); // Import the model

const uri = "mongodb+srv://aneetajain205001:MSIXgNbvUY0tNqVM@cluster0.jsedu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
  .then(async () => {
    console.log('MongoDB connected...');
    
    // Create a new user
    const newUser = new User({
      name: 'John Doe',
      email: 'johndoe@example.com',
    });

    // Save the user to the database
    await newUser.save();
    console.log('User saved to database');

    // Fetch all users
    const users = await User.find();
    console.log('Users:', users);
  })
  .catch(err => console.log('MongoDB connection error:', err));

