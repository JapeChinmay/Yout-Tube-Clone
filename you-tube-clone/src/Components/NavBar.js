import React, { Fragment } from "react";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { logo } from "../Constants/Constants";

const NavBar = () => {
  return (
    <Fragment>
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          position: "sticky",
          background: "#000",
          top: 0,
          justifyContent: "space-between",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }} />
        <img src={logo} alt="logomain" height={45} />
        <SearchBar />
      </Stack>
    </Fragment>
  );
};

export default NavBar;
