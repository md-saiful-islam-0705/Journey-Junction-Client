import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const Login = () => {
  const { signInWithGoogle, signInWithGitHub, signIn } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    signIn(email, password)
      .then(() => {
        toast.success("Login successful!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        if (
          error.code === "auth/user-not-found" ||
          error.code === "auth/wrong-password"
        ) {
          toast.error("Invalid email or password");
        } else {
          console.error(error);
          toast.error("An error occurred while logging in");
        }
      });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Login-CrestView Properties</title>
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="flex-grow mb-10 ">
          <div className="container mx-auto ">
            <h2 className="text-3xl my-10 text-center font-semibold">Login</h2>
            <form
              onSubmit={handleLogin}
              data-aos="slide-left"
              className=" md:w-3/4 lg:w-1/2 mx-auto bg-gradient-to-br from-pink-300 to-purple-500 p-7 shadow-md rounded-lg"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Email</span>
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Password</span>
                </label>
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-lg"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline text-white border-pink-100 hover:bg-violet-600 hover:border-none">
                  Login
                </button>
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <button onClick={signInWithGoogle} className="btn btn-google">
                  Sign in with Google <FcGoogle />
                </button>
                <button onClick={signInWithGitHub} className="btn btn-github">
                  Sign in with GitHub <FaGithub />
                </button>
              </div>
            </form>
            <p className="text-center mt-4">
              Do not have an account{" "}
              <Link
                className="bg-gradient-to-r from-pink-400 to-violet-600 bg-clip-text text-transparent font-bold"
                to="/register"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
        <Footer className="mt-auto"></Footer>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
