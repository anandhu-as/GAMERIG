export const APP_NAME: string = "GameRig";
export const BASE_URL =
  "https://corsproxy.io/?https://www.freetogame.com/api/games";
//about

export const features = [
  {
    title: "Game Discovery",
    desc: "Browse thousands of games with detailed information, ratings and release data.",
  },
  {
    title: "Detailed Insights",
    desc: "View genres, platforms, screenshots and gameplay summaries in one place.",
  },
  {
    title: "Trending & Popular",
    desc: "Stay updated with the most popular and top-rated games worldwide.",
  },
];
//about desc
export const description = ` A modern platform to explore detailed information about games 
            discover trending titles, genres, ratings and more`;
//styles.........👾
export const APP_NAME_STYLE = {
  flexGrow: 1,
  color: "#fff",
  textDecoration: "none",
  fontWeight: 800,
  letterSpacing: "2px",
  fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", cursive',
  textTransform: "uppercase",
};
export const cartBoxStyle = {
  width: 350,
  height: "100%",
  p: 3,
  backgroundColor: "#0f0f0f",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
};
export const cartImgStyle = {
  width: 60,
  height: 60,
  objectFit: "cover",
  borderRadius: 2,
};
export const GameCardStyle = {
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
};
export const descriptionStyle = {
  opacity: 0.8,
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
};
export const quantityBoxStyle = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  backgroundColor: "#2a2a2a",
  borderRadius: 3,
  px: 1.5,
  py: 0.5,
};
export const incrementButtonStyle = {
  flex: 1,
  borderRadius: 3,
  textTransform: "none",
  fontWeight: 600,
  backgroundColor: "#3a3a3a",
  "&:hover": { backgroundColor: "#4a4a4a" },
};
export const viewDetailButtonStyle = {
  borderRadius: 3,
  textTransform: "none",
  color: "#fff",
  borderColor: "#444",
  "&:hover": {
    borderColor: "#666",
    backgroundColor: "#2a2a2a",
  },
};
export const BrowseButtonStyle = {
  mt: 3,
  backgroundColor: "#ffffff",
  color: "#000000",
  px: 5,
  py: 1.5,
  fontWeight: "bold",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#d6d6d6",
  },
};
export const aboutCardStyle = {
  backgroundColor: "#1a1a1a",
  border: "1px solid #2a2a2a",
  borderRadius: 2,
  height: "100%",
  transition: "0.3s",
  "&:hover": {
    borderColor: "#ffffff",
  },
};

export const aboutDescriptionStyle = {
  color: "#b3b3b3",
  maxWidth: 700,
  mx: "auto",
};
export const storeBoxStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 2,
  mb: 3,
};
export const dropDownStyle = {
  color: "#fff",
  ".MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
  ".MuiSvgIcon-root": { color: "#fff" },
};
export const storeBox2Style = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: 3,
};
