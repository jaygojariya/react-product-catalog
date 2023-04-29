import React from "react";
import { Card, List, ListItem } from "@mui/material";
import ProductCard from "./ProductCard";

const ListView = ({ products }) => {
    return (
        <List xs={12} sm={12} md={12} lg={12}>
            {products.map((product) => (
                <ListItem key={product.id}>
                    {/* <Card lg={{ maxWidth: 800 }} key={product?.id}> */}
                    <ProductCard product={product} />
                    {/* </Card> */}
                </ListItem>
            ))}
        </List>
    );
};

export default React.memo(ListView);