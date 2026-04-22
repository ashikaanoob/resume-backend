const Resume = require("../models/Resume");
exports.createResume = async (req, res) => {
  try {
    const resume = new Resume({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      education: req.body.education,
      skills: req.body.skills,
      experience: req.body.experience,
      projects: req.body.projects
    });

    await resume.save();

    res.status(201).json({
      message: "Resume created successfully",
      data: resume
    });

  } catch (err) {
    console.log(err);
  }
};


exports.createResume = async (req, res) => {
  const data = await Resume.create(req.body);
  res.json(data);
};


exports.getResumes = async (req, res) => {
  const data = await Resume.find();
  res.json(data);
};


exports.updateResume = async (req, res) => {
  const data = await Resume.findByIdAndUpdate(
    req.params.id,
    req.body,
    { returnDocument: "after" }
  );
  res.json(data);
};

exports.deleteResume = async (req, res) => {
  await Resume.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
};