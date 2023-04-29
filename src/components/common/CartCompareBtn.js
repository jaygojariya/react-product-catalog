import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { notifyError } from "../../services/common/common";
import { useDispatch, useSelector } from "react-redux";

function CartCompareBtn() {

    const { compareData } = useSelector((state) => state.productReducer);

    const dispatch = useDispatch();

    const handleShowError = () => {
        dispatch(notifyError({ message: "Please select at least 2 products to compare." }));
    }

    return (
        <>
            <Link to='/cart' style={{ float: 'right' }}>
                <Button variant="contained" color="success">
                    Go to Cart
                </Button>
            </Link>
            {compareData && compareData.length > 1 ?
                <Link to='/product/compare' style={{ float: 'right' }}>
                    <Button variant="contained" color="error">
                        {`Compare Products (${compareData.length}/3) Go to Compare`}
                    </Button>
                </Link>
                :
                <Button variant="contained" color="error" style={{ float: 'right' }} onClick={(e) => handleShowError()}>
                    {`Compare Products (${compareData.length}/3) Go to Compare`}
                </Button>
            }
        </>
    );
}

export default React.memo(CartCompareBtn);
