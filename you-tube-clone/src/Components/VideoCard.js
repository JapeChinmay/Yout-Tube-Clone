import React, { Fragment } from "react";

import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  cardMedia,
  CardMedia,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbNailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
} from "../Constants/Constants";

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Fragment>
      <Card>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{ width: 358, height: 180 }}
          />
        </Link>
      </Card>
    </Fragment>
  );
}

export default VideoCard;
