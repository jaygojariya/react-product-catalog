import React from "react";
import { Card, Grid } from "@mui/material";
import ProductCard from "./ProductCard";

const GridView = ({ products }) => {
    return (
        <Grid container spacing={3}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={6} lg={4}>
                    <Card sx={{ maxWidth: 400 }} key={product?.id}>
                        <ProductCard product={product} />
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default React.memo(GridView);