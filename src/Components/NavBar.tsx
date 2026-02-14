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
import { APP_NAME, APP_NAME_STYLE } from "../constants/constants";
import StorefrontIcon from "@mui/icons-material/Storefront";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { Cart } from ".";
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

  const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);


  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#000000",
          borderBottom: "1px solid #333",
          paddingRight:"7px"
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={APP_NAME_STYLE}
          >
            {APP_NAME}
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>


            <Tooltip title="Store">
              <IconButton sx={{ color: "#fff" }} component={Link} to="/">
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
