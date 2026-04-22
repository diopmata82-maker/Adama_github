const express = require("express");
const router = express.Router();
const Athlete = require("../models/Athlete");
const { auth, isAdmin } = require("../middleware/auth");

// GET - Récupérer tous les athlètes (PUBLIC)
router.get("/", async (req, res) => {
    try {
        const { discipline } = req.query;
        let query = {};
        
        if (discipline) {
            query.discipline = discipline;
        }
        
        const athletes = await Athlete.find(query).sort({ name: 1 });
        res.json(athletes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET - Récupérer un athlète par ID (PUBLIC)
router.get("/:id", async (req, res) => {
    try {
        const athlete = await Athlete.findById(req.params.id);
        
        if (!athlete) {
            return res.status(404).json({ message: "Athlète non trouvé" });
        }
        
        res.json(athlete);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST - Créer un nouvel athlète (PROTÉGÉ - ADMIN UNIQUEMENT)
router.post("/", auth, isAdmin, async (req, res) => {
    try {
        const athlete = new Athlete(req.body);
        const newAthlete = await athlete.save();
        res.status(201).json(newAthlete);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT - Mettre à jour un athlète (PROTÉGÉ - ADMIN UNIQUEMENT)
router.put("/:id", auth, isAdmin, async (req, res) => {
    try {
        const athlete = await Athlete.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        
        if (!athlete) {
            return res.status(404).json({ message: "Athlète non trouvé" });
        }
        
        res.json(athlete);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE - Supprimer un athlète (PROTÉGÉ - ADMIN UNIQUEMENT)
router.delete("/:id", auth, isAdmin, async (req, res) => {
    try {
        const athlete = await Athlete.findByIdAndDelete(req.params.id);
        
        if (!athlete) {
            return res.status(404).json({ message: "Athlète non trouvé" });
        }
        
        res.json({ message: "Athlète supprimé avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
