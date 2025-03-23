import { Button, Container, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";

function SideDrawer() {
  const [serach, setSearch] = useState("");
  const [searcResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  return (
    <Container>
      <Tooltip title="Search Users to chat" arrow>
        <Button>
          <i className="fa-solid fa-magnifying-glass"></i>
          <Typography d={{ base: "none", md: "flex" }}>Search User</Typography>
        </Button>
      </Tooltip>
    </Container>
  );
}

export default SideDrawer;
