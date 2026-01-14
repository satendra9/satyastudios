import mongoose from "mongoose";

const danceInstructorSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String },

    danceStyles: [String],
    experience: { type: Number },
    teachingAgeGroup: [String],

    availability: { type: String },
    mode: { type: String },

    resumeUrl: { type: String },
    danceVideoLink: { type: String },

    message: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("DanceInstructor", danceInstructorSchema);
