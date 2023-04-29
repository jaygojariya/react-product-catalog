import React from "react";
import { CardMedia } from "@mui/material";

function LazyImage({ image, alt, component, height }) {

    return (
        <CardMedia
            component={component}
            height={height}
            image={image}
            alt={alt}
        />
    );
}

export default React.memo(LazyImage);
