import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        py: 5,
        mt: 10,
        backgroundColor: "#111827",
        color: "#fff",
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h6" gutterBottom>
          King Pearl Beads
        </Typography>

        <Typography variant="body2">
          Premium pearls and materials supplier.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;