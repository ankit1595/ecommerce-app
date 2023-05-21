import React from "react";
import { Box, Button } from "@mui/material";
import { CATEGORIES } from "../utils/constants";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero */}

      {/* Categories */}
      <Box>
        {CATEGORIES.map((category) => (
          <Button onClick={() => navigate("/products")}>{category.name}</Button>
        ))}
      </Box>
    </div>
  );
}

export default Home;
