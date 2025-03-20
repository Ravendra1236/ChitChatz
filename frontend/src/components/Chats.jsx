import React, { useEffect, useState } from "react";
import axios from "axios";

function Chats() {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const data = await axios.get("http://127.0.0.1:5000/api/chats");
    console.log(data.data);

    setChats(data.data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((ch) => (
        <div key={ch._id}>{ch.chatName}</div>
      ))}
    </div>
  );
}

export default Chats;
