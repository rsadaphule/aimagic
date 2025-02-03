import { Box } from "@mui/material";
import { Post } from "./Post";

export const Feed = () => {
  return (
    <Box flex={4} p={2} sx={{ ml: { xs: "0px" } }}>
      <Post />
      <Post />
      <Post />
    </Box>
  );
};
