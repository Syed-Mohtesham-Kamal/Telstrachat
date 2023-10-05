import { Alert, Button, Snackbar } from "@mui/material";
import { purple } from "@mui/material/colors";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentUser, register } from "../../Redux/Auth/Action";

const Signup = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    full_name: "",
    email: "",
    password: ""
  });
  const { auth } = useSelector(store => store);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const validateForm = () => {
    const { full_name, email, password } = inputData;

    if (full_name.trim() === "") {
      alert("Please enter a full name");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("handle submit", inputData);
      dispatch(register(inputData));
      setOpenSnackbar(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((values) => ({ ...values, [name]: value }));
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    if (token) dispatch(currentUser(token));
  }, [token]);

  useEffect(() => {
    if (auth.reqUser?.full_name) {
      navigate("/homepage");
    }
  }, [auth.reqUser]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen relative">
      <div className="logo absolute top-4 left-4">
      <img src='Images/TLogo.png' alt="Dummy Logo" style={{ width: '150px' }} />
      </div>
      <div className="w-[30%] p-10 shadow-md bg-white">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <p className="mb-2">User Name</p>
            <input
              className="py-2 px-3 outline outline-purple-600 w-full rounded-md border-1"
              type="text"
              placeholder="Enter username"
              name="full_name"
              onChange={handleChange}
              value={inputData.full_name}
            />
          </div>

          <div>
            <p className="mb-2">Email</p>
            <input
              className="py-2 px-3 outline outline-purple-600 w-full rounded-md border-1"
              type="text"
              placeholder="Enter your Email"
              name="email"
              onChange={handleChange}
              value={inputData.email}
            />
          </div>

          <div>
            <p className="mb-2">Password</p>
            <input
              className="py-2 px-2 outline outline-purple-600 w-full rounded-md border-1"
              type="password"
              placeholder="Enter your Password"
              name="password"
              onChange={handleChange}
              value={inputData.password}
            />
          </div>

          <Button
  type="submit"
  sx={{
    bgcolor: '#8e89c2',
    padding: '.5rem 0rem',
    '&:hover': {
      bgcolor: '#34358f',
    }
  }}
  className="w-full bg-purple"
  variant="contained"
>
  Sign Up
</Button>
        </form>
        <div className="flex space-x-3 item-center mt-5">
          <p className="">Already Have Account?</p>
          <Button variant="text" onClick={() => navigate("/signin")}>
            sign in
          </Button>
        </div>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: "100%" }}>
          Your Account Successfully Created!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Signup;
