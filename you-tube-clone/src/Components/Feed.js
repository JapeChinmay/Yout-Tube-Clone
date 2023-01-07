import React, { useState, useEffect, Fragment } from "react";

import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";

const Feed = () => {
  return (
    <Fragment>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 },
          }}
        >
          <SideBar />
          <Typography
            className="copyright"
            variant="body2"
            sx={{ mt: 1.5, color: " #fff" }}
          >
            CopyRight 2023 Chinmay Jape
          </Typography>
        </Box>

        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: "2" }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            fontFamily="monospace bold"
            mb={2}
            sx={{
              color: "white",
            }}
          >
            New <span style={{ color: "red" }}>Videos</span>
          </Typography>

          <Videos videos={[]} />
        </Box>
      </Stack>
    </Fragment>
  );
};

export default Feed;
