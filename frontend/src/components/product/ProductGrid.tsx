import { Grid } from "@mui/material";

import ProductCard from "./ProductCard";

import type { Product } from "../../types/product.types";

interface Props {
  products: Product[];
}

const ProductGrid = ({ products }: Props) => {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid
          key={product._id}
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
          }}
        >
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
