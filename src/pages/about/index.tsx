import * as React from "react";
import { FC, useState, useEffect } from "react";

import Markdown from "@/components/Markdown";
import post from "@/_posts/about.md";
import { MaleRounded } from "@mui/icons-material";
import { Box, Container } from "@mui/material";

const AboutPage: FC = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#fff",
          boxShadow: 1,
          borderRadius: 2,
          p: 4,
          maxWidth: 4 / 5,
          minWidth: 300,
          margin: "auto",
          my: 4,
        }}
      >
        <Markdown className="markdown">{post}</Markdown>
      </Box>
    </>
  );
};

export default AboutPage;
