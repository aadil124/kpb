import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";

import type { Product } from "../../types/product.types";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 4,

        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="240"
        image={product.images[0]}
        alt={product.name}
      />

      <CardContent>
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
          }}
        >
          {product.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" color="primary">
            ₹{product.price}
          </Typography>

          <Button variant="contained">Enquire</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
