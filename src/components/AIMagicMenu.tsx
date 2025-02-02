import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PsychologyIcon from "@mui/icons-material/Psychology";
import Avatar from "@mui/material/Avatar";
import {
  Stack,
  Button,
  Menu,
  MenuItem,
  styled,
  InputBase,
} from "@mui/material";

import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function AIMagicMenu() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          />
        </Icons>
        <UserBox>
          <Avatar
            alt="Ravindra Sadaphule"
            sx={{ width: 30, height: 30 }}
            src="https://rsadaphule.github.io/assets/images/self_passport_photo.jpeg"
          />
          <Typography variant="caption">Ravindra</Typography>
        </UserBox>
      </StyledToolBar>
    </AppBar>
  );
}
