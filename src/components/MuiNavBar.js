import {
  Stack,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

export const MuiNavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log(event);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  
  const goToHome = () => {

  }
  return (
    <AppBar position="fixed" color={"secondary"}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GSurfSpot
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" onClick={''}>Home</Button>
          <Button color="inherit">Interact</Button>
          <Button color="inherit">About</Button>
          <Button
            color="inherit"
            id="resources-button"
            onClick={handleClick}
            aria-controls={open ? "resources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Resources
          </Button>
          <Menu
            id="resources-menu"
            anchorEl={anchorEl}
            open={open}
            MenuListProps={{ "aria-labelledby": "resources-button" }}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {/* can i put two effects on  onClick event ???  */}
            <MenuItem onClick={handleClose}>Blog</MenuItem>
            <MenuItem>Podcast</MenuItem>
          </Menu>
          <Button color="inherit">Login</Button>
        </Stack>
        {/* way to position, go to popover component in MUI doc to choose the good place to put the component  */}
      </Toolbar>
    </AppBar>
  );
};
