export const APP_NAME: string = "GameRig";
export const BASE_URL =
  "https://corsproxy.io/?https://www.freetogame.com/api/games";

//styles.........👾
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
