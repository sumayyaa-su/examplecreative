const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); 
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
router.post('/doctors', upload.single('doctorImage'), async (req, res) => {
  try {
    const { doctorName, doctorEmail, specialty, yearsOfExperience, password, doctorBio } = req.body;
    const doctorImage = req.file ? `/uploads/${req.file.filename}` : null; // Save the image path

    // Create a new doctor object and save it to the database (using your database model, e.g. Mongoose)
    const newDoctor = new Doctor({
      doctorName,
      doctorEmail,
      specialty,
      yearsOfExperience,
      password,
      doctorBio,
      doctorImage,
    });

    await newDoctor.save();
    res.status(201).json(newDoctor); // Respond with the created doctor
  } catch (error) {
    console.error('Error creating doctor:', error);
    res.status(500).json({ message: 'Error creating doctor' });
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