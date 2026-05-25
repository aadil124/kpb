import { Box, Button, Container, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: {
          xs: "80vh",
          md: "92vh",
        },

        display: "flex",
        alignItems: "center",

        background:
          "linear-gradient(to right, rgba(255,253,248,1), rgba(255,248,235,1))",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            maxWidth: 700,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "3rem",
                md: "5rem",
              },

              mb: 3,

              lineHeight: 1.1,
            }}
          >
            Premium Pearl & Beads Collection
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              mb: 4,
              lineHeight: 1.8,
            }}
          >
            Discover elegant pearls, beads, and accessories crafted for
            designers, resellers, and jewelry creators.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              px: 5,
              py: 1.5,
            }}
          >
            Explore Products
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;