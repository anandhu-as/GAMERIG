import {
    Typography,
    Box,
    Drawer,
    IconButton,
    Divider
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import type { cartItem, CartProp } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store/store";
import { decrementCartCount, incrementCartCount, removeFromCart } from "../redux/features/cart/cartSlice";
import { cartBoxStyle, cartImgStyle } from "../constants/index";
const Cart = ({ open, toggleDrawer }: CartProp) => {
    const dispatch = useDispatch<AppDispatch>();
    const cartValues = useSelector((state: RootState) => state.cart.cart);

console.log(cartValues);

    //to get total items in cart
  const cartQuantity = useSelector((state: RootState) => {
    return state.cart.cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  });

    ///to handle actionss
    const handleActions = (actions: string, item: cartItem) => {
        
        actions === "decrement" ?
            dispatch(decrementCartCount(item.id))
            : actions === "increment" ?
                dispatch(incrementCartCount(item))
                :
                dispatch(removeFromCart(item.id))

    }
    return (
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <Box
                sx={cartBoxStyle}
            >
                <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, mb: 3, textAlign: "center" }}
                >
                    Your Cart
                </Typography>

                {cartValues.length < 1 ? (
                    <h1>your cart is empty</h1>
                ) : <Box sx={{ flex: 1, overflowY: "auto" }}>
                    {cartValues.map((item) => (
                        <Box
                            key={item.id}
                            sx={{
                                backgroundColor: "#1a1a1a",
                                p: 2,
                                mb: 2,
                                borderRadius: 2
                            }}
                        >
                            <Box sx={{ display: "flex", gap: 2 }}>
                                <Box
                                    component="img"
                                    src={item.thumbnail}
                                    alt={item.title}
                                    sx={cartImgStyle}
                                />

                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                        {item.title}
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            mt: 1
                                        }}
                                    >
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            <IconButton size="small" sx={{ color: "#fff" }} onClick={() => handleActions("decrement", item)}>
                                                <RemoveIcon fontSize="small" />
                                            </IconButton>

                                            <Typography>{item.quantity}</Typography>

                                            <IconButton size="small" sx={{ color: "#fff" }} onClick={() => handleActions("increment", item)}>
                                                <AddIcon fontSize="small" />
                                            </IconButton>
                                        </Box>

                                        <IconButton sx={{ color: "#ff4d4d" }} onClick={() => handleActions("remove", item)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>}
                <Divider sx={{ backgroundColor: "#333", my: 2 }} />
                <h3>Total Items:{cartQuantity}</h3>
            </Box>

        </Drawer>
    );
};

export default Cart;
