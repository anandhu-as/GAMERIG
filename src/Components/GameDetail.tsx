import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store/store";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  Chip,
  Stack,
  Divider,
  IconButton,
  Snackbar,
  Alert,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  incrementCartCount,
  decrementCartCount,
} from "../redux/features/cart/cartSlice";
import type { Game } from "../types/types";
import { gameDetailBox, gameDetailButton, gameDetailCard } from "../constants";

type CartAction = "addtocart" | "increment" | "decrement";

const GameDetail = () => {
  const selectedGame = useSelector(
    (state: RootState) => state.aboutGame.selectedGame
  );

  const cartItems = useSelector((state: RootState) => state.cart.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const existingItem = cartItems.find(
    (item) => item.id === selectedGame?.id
  );

  const handleActions = (action: CartAction, game: Game) => {
    const cartItem = {
      id: game.id,
      thumbnail: game.thumbnail,
      title: game.title,
      short_description: game.short_description,
      genre: game.genre,
      rating: game.rating ?? 0,
      quantity: 1,
    };

    if (action === "addtocart" || action === "increment") {
      dispatch(incrementCartCount(cartItem));
      if (action === "addtocart") setOpen(true);
    } else if (action === "decrement") {
      dispatch(decrementCartCount(game.id));
    }
  };

  if (!selectedGame) {
    return (
      <Typography variant="h6" sx={{ p: 4 }}>
        No game selected
      </Typography>
    );
  }

  return (
    <Box sx={gameDetailBox}>
      <Card elevation={8} sx={gameDetailCard}>
        <IconButton
          onClick={() => navigate(-1)}
          sx={gameDetailButton}
        >
          <CloseIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <CardMedia
            component="img"
            image={selectedGame.thumbnail}
            alt={selectedGame.title}
            sx={{
              width: { xs: "100%", md: 380 },
              height: { xs: 240, md: 320 },
              objectFit: "cover",
            }}
          />

          <Box sx={{ p: { xs: 3, md: 5 }, flex: 1 }}>
            <Typography
              variant="h4"
              fontWeight={700}
              gutterBottom
              sx={{ letterSpacing: 0.5 }}
            >
              {selectedGame.title}
            </Typography>

            <Stack direction="row" spacing={1} mb={3} flexWrap="wrap">
              <Chip
                label={selectedGame.genre}
                color="primary"
                sx={{ fontWeight: 600 }}
              />
              <Chip label={selectedGame.platform} />
              <Chip label={selectedGame.publisher} />
            </Stack>

            <Typography
              variant="body1"
              sx={{
                opacity: 0.85,
                lineHeight: 1.8,
                fontSize: 16,
              }}
            >
              {selectedGame.short_description}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

        {/* 🔹 Bottom Section */}
        <Box sx={{ p: { xs: 3, md: 5 } }}>
          <Typography variant="h5" fontWeight={600} mb={3}>
            Game Details
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: 3,
              background: "rgba(255,255,255,0.04)",
              borderRadius: 3,
            }}
          >
            <Stack spacing={1.5}>
              <Typography>
                <strong>Developer:</strong> {selectedGame.developer}
              </Typography>

              <Typography>
                <strong>Publisher:</strong> {selectedGame.publisher}
              </Typography>

              <Typography>
                <strong>Release Date:</strong> {selectedGame.release_date}
              </Typography>

              <Typography>
                <strong>Platform:</strong> {selectedGame.platform}
              </Typography>

              <Typography>
                <strong>Genre:</strong> {selectedGame.genre}
              </Typography>

              <Typography>
                <strong>Website:</strong>{" "}
                <a
                  href={selectedGame.game_url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#64b5f6",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  Visit Official Page
                </a>
              </Typography>
            </Stack>

            {!existingItem ? (
              <Button
                fullWidth
                variant="contained"
                onClick={() =>
                  handleActions("addtocart", selectedGame)
                }
                sx={{
                  mt: 3,
                  py: 1.3,
                  fontWeight: 700,
                  borderRadius: 2,
                  background: "#3a3a3a",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #5a67d8, #6b46c1)",
                  },
                }}
              >
                Add Game to Cart
              </Button>
            ) : (
              <Stack
                direction="row"
                spacing={2}
                mt={3}
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="outlined"
                  sx={{ minWidth: 45 }}
                  onClick={() =>
                    handleActions("decrement", selectedGame)
                  }
                >
                  -
                </Button>

                <Typography fontWeight={700}>
                  {existingItem.quantity}
                </Typography>

                <Button
                  variant="outlined"
                  sx={{ minWidth: 45 }}
                  onClick={() =>
                    handleActions("increment", selectedGame)
                  }
                >
                  +
                </Button>
              </Stack>
            )}
          </Paper>
        </Box>
      </Card>

  
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="success" variant="filled">
          Game added to cart 🎮
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default GameDetail;
