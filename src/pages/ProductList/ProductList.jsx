import React from "react";
import { Box } from "@mui/material";

function ProductList() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ flexBasis: 250 }}>Filters</Box>
      <Box>Showing All Products</Box>
    </Box>
  );
}

export default ProductList;
