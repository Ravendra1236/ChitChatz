import React from "react";
import { Skeleton } from "@mui/material";

const ChatLoading = () => {
  return (
    <div className="flex flex-col space-y-2">
      <Skeleton variant="rectangular" height={45} className="rounded-md" />
      <Skeleton variant="rectangular" height={45} className="rounded-md" />
      <Skeleton variant="rectangular" height={45} className="rounded-md" />
      <Skeleton variant="rectangular" height={45} className="rounded-md" />
      <Skeleton variant="rectangular" height={45} className="rounded-md" />
      <Skeleton variant="rectangular" height={45} className="rounded-md" />
      <Skeleton variant="rectangular" height={45} className="rounded-md" />
      <Skeleton variant="rectangular" height={45} className="rounded-md" />
      <Skeleton variant="rectangular" height={45} className="rounded-md" />
      <Skeleton variant="rectangular" height={45} className="rounded-md" />
      <Skeleton variant="rectangular" height={45} className="rounded-md" />
      <Skeleton variant="rectangular" height={45} className="rounded-md" />
    </div>
  );
};

export default ChatLoading;
