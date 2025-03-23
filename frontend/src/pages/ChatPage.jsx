import React from "react";

import { Container } from "@mui/material";
import SideDrawer from "../components/SideDrawer";
import ChatBox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import { ChatState } from "../context/ChatProvider";

function ChatPage() {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "91.5vh",
            padding: "10px",
          }}
        >
          {user && (
            <Container sx={{ width: "30%", pr: 2 }}>
              <MyChats />
            </Container>
          )}
          {user && (
            <Container sx={{ width: "70%" }}>
              <ChatBox />
            </Container>
          )}
        </Container>
      </Container>
    </div>
  );
}

export default ChatPage;
