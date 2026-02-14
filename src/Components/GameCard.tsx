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
import { type cartItem, type Game, type GameCardProps } from "../types/types";
import { type AppDispatch, type RootState } from "../redux/store/store";
import { decrementCartCount, incrementCartCount } from "../redux/features/cart/cartSlice";
import { descriptionStyle, GameCardStyle, incrementButtonStyle, quantityBoxStyle, viewDetailButtonStyle } from "../constants/constants";
import { setGameDetail } from "../redux/features/games/aboutGameSlice";
import { useNavigate } from "react-router-dom";
const GameCard = ({ game }: GameCardProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
   
 
    
    const quantity = useSelector((state: RootState) =>
        state.cart.cart.find((item) => item.id === game.id)?.quantity ?? 0
    );

    const handleActions = (action: string, game: cartItem) => {
        action === "increment"
            ? dispatch(incrementCartCount(game))
            : action === "decrement"
                ? dispatch(decrementCartCount(game))
                : "";
    };

    const handleViewDetails = () => {

        dispatch(setGameDetail(game as Game));

        navigate(`/details/${game.id}`);
    };

    return (
        <Card sx={GameCardStyle}>
            <CardMedia
                component="img"
                image={game.thumbnail}
                title={game.title}
                sx={{ height: 190, objectFit: "cover" }}
            />

            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" fontWeight={700}>
                    {game.title}
                </Typography>
                <Typography variant="caption" sx={{ display: "block", mb: 1, opacity: 0.7 }}>
                    {game.genre}
                </Typography>
                <Typography variant="body2" sx={descriptionStyle}>
                    {game.short_description}
                </Typography>
            </CardContent>

            <CardActions sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {quantity > 0 ? (
                    <Box sx={quantityBoxStyle}>
                        <Button
                            size="small"
                            variant="contained"
                            sx={{ minWidth: 32, backgroundColor: "#333", "&:hover": { backgroundColor: "#444" } }}
                            onClick={() => handleActions("increment", game as cartItem)}
                        >
                            +
                        </Button>
                        <Typography variant="subtitle1" fontWeight={600}>
                            {quantity}
                        </Typography>
                        <Button
                            size="small"
                            variant="contained"
                            sx={{ minWidth: 32, backgroundColor: "#333", "&:hover": { backgroundColor: "#444" } }}
                            onClick={() => handleActions("decrement", game as cartItem)}
                        >
                            -
                        </Button>
                    </Box>
                ) : (
                    <Button
                        size="small"
                        variant="contained"
                        sx={incrementButtonStyle}
                        onClick={() => handleActions("increment", game as cartItem)}
                    >
                        Add Game
                    </Button>
                )}

                <Button
                    size="small"
                    variant="outlined"
                    sx={viewDetailButtonStyle}
                    onClick={handleViewDetails}
                >
                    View Details
                </Button>
            </CardActions>
        </Card>
    );
};

export default GameCard;
