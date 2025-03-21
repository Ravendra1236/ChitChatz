import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [picture, setPicture] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !password || !confirmPass) {
      setError("All fields except picture are required.");
      return;
    }

    if (password !== confirmPass) {
      setError("Passwords do not match.");
      return;
    }

    setError(""); // Clear error if validation passes
    console.log({ name, email, password, picture });
    alert("Signup successful!");
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

      {/* Error Message */}
      {error && (
        <Typography color="error" mb={2} textAlign="center">
          {error}
        </Typography>
      )}

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

      {/* Picture Field (Optional) */}
      <Typography variant="body1" mb={1}>
        Profile Picture (Optional)
      </Typography>
      <TextField
        fullWidth
        type="file"
        onChange={(e) => setPicture(e.target.files[0])}
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
      >
        Sign Up
      </Button>
    </Box>
  );
}

export default Signup;
