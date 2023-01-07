import React, { Fragment } from "react";

import { Stack, Box } from "@mui/material";

import ChannelCard from "./ChannelCard";

import VideoCard from "./VideoCard";

const Videos = ({ Videos }) => {
  return (
    <Fragment>
      <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
        {Videos.map((item, idx) => {
          return (
            <Box key={idx}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          );
        })}
      </Stack>
    </Fragment>
  );
};

export default Videos;
