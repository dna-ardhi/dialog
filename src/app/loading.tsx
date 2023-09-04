import { Box, CircularProgress } from "@mui/material";
import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Loading: React.FunctionComponent<Props> = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
