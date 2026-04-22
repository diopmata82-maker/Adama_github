const express = require("express");
const router = express.Router();
const Article = require("../models/Article");
const { auth, isAdmin } = require("../middleware/auth");

// GET - Récupérer tous les articles (PUBLIC)
router.get("/", async (req, res) => {
    try {
        const { category, limit } = req.query;
        let query = {};
        
        if (category && category !== "tous") {
            query.category = category;
        }
        
        const articles = await Article.find(query)
            .sort({ date: -1 })
            .limit(limit ? parseInt(limit) : 0);
            
        res.json(articles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET - Récupérer un article par ID (PUBLIC)
router.get("/:id", async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        
        if (!article) {
            return res.status(404).json({ message: "Article non trouvé" });
        }
        
        // Incrémenter les vues
        article.views += 1;
        await article.save();
        
        res.json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST - Créer un nouvel article (PROTÉGÉ - ADMIN UNIQUEMENT)
router.post("/", auth, isAdmin, async (req, res) => {
    try {
        const article = new Article(req.body);
        const newArticle = await article.save();
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT - Mettre à jour un article (PROTÉGÉ - ADMIN UNIQUEMENT)
router.put("/:id", auth, isAdmin, async (req, res) => {
    try {
        const article = await Article.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        
        if (!article) {
            return res.status(404).json({ message: "Article non trouvé" });
        }
        
        res.json(article);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE - Supprimer un article (PROTÉGÉ - ADMIN UNIQUEMENT)
router.delete("/:id", auth, isAdmin, async (req, res) => {
    try {
        const article = await Article.findByIdAndDelete(req.params.id);
        
        if (!article) {
            return res.status(404).json({ message: "Article non trouvé" });
        }
        
        res.json({ message: "Article supprimé avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
