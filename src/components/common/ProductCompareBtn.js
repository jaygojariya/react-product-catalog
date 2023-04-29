import React, { useEffect, useState } from 'react';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { Button } from "@mui/material";
import { useSelector } from 'react-redux';
import useProductCompare from '../../hooks/useProductCompare';

function ProductCompareBtn({ product }) {

    const { handleAddToCompare, handleRemoveFromCompare } = useProductCompare();

    const { compareData } = useSelector((state) => state.productReducer);
    const [inCompare, setInCompare] = useState(false);

    useEffect(() => {
        const isProductInCompare = compareData.some(item => item.id === product?.id);
        setInCompare(isProductInCompare);
    }, [compareData, product]);

    const handleChangeComapre = (proInCompare) => {
        if (proInCompare) {
            handleRemoveFromCompare(product);
        } else {
            handleAddToCompare(product);
        }
    }

    return (
        <Button variant={inCompare ? "contained" : "outlined"} color="error" startIcon={<CompareArrowsIcon />} onClick={(e) => handleChangeComapre(inCompare)}>
            Compare
        </Button>
    );
}

export default React.memo(ProductCompareBtn);
