import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notifyError, notifySuccess } from '../services/common/common';
import { loadCompareProductData } from '../services/product.service';

const useProductCompare = () => {
    const dispatch = useDispatch();
    const { compareData } = useSelector((state) => state.productReducer);

    const [compareProduct, setCompareProduct] = useState({});

    useEffect(() => {
        const { type, product } = compareProduct;
        if (product && type) {
            if (type === "add") {
                if (compareData.length >= 3) {
                    dispatch(notifyError({ message: "Maximum 3 products allowed in the compare." }));
                } else {
                    dispatch(loadCompareProductData([...compareData, product]));
                    dispatch(notifySuccess({ message: "Added to Compare" }));
                }
            } else if (type === "minus") {
                const removeOnCompare = compareData.filter((prod) => prod.id !== product.id);
                dispatch(loadCompareProductData(removeOnCompare));
                dispatch(notifySuccess({ message: "Removed from Compare" }));
            }
            setCompareProduct({});
        }
    }, [compareProduct, compareData, dispatch]);

    const handleAddToCompare = (product) => {
        setCompareProduct({ type: "add", product });
    };

    const handleRemoveFromCompare = (product) => {
        setCompareProduct({ type: "minus", product });
    };

    return { handleAddToCompare, handleRemoveFromCompare };
};

export default useProductCompare;
