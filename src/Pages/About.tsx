import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { aboutCardStyle, aboutDescriptionStyle, BrowseButtonStyle, description, features } from "../constants";
import { Link } from "react-router-dom";

const About = () => {
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
            sx={aboutDescriptionStyle}
          >
            {description}
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
                sx={aboutCardStyle}
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
            sx={BrowseButtonStyle}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#111",
                width: "100%",
                height: "100%",
                display: "block",
              }}
            >
              Browse Games
            </Link>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
