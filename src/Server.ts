import app from './App';
require('dotenv').config(); // Configuring Dot env

const PORT = process.env.API_PORT; //  Port from Environment Variable

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
