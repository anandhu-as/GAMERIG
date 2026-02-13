import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const About = () => {
  const features = [
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

  return (
    <Box
      sx={{
        backgroundColor: "#0e0e0e",
        minHeight: "100vh",
        color: "#ffffff",
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ letterSpacing: 1 }}
            gutterBottom
          >
            About GAMERIG
          </Typography>

          <Typography
            variant="h6"
            sx={{ color: "#b3b3b3", maxWidth: 700, mx: "auto" }}
          >
            A modern platform to explore detailed information about games —
            discover trending titles, genres, ratings and more.
          </Typography>
        </Box>

        <Box
          sx={{
            height: "1px",
            backgroundColor: "#2a2a2a",
            mb: 8,
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {features.map((item, index) => (
            <Box
              key={index}
              sx={{
                flex: "1 1 300px",
                maxWidth: "350px",
              }}
            >
              <Card
                sx={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #2a2a2a",
                  borderRadius: 2,
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": {
                    borderColor: "#ffffff",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: "#b3b3b3" }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        <Box textAlign="center" mt={10}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Explore the World of Games
          </Typography>

          <Button
            variant="contained"
            sx={{
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
            }}
          >
            Browse Games
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
