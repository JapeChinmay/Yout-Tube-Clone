import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";

import { shadows } from "@mui/system";

const SearchBar = () => {
  return (
    <Fragment>
      <Paper
        component="form"
        onSubmit={() => {}}
        sx={{
          borderRadius: "20px",
          border: "1px, solid, #e3e3e3",
          pl: "2",
          mr: { sm: "5" },
        }}
      ></Paper>

      <input
        className="search-bar"
        placeholder="search"
        value=""
        onChange={() => {}}
      />

      <IconButton type="submit" sx={{ p: "10px", color: "red" }}></IconButton>
    </Fragment>
  );
};

export default SearchBar;
