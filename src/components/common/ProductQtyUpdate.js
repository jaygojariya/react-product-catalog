import React from "react";
import { Grid } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import useCartUpdate from "../../hooks/useCartUpdate";

function ProductQtyUpdate({ product }) {

    const { setCartUpdate } = useCartUpdate();
    const handleCartUpdate = (type) => {
        setCartUpdate({ type: type, product: product })
    }

    return (
        <Grid item key={`details_${product?.name}`}>
            <AddCircleOutlineIcon onClick={(e) => handleCartUpdate('add')} />
            <span style={{ padding: "10px" }}>{product?.qty}</span>
            <RemoveCircleOutlineIcon onClick={(e) => handleCartUpdate('minus')} />
            <DeleteIcon onClick={(e) => handleCartUpdate('delete')} />
        </Grid>
    );
}

export default React.memo(ProductQtyUpdate);
