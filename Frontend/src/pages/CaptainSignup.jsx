import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showVehicleDetails, setShowVehicleDetails] = useState(false);

  const [color, setColor] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [capacity, setCapacity] = useState(1);
  const [vehicleType, setVehicleType] = useState("car");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let tempErrors = {};

    if (firstname.length < 3) tempErrors.firstname = "First name must be at least 3 characters";
    if (lastname && lastname.length < 3) tempErrors.lastname = "Last name must be at least 3 characters";
    if (!email) tempErrors.email = "Email is required";
    if (password.length < 6) tempErrors.password = "Password must be at least 6 characters";

    if (showVehicleDetails) {
      if (color.length < 3) tempErrors.color = "Vehicle color must be at least 3 characters";
      if (licensePlate.length < 5) tempErrors.licensePlate = "License plate must be at least 5 characters";
      if (!capacity || capacity < 1 || capacity > 7) tempErrors.capacity = "Capacity must be between 1 and 7";
    }

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      // Yaha signup logic likho
      console.log("Form submitted", {
        firstname, lastname, email, password, color, licensePlate, capacity, vehicleType
      });
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-80 p-6 rounded-lg bg-white shadow-md">
        <div className="flex justify-center mb-6">
          <img
            src="https://www.pngall.com/wp-content/uploads/4/Uber-Transparent.png"
            alt="RideMate Logo"
            className="w-20 h-20 object-contain"
          />
        </div>

        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="mb-4">
            <label className="block text-sm text-gray-800 mb-2">First Name</label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="John"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname}</p>}
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-sm text-gray-800 mb-2">Last Name</label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm text-gray-800 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="captain@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm text-gray-800 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* Toggle Vehicle Details */}
          <div className="mb-4">
            <button
              type="button"
              onClick={() => setShowVehicleDetails(!showVehicleDetails)}
              className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition"
            >
              {showVehicleDetails ? "Hide Vehicle Details" : "Add Vehicle Details"}
            </button>
          </div>

          {/* Vehicle Details */}
          {showVehicleDetails && (
            <div className="border p-4 rounded-md bg-gray-50 mb-4">
              {/* Vehicle Color */}
              <div className="mb-4">
                <label className="block text-sm text-gray-800 mb-2">Vehicle Color</label>
                <input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  placeholder="Red"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.color && <p className="text-red-500 text-sm">{errors.color}</p>}
              </div>

              {/* License Plate */}
              <div className="mb-4">
                <label className="block text-sm text-gray-800 mb-2">License Plate</label>
                <input
                  type="text"
                  value={licensePlate}
                  onChange={(e) => setLicensePlate(e.target.value)}
                  placeholder="ABC-1234"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.licensePlate && <p className="text-red-500 text-sm">{errors.licensePlate}</p>}
              </div>

              {/* Capacity */}
              <div className="mb-4">
                <label className="block text-sm text-gray-800 mb-2">Capacity</label>
                <input
                  type="number"
                  min="1"
                  max="7"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.capacity && <p className="text-red-500 text-sm">{errors.capacity}</p>}
              </div>

              {/* Vehicle Type */}
              <div className="mb-6">
                <label className="block text-sm text-gray-800 mb-2">Vehicle Type</label>
                <select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="car">Car</option>
                  <option value="bike">Bike</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Sign Up as Captain
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Ready to join the fleet?{" "}
          <Link to="/CaptainLogin" className="text-blue-600 hover:underline">
            Login as Captain
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
