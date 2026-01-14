import { useState } from "react";
import axios from "axios";

const DanceInstructorForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    danceStyles: [],
    experience: "",
    teachingAgeGroup: [],
    availability: "",
    mode: "",
    danceVideoLink: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${import.meta.env.VITE_API_URL}/api/instructors/apply`, formData);
    alert("Form Submitted Successfully 🎉");
    location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-xl space-y-4"
      >
        <p className="text-2xl font-bold text-center text-gray-800">
          Looking for Dance Instructors
        </p>

        <input
          name="fullName"
          placeholder="Full Name"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />

        <input
          name="city"
          placeholder="City"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <select
          name="experience"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        >
          <option value="">Years of Experience</option>
          <option value="1">1+</option>
          <option value="3">3+</option>
          <option value="5">5+</option>
        </select>

        

        <input
          name="Dance Portfolio Link (Insta/Youtube)"
          placeholder="Dance Portfolio Link (Insta/Youtube)"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Why do you want to join?"
          className="w-full border p-2 rounded"
          rows="3"
          onChange={handleChange}
        />

        <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default DanceInstructorForm;
