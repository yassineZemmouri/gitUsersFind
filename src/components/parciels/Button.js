import React, { useState } from "react";
import { Box, Button } from "@mui/material";

function CustomButton() {
  const [state, setState] = useState("Register");
  return (
    <Box>
      <Button>{state}</Button>
    </Box>
  );
}

export default CustomButton;
