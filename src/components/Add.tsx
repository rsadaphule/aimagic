import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import Fab from "@mui/material/Fab";
import Modal from "@mui/material/Modal";
import { Box, styled, Typography, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { EmojiEmotions } from "@mui/icons-material";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DateRangeIcon from "@mui/icons-material/DateRange";

const UserBox = styled(Box)(({}) => ({
  alignItems: "center",
  gap: "10px",
  display: "flex",
  marginBottom: "10px",
}));

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Add = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip
        title="Add New Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "50%", md: 30 }, // Use "50%" instead of "calc(50%)"
          transform: { xs: "translateX(-50%)", md: "none" }, // Centers the button
        }}
        onClick={handleOpen}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color="text.primary"
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://rsadaphule.github.io/assets/images/self_passport_photo.jpeg"
              sx={{ width: 30, height: 30 }}
            ></Avatar>
            <Typography fontWeight={500}>John Doe</Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            label=""
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" mt={2} mb={3} gap={1}>
            <EmojiEmotions color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="Basic button group"
            fullWidth
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};
