import express from "express";
import Instructor from "../models/DanceInstructor.js";

const router = express.Router();

router.post("/apply", async (req, res) => {
  try {
    const instructor = new Instructor(req.body);
    await instructor.save();

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

export default router;
