import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Correct import for react-router-dom v6+
import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("warning");
  const navigate = useNavigate(); // Initialize useNavigate

  const postDetails = (pics) => {
    setLoading(true);

    if (!pics) {
      setSnackbarMessage("Please select an Image");
      setSnackbarSeverity("warning");
      setSnackbarOpen(true);
      setLoading(false);
      return;
    }

    if (pics.type !== "image/jpeg" && pics.type !== "image/png") {
      setSnackbarMessage("Please select a valid Image (JPEG or PNG)");
      setSnackbarSeverity("warning");
      setSnackbarOpen(true);
      setLoading(false);
      return;
    }

    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "chat-app");
    data.append("cloud_name", "dya5bp0u6");

    fetch("https://api.cloudinary.com/v1_1/dya5bp0u6/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPicture(data.url.toString());
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setSnackbarMessage("Image upload failed. Please try again.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
        setLoading(false);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !password || !confirmPass) {
      setSnackbarMessage("All fields except picture are required.");
      setSnackbarSeverity("warning");
      setSnackbarOpen(true);
      return;
    }

    if (password !== confirmPass) {
      setSnackbarMessage("Passwords do not match.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/api/user",
        { name, email, password, picture },
        config
      );

      setSnackbarMessage("Signup successful!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);

      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chats"); // Use navigate instead of history.push
    } catch (error) {
      setSnackbarMessage(
        error.response && error.response.data.message
          ? error.response.data.message
          : "Signup failed. Please try again."
      );
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" mb={2} textAlign="center">
        Sign Up
      </Typography>

      {/* Name Field */}
      <Typography variant="body1" mb={1}>
        Full Name
      </Typography>
      <TextField
        fullWidth
        placeholder="Enter your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
        margin="normal"
      />

      {/* Email Field */}
      <Typography variant="body1" mb={1}>
        Email Address
      </Typography>
      <TextField
        fullWidth
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
        margin="normal"
      />

      {/* Password Field */}
      <Typography variant="body1" mb={1}>
        Password
      </Typography>
      <TextField
        fullWidth
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        variant="outlined"
        margin="normal"
      />

      {/* Confirm Password Field */}
      <Typography variant="body1" mb={1}>
        Confirm Password
      </Typography>
      <TextField
        fullWidth
        placeholder="Re-enter your password"
        type="password"
        value={confirmPass}
        onChange={(e) => setConfirmPass(e.target.value)}
        variant="outlined"
        margin="normal"
      />

      {/* Picture Field */}
      <Typography variant="body1" mb={1}>
        Profile Picture (Optional)
      </Typography>
      <TextField
        fullWidth
        type="file"
        onChange={(e) => postDetails(e.target.files[0])}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />

      {/* Submit Button */}
      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        type="submit"
        disabled={loading}
      >
        {loading ? "Loading..." : "Sign Up"}
      </Button>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Signup;
