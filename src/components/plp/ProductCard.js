import React from 'react';
import { CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useCartUpdate from '../../hooks/useCartUpdate';
import LazyImage from '../common/LazyImage';
import ProductCompareBtn from '../common/ProductCompareBtn';

function ProductCard({ product, pageType }) {

    const { setCartUpdate } = useCartUpdate();
    const addToCart = () => {
        setCartUpdate({ type: "add", product: product })
    }

    return (
        <>
            <LazyImage
                component="img"
                height="140"
                image={product?.baseImage}
                alt={product?.name}
            />
            <CardContent>
                <Link to={`/product/${product?.id}`}>
                    <Typography gutterBottom variant="h5" component="div">
                        {product?.name}
                    </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary">
                    {product?.description}
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
                    Price: ${product?.price}
                </Typography>
                <Typography variant="h6" color="error" sx={{ mt: 1 }}>
                    Discounted Price: ${product?.discountPrice}
                </Typography>
                <Button variant="contained" color={product?.orderType === "in-stock" ? "warning" : "primary"} onClick={(e) => addToCart()}>
                    {product?.orderType === "in-stock" ? "Pre Order" : "Add to Cart"}
                </Button>
                {pageType !== "compare" &&
                    <ProductCompareBtn product={product} />
                }
            </CardContent>
        </>
    );
}

export default React.memo(ProductCard);