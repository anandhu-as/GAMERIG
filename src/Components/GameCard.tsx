import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { type GameCardProps } from "../types/types";
import { type AppDispatch, type RootState } from "../redux/store/store";
import { decrementCartCount, incrementCartCount } from "../redux/features/cart/cartSlice";
const GameCard = ({ game }: GameCardProps) => {
    const dispatch = useDispatch<AppDispatch>();

    const quantity = useSelector((state: RootState) =>
        state.cart.cart.find((item) => item.id === game.id)?.quantity ?? 0
    );
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                borderRadius: 4,
                backgroundColor: "#1c1c1c",
                color: "#fff",
                boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                transition: "all 0.25s ease",
                "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 28px rgba(0,0,0,0.6)",
                },
            }}
        >
            <CardMedia
                component="img"
                image={game.thumbnail}
                title={game.title}
                sx={{
                    height: 190,
                    objectFit: "cover",
                }}
            />

            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" fontWeight={700}>
                    {game.title}
                </Typography>

                <Typography
                    variant="caption"
                    sx={{ display: "block", mb: 1, opacity: 0.7 }}
                >
                    {game.genre}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        opacity: 0.8,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                    }}
                >
                    {game.short_description}
                </Typography>
            </CardContent>

            <CardActions
                sx={{
                    p: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                {quantity > 0 ? (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            backgroundColor: "#2a2a2a",
                            borderRadius: 3,
                            px: 1.5,
                            py: 0.5,
                        }}
                    >
                        <Button
                            size="small"
                            variant="contained"
                            sx={{
                                minWidth: 32,
                                backgroundColor: "#333",
                                "&:hover": { backgroundColor: "#444" },
                            }}
                            onClick={() => dispatch(incrementCartCount(game))}
                        >
                            +
                        </Button>

                        <Typography variant="subtitle1" fontWeight={600}>
                            {quantity}
                        </Typography>

                        <Button
                            size="small"
                            variant="contained"
                            sx={{
                                minWidth: 32,
                                backgroundColor: "#333",
                                "&:hover": { backgroundColor: "#444" },
                            }}
                            onClick={() => dispatch(decrementCartCount(game))}
                        >
                            -
                        </Button>
                    </Box>
                ) : (
                    <Button
                        size="small"
                        variant="contained"
                        sx={{
                            flex: 1,
                            borderRadius: 3,
                            textTransform: "none",
                            fontWeight: 600,
                            backgroundColor: "#3a3a3a",
                            "&:hover": { backgroundColor: "#4a4a4a" },
                        }}
                        onClick={() => dispatch(incrementCartCount(game))}
                    >
                        Add Game
                    </Button>
                )}

                <Button
                    size="small"
                    variant="outlined"
                    sx={{
                        borderRadius: 3,
                        textTransform: "none",
                        color: "#fff",
                        borderColor: "#444",
                        "&:hover": {
                            borderColor: "#666",
                            backgroundColor: "#2a2a2a",
                        },
                    }}
                >
                    View Details
                </Button>
            </CardActions>
        </Card>
    );
};

export default GameCard;
