import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setError("Both email and password are required.");
      return;
    }

    setError(""); // Clear error if validation passes
    console.log({ email, password });
    alert("Sign In successful!");
  };

  const handleGuestLogin = () => {
    setEmail("guest@chitchatz.com");
    setPassword("guest123");
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

      {/* Error Message */}
      {error && (
        <Typography color="error" mb={2} textAlign="center">
          {error}
        </Typography>
      )}

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
      >
        Sign In
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
    </Box>
  );
}

export default Signin;
