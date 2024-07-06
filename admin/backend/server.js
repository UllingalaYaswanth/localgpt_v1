// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import admin from 'firebase-admin';
// import fs from 'fs';
// import cors from 'cors';
// import jwt from 'jsonwebtoken';
// import User from './userModel.js'; // Importing userModel

// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors({
//   origin: 'http://localhost:5173', // Adjust to your React app's origin
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// }));

// // Connect to MongoDB Atlas
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('Error connecting to MongoDB:', err));

// // Initialize Firebase Admin SDK
// const serviceAccount = JSON.parse(fs.readFileSync('./serviceAccountKey.json', 'utf8'));

// try {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: process.env.FIREBASE_DATABASE_URL,
//   });
//   console.log('Firebase Admin initialized');
// } catch (error) {
//   console.error('Error initializing Firebase Admin:', error);
// }

// // Route to register a new user
// app.post('/register', async (req, res) => {
//   const { firstName, lastName, emailAddress, password, role, level } = req.body;

//   try {
//     // Check if required fields are provided
//     if (!firstName || !lastName || !emailAddress || !password || !role || !level) {
//       throw new Error('All fields are required');
//     }

//     // Create user in Firebase Authentication to get UID
//     const userRecord = await admin.auth().createUser({
//       email: emailAddress,
//       password: password,
//       displayName: `${firstName} ${lastName}`
//       // You can set other properties if needed, like photoURL
//     });

//     const firebaseUid = userRecord.uid; // Get the Firebase UID

//     // Create user in MongoDB with Firebase UID and role
//     const newUser = new User({ firstName, lastName, emailAddress, role, level, firebaseUid });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully', user: newUser });
//   } catch (error) {
//     console.error('Error registering user:', error.message);
//     res.status(400).json({ error: error.message });
//   }
// });

// // Route to login
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Authenticate user using Firebase Auth
//     const userCredential = await admin.auth().getUserByEmail(email);
//     const firebaseUid = userCredential.uid;

//     // Find user in MongoDB by Firebase UID
//     const user = await User.findOne({ firebaseUid });

//     if (!user) {
//       throw new Error('User not found');
//     }

//     // Generate JWT token for authentication
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.status(200).json({ token, user });
//   } catch (error) {
//     console.error('Error logging in:', error);
//     res.status(400).json({ error: error.message });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import admin from 'firebase-admin';
// import fs from 'fs';
// import cors from 'cors';
// import jwt from 'jsonwebtoken';
// import User from './userModel.js'; // Adjust the path as needed

// dotenv.config();


// const app = express();
// app.use(express.json());
// app.use(cors({
//   origin: 'http://localhost:5173', // Adjust to your React app's origin
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// }));

// // Connect to MongoDB Atlas
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('Error connecting to MongoDB:', err));

// // Initialize Firebase Admin SDK
// const serviceAccount = JSON.parse(fs.readFileSync('./serviceAccountKey.json', 'utf8'));

// try {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: process.env.FIREBASE_DATABASE_URL,
//   });
//   console.log('Firebase Admin initialized');
// } catch (error) {
//   console.error('Error initializing Firebase Admin:', error);
// }

// // Route to register a new user
// app.post('/register', async (req, res) => {
//   const { firstName, lastName, emailAddress, password, role, level } = req.body;

//   try {
//     // Check if required fields are provided
//     if (!firstName || !lastName || !emailAddress || !password || !role || !level) {
//       throw new Error('All fields are required');
//     }

//     // Create user in Firebase Authentication to get UID
//     const userRecord = await admin.auth().createUser({
//       email: emailAddress,
//       password: password,
//       displayName: `${firstName} ${lastName}`
//     });

//     const firebaseUid = userRecord.uid; // Get the Firebase UID

//     // Create user in MongoDB with Firebase UID and role
//     const newUser = new User({ firstName, lastName, emailAddress, role, level, firebaseUid });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully', user: newUser });
//   } catch (error) {
//     console.error('Error registering user:', error.message);
//     res.status(400).json({ error: error.message });
//   }
// });

// // Route to login
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Authenticate user using Firebase Auth
//     const userCredential = await admin.auth().getUserByEmail(email);
//     const firebaseUid = userCredential.uid;

//     // Find user in MongoDB by Firebase UID
//     const user = await User.findOne({ firebaseUid });

//     if (!user) {
//       throw new Error('User not found');
//     }

//     // Generate JWT token for authentication
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.status(200).json({ token, user });
//   } catch (error) {
//     console.error('Error logging in:', error);
//     res.status(400).json({ error: error.message });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// app.js (or index.js)

// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import admin from 'firebase-admin';
// import fs from 'fs';
// import cors from 'cors';
// import jwt from 'jsonwebtoken';
// import User from './userModel.js'; // Adjust the path as needed

// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors({
//   origin: 'http://localhost:5173', // Adjust to your React app's origin
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// }));

// // Connect to MongoDB Atlas
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('Error connecting to MongoDB:', err));

// // Initialize Firebase Admin SDK
// const serviceAccount = JSON.parse(fs.readFileSync('./serviceAccountKey.json', 'utf8'));

// try {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: process.env.FIREBASE_DATABASE_URL,
//   });
//   console.log('Firebase Admin initialized');
// } catch (error) {
//   console.error('Error initializing Firebase Admin:', error);
// }

// // Route to register a new user
// app.post('/register', async (req, res) => {
//   const { firstName, lastName, emailAddress, password, role, level, profileImage, designation } = req.body;

//   try {
//     // Check if required fields are provided
//     if (!firstName || !lastName || !emailAddress || !password || !role || !level || !profileImage || !designation) {
//       throw new Error('All fields are required');
//     }

//     // Create user in Firebase Authentication to get UID
//     const userRecord = await admin.auth().createUser({
//       email: emailAddress,
//       password: password,
//       displayName: `${firstName} ${lastName}`
//     });

//     const firebaseUid = userRecord.uid; // Get the Firebase UID

//     // Create user in MongoDB with Firebase UID and role
//     const newUser = new User({ firstName, lastName, emailAddress, role, level, firebaseUid, profileImage, designation });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully', user: newUser });
//   } catch (error) {
//     console.error('Error registering user:', error.message);
//     res.status(400).json({ error: error.message });
//   }
// });

// // Route to login
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Authenticate user using Firebase Auth
//     const userCredential = await admin.auth().getUserByEmail(email);
//     const firebaseUid = userCredential.uid;

//     // Find user in MongoDB by Firebase UID
//     const user = await User.findOne({ firebaseUid });

//     if (!user) {
//       throw new Error('User not found');
//     }

//     // Generate JWT token for authentication
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.status(200).json({ token, user });
//   } catch (error) {
//     console.error('Error logging in:', error);
//     res.status(400).json({ error: error.message });
//   }
// });

// app.get('/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import admin from 'firebase-admin';
// import fs from 'fs';
// import cors from 'cors';
// import jwt from 'jsonwebtoken';
// import User from './userModel.js'; // Adjust the path as needed
// import multer from 'multer';

// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors({
//   origin: 'http://localhost:5173', // Adjust to your React app's origin
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// }));

// // Connect to MongoDB Atlas
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('Error connecting to MongoDB:', err));

// // Initialize Firebase Admin SDK
// const serviceAccount = JSON.parse(fs.readFileSync('./serviceAccountKey.json', 'utf8'));

// try {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: process.env.FIREBASE_DATABASE_URL,
//   });
//   console.log('Firebase Admin initialized');
// } catch (error) {
//   console.error('Error initializing Firebase Admin:', error);
// }

// // Set up multer storage for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads'); // Specify where to store uploaded files
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname); // Rename the file if needed
//   }
// });

// const upload = multer({ storage });

// // Route to register a new user
// app.post('/register', upload.single('profileImage'), async (req, res) => {
//   const { firstName, lastName, emailAddress, password, role, level, designation } = req.body;

//   try {
//     // Check if required fields are provided
//     if (!firstName || !lastName || !emailAddress || !password || !role || !level || !designation) {
//       throw new Error('All fields are required');
//     }

//     // Create user in Firebase Authentication to get UID
//     const userRecord = await admin.auth().createUser({
//       email: emailAddress,
//       password: password,
//       displayName: `${firstName} ${lastName}`
//     });

//     const firebaseUid = userRecord.uid; // Get the Firebase UID

//     // Get profileImage filename from multer
//     const profileImage = req.file ? req.file.filename : 'default.jpg'; // Default image if not provided

//     // Create user in MongoDB with Firebase UID and role
//     const newUser = new User({ firstName, lastName, emailAddress, role, level, firebaseUid, profileImage, designation });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully', user: newUser });
//   } catch (error) {
//     console.error('Error registering user:', error.message);
//     res.status(400).json({ error: error.message });
//   }
// });

// // Route to login
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Authenticate user using Firebase Auth
//     const userCredential = await admin.auth().getUserByEmail(email);
//     const firebaseUid = userCredential.uid;

//     // Find user in MongoDB by Firebase UID
//     const user = await User.findOne({ firebaseUid });

//     if (!user) {
//       throw new Error('User not found');
//     }

//     // Generate JWT token for authentication
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.status(200).json({ token, user });
//   } catch (error) {
//     console.error('Error logging in:', error);
//     res.status(400).json({ error: error.message });
//   }
// });

