import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { AuthContext } from "../../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();

    // Password verification
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    if (
      !uppercaseRegex.test(password) ||
      !lowercaseRegex.test(password) ||
      password.length < 6
    ) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    createUser(email, password, name, photoURL)
      .then((result) => {
        console.log(result.user);
        // Show success toast
        toast.success("Registration successful!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to register. Please try again.");
      });
  };

  return (
    <>
      <Helmet>
        <title>Register-CrestView Properties</title>
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="container mx-auto mb-10 flex-grow">
          <h2 className="text-3xl my-10 text-center font-semibold">Register</h2>
          <form
            className="md:w-3/4 lg:w-1/2 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 p-7 shadow-lg rounded-lg"
            onSubmit={handleRegister}
            data-aos="slide-up"
          >
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-lg">Name</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-lg">Email</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-lg">Photo URL</span>
              </label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-lg">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="input input-bordered pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 text-2xl right-2 top-10 flex items-center px-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-lg">Confirm Password</span>
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="input input-bordered pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-2 text-2xl top-10 flex items-center px-2"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-outline text-white border-pink-100 hover:bg-violet-600 hover:border-none">
                Register
              </button>
            </div>
          </form>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link
              className="bg-gradient-to-r from-pink-400 to-violet-600 bg-clip-text text-transparent font-bold"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
};

export default Register;
