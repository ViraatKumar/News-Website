const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Get top headlines
app.get("/news", async (req, res) => {
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/top-headlines?apikey=${process.env.GNEWS_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching news" });
  }
});

// Search news by query
app.get("/news/search", async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: "Search query is required" });
  }
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/search?q=${query}&apikey=${process.env.GNEWS_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error searching news" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
