const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "sport_africain_secret_key_2026";

// Middleware d'authentification
const auth = (req, res, next) => {
    try {
        // Récupérer le token depuis le header Authorization
        const token = req.headers.authorization?.replace('Bearer ', '');
        
        if (!token) {
            return res.status(401).json({ 
                message: "Accès refusé. Token manquant." 
            });
        }
        
        // Vérifier le token
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ 
            message: "Token invalide ou expiré." 
        });
    }
};

// Middleware pour vérifier que l'utilisateur est admin
const isAdmin = async (req, res, next) => {
    try {
        const Admin = require("../models/Admin");
        const admin = await Admin.findById(req.user.id);
        
        if (!admin) {
            return res.status(403).json({ 
                message: "Accès interdit. Droits administrateur requis." 
            });
        }
        
        req.admin = admin;
        next();
    } catch (error) {
        return res.status(500).json({ 
            message: "Erreur lors de la vérification des droits." 
        });
    }
};

// Générer un token JWT
const generateToken = (userId) => {
    return jwt.sign(
        { id: userId },
        JWT_SECRET,
        { expiresIn: '2h' } // Token valide 2 heures
    );
};

module.exports = { auth, isAdmin, generateToken };
