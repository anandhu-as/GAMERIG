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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { incrementCartCount, decrementCartCount } from "../redux/features/cart/cartSlice";
import type { Game, cartItem } from "../types/types";

const GameDetail = () => {
  const selectedGame = useSelector(
    (state: RootState) => state.aboutGame.selectedGame
  );

  const cartItems = useSelector((state: RootState) => state.cart.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  if (!selectedGame) {
    return (
      <Typography variant="h6" sx={{ p: 4 }}>
        No game selected
      </Typography>
    );
  }

  const existingItem = cartItems.find(
    (item) => item.id === selectedGame.id
  );

  const handleAddToCart = (game: Game) => {
    const cartData: cartItem = {
      id: game.id,
      thumbnail: game.thumbnail,
      title: game.title,
      short_description: game.short_description,
      genre: game.genre,
      rating: game.rating ?? 0,
      quantity: 1,
    };

    dispatch(incrementCartCount(cartData));
    setOpen(true);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: { xs: 2, md: 5 },
        backgroundColor: "#121212",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          maxWidth: 1100,
          width: "100%",
          backgroundColor: "#1e1e1e",
          color: "#fff",
          borderRadius: 3,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <IconButton
          onClick={() => navigate(-1)}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "#fff",
          }}
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
              width: { xs: "100%", md: 320 },
              height: { xs: 200, md: 220 },
              objectFit: "cover",
            }}
          />

          <Box sx={{ p: 4, flex: 1 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              {selectedGame.title}
            </Typography>

            <Stack direction="row" spacing={1} mb={2} flexWrap="wrap">
              <Chip label={selectedGame.genre} color="primary" />
              <Chip label={selectedGame.platform} />
              <Chip label={selectedGame.publisher} />
            </Stack>

            <Typography
              variant="body1"
              sx={{
                opacity: 0.85,
                mb: 3,
                lineHeight: 1.7,
              }}
            >
              {selectedGame.short_description}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "#333" }} />

        <Box sx={{ p: 4 }}>
          <Typography variant="h5" fontWeight={600} mb={2}>
            Game Details
          </Typography>

          <Stack spacing={1}>
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
                style={{ color: "#90caf9" }}
              >
                Visit Official Page
              </a>
            </Typography>

            {!existingItem ? (
              <Button
                variant="contained"
                onClick={() => handleAddToCart(selectedGame)}
                sx={{
                  mt: 2,
                  backgroundColor: "#45494c",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#435161" },
                }}
              >
                Add Game to Cart
              </Button>
            ) : (
              <Stack direction="row" spacing={2} mt={2} alignItems="center">
                <Button
                  variant="outlined"
                  onClick={() =>
                    dispatch(decrementCartCount(selectedGame.id))
                  }
                >
                  -
                </Button>

                <Typography>{existingItem.quantity}</Typography>

                <Button
                  variant="outlined"
                  onClick={() =>
                    dispatch(
                      incrementCartCount({
                        id: selectedGame.id,
                        thumbnail: selectedGame.thumbnail,
                        title: selectedGame.title,
                        short_description: selectedGame.short_description,
                        genre: selectedGame.genre,
                        rating: selectedGame.rating ?? 0,
                        quantity: 1,
                      })
                    )
                  }
                >
                  +
                </Button>
              </Stack>
            )}
          </Stack>
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
