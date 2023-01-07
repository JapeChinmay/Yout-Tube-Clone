import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./Components/NavBar";
import Feed from "./Components/Feed";
import SearchFeed from "./Components/SearchFeed";
import ChannelDetail from "./Components/ChannelDetail";
import VideoDetail from "./Components/VideoDetail";

import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "black" }}>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
