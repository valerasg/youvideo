import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card sx={{ 
    width: { xs: '100%', sm: '358px', md: "320px" }, 
    boxShadow: "none", 
    borderRadius: "12px",
    backgroundColor: '#1e1e1e',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0px 4px 20px rgba(0,0,0,0.5)',
      zIndex: 10
    }
  }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia 
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} 
        alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px', md: '320px'}, height: 180, borderRadius: "12px 12px 0 0" }} 
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard