// require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

// Import routes
const authRoutes = require('./routes/authroutes');
const habitRoutes = require('./routes/habitRoutes');
const logRoutes = require('./routes/logroutes');
const goalRoutes = require('./routes/goalRoutes');
const soulRoutes = require('./routes/soulFuelRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static uploads folder (important for multer uploads)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
connectDB();

// Route setup
app.use('/auth', authRoutes);
app.use('/habits', habitRoutes);
app.use('/logs', logRoutes);
app.use('/goals', goalRoutes);
app.use('/soulfuel', soulRoutes);
app.use('/notifications', notificationRoutes);
app.use('/analytics', analyticsRoutes);

// Health check route (helps Render detect if app is alive)
app.get('/', (req, res) => {
  res.send('✅ Wellness Tracker backend is running');
});

// Start the server
const PORT =  4300;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
