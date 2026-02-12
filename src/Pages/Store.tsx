import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../redux/store/store";
import { useEffect, useState } from "react";
import { fetchGames } from "../redux/features/games/gameSlice";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import GameCard from "../Components/GameCard";

const Store = () => {
  const dispatch = useDispatch<AppDispatch>();
  const games = useSelector((state: RootState) => state.games.games);
  const [filter, setFilter] = useState<"popular" | "mostRated" | "newest">(
    "popular"
  );

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);
console.log(games);


  const displayedGames = [...games]
    .sort((game1, game2) => {
      switch (filter) {
        case "mostRated":
          return new Date(game1.release_date).getTime() - new Date(game2.release_date).getTime();

        case "popular":

          return (game1.rating || 0) - (game2.rating || 0);
        default:
          return 0;
      }
    })
    .slice(0, 10);

  return (
    <Box sx={{ padding: 3 }}>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          mb: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 800, color: "#fff", minWidth: 150 }}
        >
          Explore
        </Typography>

        <FormControl sx={{ minWidth: 180 }} size="small">
          <Select
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value as "popular" | "mostRated")
            }
            sx={{
              color: "#fff",
              ".MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
              ".MuiSvgIcon-root": { color: "#fff" },
            }}
          >
            <MenuItem value="popular">Popular</MenuItem>
            <MenuItem value="mostRated">Most Rated</MenuItem>

          </Select>
        </FormControl>
      </Box>


      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 3,
        }}
      >
        {displayedGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </Box>
    </Box>
  );
};

export default Store;
