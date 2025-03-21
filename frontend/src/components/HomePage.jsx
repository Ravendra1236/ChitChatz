import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Signin from "./Signin";
import Signup from "./Signup";

function HomePage() {
  const [isSignIn, setIsSignIn] = useState(true); // State to toggle between Sign In and Sign Up

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        padding: "20px",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          textAlign: "center",
          marginBottom: "40px",
          color: "white",
        }}
      >
        <Typography
          variant="h3"
          fontFamily={"Work Sans"}
          fontWeight="bold"
          gutterBottom
        >
          Welcome to ChitChatz
        </Typography>
        <Typography variant="h6" fontFamily={"Work Sans"}>
          Connect and chat with your friends seamlessly!
        </Typography>
      </Box>

      {/* Login Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "30px",
          width: "100%",
          maxWidth: "500px",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Buttons for Sign In and Sign Up */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            width: "100%",
          }}
        >
          <Button
            variant={isSignIn ? "contained" : "outlined"}
            onClick={() => setIsSignIn(true)}
            sx={{
              flex: 1,
              marginRight: "10px",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Sign In
          </Button>
          <Button
            variant={!isSignIn ? "contained" : "outlined"}
            onClick={() => setIsSignIn(false)}
            sx={{
              flex: 1,
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Sign Up
          </Button>
        </Box>

        {/* Sign In Form */}
        {isSignIn && <Signin />}

        {/* Sign Up Form */}
        {!isSignIn && <Signup />}
      </Box>
    </Container>
  );
}

export default HomePage;
