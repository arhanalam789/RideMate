import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainContext } from "../context/CaptainContext";

const CaptainSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showVehicleDetails, setShowVehicleDetails] = useState(false);

  const [color, setColor] = useState("");
  const [liscencePlate, setLiscencePlate] = useState("");
  const [capicity, setCapicity] = useState(1);
  const [vehicletype, setVehicletype] = useState("car");

  const [errors, setErrors] = useState({});
  const { captain, setCaptain } = useContext(CaptainContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempErrors = {};

    if (firstname.length < 3) tempErrors.firstname = "First name must be at least 3 characters";
    if (lastname && lastname.length < 3) tempErrors.lastname = "Last name must be at least 3 characters";
    if (!email) tempErrors.email = "Email is required";
    if (password.length < 6) tempErrors.password = "Password must be at least 6 characters";

    if (showVehicleDetails) {
      if (color.length < 3) tempErrors.color = "Vehicle color must be at least 3 characters";
      if (liscencePlate.length < 5) tempErrors.liscencePlate = "License plate must be at least 5 characters";
      if (!capicity || capicity < 1 || capicity > 7) tempErrors.capicity = "Capacity must be between 1 and 7";
      if (!vehicletype) tempErrors.vehicletype = "Vehicle type is required";
    }

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      try {
        const newCaptain = {
          fullname: { firstname, lastname },
          email,
          password,
          vehicleDetails: showVehicleDetails
            ? { color, liscencePlate, capicity, vehicletype }
            : undefined,
        };

        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/captains/register`,
          newCaptain
        );

        if (response.status === 201) {
          const data = response.data;
          setCaptain(data);
          navigate("/CaptainLogin");
        }

        // clear form
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setColor("");
        setLiscencePlate("");
        setCapicity(1);
        setVehicletype("car");
        setShowVehicleDetails(false);
        setErrors({});
      } catch (err) {
        console.error("Signup failed:", err);
        setErrors({ api: err.response?.data?.message || "Signup failed. Try again." });
      }
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

              {/* Liscence Plate */}
              <div className="mb-4">
                <label className="block text-sm text-gray-800 mb-2">License Plate</label>
                <input
                  type="text"
                  value={liscencePlate}
                  onChange={(e) => setLiscencePlate(e.target.value)}
                  placeholder="ABC-1234"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.liscencePlate && <p className="text-red-500 text-sm">{errors.liscencePlate}</p>}
              </div>

              {/* Capicity */}
              <div className="mb-4">
                <label className="block text-sm text-gray-800 mb-2">Capacity</label>
                <input
                  type="number"
                  min="1"
                  max="7"
                  value={capicity}
                  onChange={(e) => setCapicity(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.capicity && <p className="text-red-500 text-sm">{errors.capicity}</p>}
              </div>

              {/* Vehicle Type */}
              <div className="mb-6">
                <label className="block text-sm text-gray-800 mb-2">Vehicle Type</label>
                <select
                  value={vehicletype}
                  onChange={(e) => setVehicletype(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="car">Car</option>
                  <option value="bike">Bike</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
            </div>
          )}

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
