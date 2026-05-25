import { Container, Typography, Box } from "@mui/material";

import { useQuery } from "@tanstack/react-query";

import ProductGrid from "../../components/product/ProductGrid";

import { getProducts } from "../../api/productApi";

const ProductsPage = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <Container maxWidth="xl">
      <Box py={8}>
        <Typography
          variant="h3"
          gutterBottom
        >
          Products
        </Typography>

        {isLoading ? (
          <Typography>Loading...</Typography>
        ) : (
          <ProductGrid products={data} />
        )}
      </Box>
    </Container>
  );
};

export default ProductsPage;