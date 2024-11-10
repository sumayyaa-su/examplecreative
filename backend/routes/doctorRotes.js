const express = require('express');
const Doctor = require('../model/doctorData')
const router = express.Router();

router.post('/doctors', async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);
    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific doctor
router.get('/doctors/:id', async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    res.json(doctor);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Update a doctor
router.put('/doctors/:id', async (req, res) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedDoctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a doctor
router.delete('/doctors/:id', async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;