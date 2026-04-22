const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const { generateToken } = require("../middleware/auth");

// POST - Login admin
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Validation
        if (!email || !password) {
            return res.status(400).json({ 
                message: "Email et mot de passe requis" 
            });
        }
        
        // Trouver l'admin
        const admin = await Admin.findOne({ email });
        
        if (!admin) {
            return res.status(404).json({ 
                message: "Email ou mot de passe incorrect" 
            });
        }
        
        // Vérifier le mot de passe
        const isMatch = await admin.comparePassword(password);
        
        if (!isMatch) {
            return res.status(400).json({ 
                message: "Email ou mot de passe incorrect" 
            });
        }
        
        // Générer le token
        const token = generateToken(admin._id);
        
        res.json({
            success: true,
            token,
            admin: {
                id: admin._id,
                email: admin.email,
                name: admin.name,
                role: admin.role
            }
        });
    } catch (error) {
        res.status(500).json({ 
            message: "Erreur serveur",
            error: error.message 
        });
    }
});

// POST - Créer un admin (à utiliser une seule fois)
router.post("/create-admin", async (req, res) => {
    try {
        const { email, password, name } = req.body;
        
        // Vérifier si l'admin existe déjà
        const existingAdmin = await Admin.findOne({ email });
        
        if (existingAdmin) {
            return res.status(400).json({ 
                message: "Cet email est déjà utilisé" 
            });
        }
        
        // Créer le nouvel admin
        const admin = new Admin({
            email: email || "admin@sportafricain.com",
            password: password || "admin123",
            name: name || "Administrateur"
        });
        
        await admin.save();
        
        res.status(201).json({
            success: true,
            message: "Admin créé avec succès",
            admin: {
                email: admin.email,
                name: admin.name
            }
        });
    } catch (error) {
        res.status(500).json({ 
            message: "Erreur lors de la création de l'admin",
            error: error.message 
        });
    }
});

// GET - Vérifier le token
router.get("/verify", async (req, res) => {
    try {
        const token = req.headers.authorization?.replace('Bearer ', '');
        
        if (!token) {
            return res.status(401).json({ 
                valid: false,
                message: "Token manquant" 
            });
        }
        
        const jwt = require("jsonwebtoken");
        const JWT_SECRET = process.env.JWT_SECRET || "sport_africain_secret_key_2026";
        
        const decoded = jwt.verify(token, JWT_SECRET);
        const admin = await Admin.findById(decoded.id).select('-password');
        
        if (!admin) {
            return res.status(404).json({ 
                valid: false,
                message: "Admin non trouvé" 
            });
        }
        
        res.json({
            valid: true,
            admin: {
                id: admin._id,
                email: admin.email,
                name: admin.name,
                role: admin.role
            }
        });
    } catch (error) {
        res.status(401).json({ 
            valid: false,
            message: "Token invalide" 
        });
    }
});

module.exports = router;
