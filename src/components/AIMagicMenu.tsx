import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PsychologyIcon from "@mui/icons-material/Psychology";
import Avatar from "@mui/material/Avatar";
import { Stack, styled, InputBase } from "@mui/material";

import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

export default function AIMagicMenu() {
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    alignItems: "center",
    gap: "10px",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    alignItems: "center",
    gap: "10px",
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  const [open, setOpen] = useState(false);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(true);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(false);
  };

  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ justifyContent: "space-between" }}
        >
          <PsychologyIcon />
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Magic AI
          </Typography>
        </Stack>
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={3} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            alt="Ravindra Sadaphule"
            sx={{ width: 30, height: 30 }}
            src="https://rsadaphule.github.io/assets/images/self_passport_photo.jpeg"
            onClick={handleOpen}
          />
        </Icons>
        <UserBox onClick={handleOpen}>
          <Avatar
            alt="Ravindra Sadaphule"
            sx={{ width: 30, height: 30 }}
            src="https://rsadaphule.github.io/assets/images/self_passport_photo.jpeg"
          />
          <Typography variant="caption">Ravindra</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
