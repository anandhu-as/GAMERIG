import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Tooltip,
  Badge,
} from "@mui/material";
import { APP_NAME } from "../constants/constants";
import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from "@mui/icons-material/Storefront";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store/store";
const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const cartQuantity = useSelector((state: RootState) => {
    return state.cart.cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  });

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#000000",
          borderBottom: "1px solid #333",
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              color: "#fff",
              textDecoration: "none",
              fontWeight: 800,
              letterSpacing: "2px",
              fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", cursive',
              textTransform: "uppercase",
            }}
          >
            {APP_NAME}
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Tooltip title="Home">
              <IconButton sx={{ color: "#fff" }} component={Link} to="/">
                <HomeIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Store">
              <IconButton sx={{ color: "#fff" }} component={Link} to="/store">
                <StorefrontIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="About">
              <IconButton sx={{ color: "#fff" }} component={Link} to="/about">
                <InfoIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Cart">
              <IconButton
                sx={{ color: "#fff" }}
                onClick={toggleDrawer(true)}
              >
                <Badge badgeContent={cartQuantity} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      <Cart open={open} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default NavBar;
