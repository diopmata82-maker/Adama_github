const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connexion MongoDB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/sport-africain";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connecté"))
.catch(err => console.log("❌ Erreur MongoDB:", err));

// Import des routes
const authRoutes = require("./routes/auth");
const articleRoutes = require("./routes/articles");
const athleteRoutes = require("./routes/athletes");

// Utilisation des routes
app.use("/api/auth", authRoutes);
app.use("/api/articles", articleRoutes);
app.use("/api/athletes", athleteRoutes);

// Route de test
app.get("/", (req, res) => {
    res.json({ 
        message: "Backend Sport Africain 🚀",
        status: "OK",
        endpoints: {
            auth: "/api/auth/login",
            createAdmin: "/api/auth/create-admin",
            articles: "/api/articles",
            athletes: "/api/athletes"
        }
    });
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
    console.log(`📡 API disponible sur http://localhost:${PORT}/api`);
});