// // Route to fetch all users
// app.get('/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import admin from 'firebase-admin';
// import fs from 'fs';
// import cors from 'cors';
// import jwt from 'jsonwebtoken';
// import User from './userModel.js'; // Adjust the path as needed
// import multer from 'multer';

// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors({
//   origin: 'http://localhost:5173', // Adjust to your React app's origin
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// }));

// // Connect to MongoDB Atlas
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('Error connecting to MongoDB:', err));

// // Initialize Firebase Admin SDK
// const serviceAccount = JSON.parse(fs.readFileSync('./serviceAccountKey.json', 'utf8'));

// try {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: process.env.FIREBASE_DATABASE_URL,
//   });
//   console.log('Firebase Admin initialized');
// } catch (error) {
//   console.error('Error initializing Firebase Admin:', error);
// }

// // Set up multer storage for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads'); // Specify where to store uploaded files
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname); // Rename the file if needed
//   }
// });

// const upload = multer({ storage });

// // Route to register a new user
// app.post('/register', upload.single('profileImage'), async (req, res) => {
//   const { firstName, lastName, emailAddress, password, role, level, designation } = req.body;

//   try {
//     // Check if required fields are provided
//     if (!firstName || !lastName || !emailAddress || !password || !role || !level || !designation) {
//       throw new Error('All fields are required');
//     }

//     // Create user in Firebase Authentication to get UID
//     const userRecord = await admin.auth().createUser({
//       email: emailAddress,
//       password: password,
//       displayName: `${firstName} ${lastName}`
//     });

//     const firebaseUid = userRecord.uid; // Get the Firebase UID

//     // Get profileImage filename from multer
//     const profileImage = req.file ? req.file.filename : 'default.jpg'; // Default image if not provided

//     // Create user in MongoDB with Firebase UID and role
//     const newUser = new User({ firstName, lastName, emailAddress, role, level, firebaseUid, profileImage, designation });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully', user: newUser });
//   } catch (error) {
//     console.error('Error registering user:', error.message);
//     res.status(400).json({ error: error.message }); // Return specific error message to client
//   }
// });

// // Route to login
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Authenticate user using Firebase Auth
//     const userCredential = await admin.auth().getUserByEmail(email);
//     const firebaseUid = userCredential.uid;

//     // Find user in MongoDB by Firebase UID
//     const user = await User.findOne({ firebaseUid });

//     if (!user) {
//       throw new Error('User not found');
//     }

//     // Generate JWT token for authentication
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.status(200).json({ token, user });
//   } catch (error) {
//     console.error('Error logging in:', error);
//     res.status(400).json({ error: error.message });
//   }
// });

// // Route to fetch all users
// app.get('/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import admin from 'firebase-admin';
import fs from 'fs';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import User from './userModel.js'; // Adjust the path as needed
import multer from 'multer';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Adjust to your React app's origin
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Initialize Firebase Admin SDK
const serviceAccount = JSON.parse(fs.readFileSync('./serviceAccountKey.json', 'utf8'));

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
  console.log('Firebase Admin initialized');
} catch (error) {
  console.error('Error initializing Firebase Admin:', error);
}

// Set up multer storage for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); // Specify where to store uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Rename the file if needed
  }
});

const upload = multer({ storage });

// Route to register a new user
app.post('/register', upload.single('profileImage'), async (req, res) => {
  const { firstName, lastName, emailAddress, password, role, level, designation } = req.body;

  try {
    // Check if required fields are provided
    if (!firstName || !lastName || !emailAddress || !password || !role || !level || !designation) {
      throw new Error('All fields are required');
    }

    // Create user in Firebase Authentication to get UID
    const userRecord = await admin.auth().createUser({
      email: emailAddress,
      password: password,
      displayName: `${firstName} ${lastName}`
    });

    const firebaseUid = userRecord.uid; // Get the Firebase UID

    // Get profileImage filename from multer
    const profileImage = req.file ? req.file.filename : 'default.jpg'; // Default image if not provided

    // Create user in MongoDB with Firebase UID and role
    const newUser = new User({ firstName, lastName, emailAddress, role, level, firebaseUid, profileImage, designation });
    await newUser.save();

    // Construct profile image URL to send to client
    const profileImageUrl = `http://localhost:5000/uploads/${profileImage}`;

    res.status(201).json({ message: 'User registered successfully', user: newUser, profileImageUrl });
  } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(400).json({ error: error.message }); // Return specific error message to client
  }
});

// Route to login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Authenticate user using Firebase Auth
    const userCredential = await admin.auth().getUserByEmail(email);
    const firebaseUid = userCredential.uid;

    // Find user in MongoDB by Firebase UID
    const user = await User.findOne({ firebaseUid });

    if (!user) {
      throw new Error('User not found');
    }

    // Generate JWT token for authentication
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, user });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(400).json({ error: error.message });
  }
});

// Route to fetch all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
