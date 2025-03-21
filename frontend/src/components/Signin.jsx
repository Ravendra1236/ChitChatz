import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("warning");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setSnackbarMessage("Both email and password are required.");
      setSnackbarSeverity("warning");
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
        "http://localhost:5000/api/user/login",
        { email, password },
        config
      );

      setSnackbarMessage("Sign In successful!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);

      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chats");
    } catch (error) {
      setSnackbarMessage(
        error.response && error.response.data.message
          ? error.response.data.message
          : "Sign In failed. Please try again."
      );
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      setLoading(false);
    }
  };

  const handleGuestLogin = () => {
    setEmail("guest@chitchatz.com");
    setPassword("guest123");
    setSnackbarMessage("Guest credentials applied!");
    setSnackbarSeverity("info");
    setSnackbarOpen(true);
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
        Sign In
      </Typography>

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

      {/* Submit Button */}
      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        type="submit"
        disabled={loading}
      >
        {loading ? "Loading..." : "Sign In"}
      </Button>

      {/* Guest User Button */}
      <Button
        fullWidth
        variant="outlined"
        color="secondary"
        sx={{ mt: 2 }}
        onClick={handleGuestLogin}
      >
        Use Guest Credentials
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

export default Signin;
