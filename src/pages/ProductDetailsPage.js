import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/common/Breadcrum";
import CartCompareBtn from "../components/common/CartCompareBtn";
import ProductCard from "../components/plp/ProductCard";
import { DUMMY_PRODUCT_LIST } from "../utils/DummyProductList";

function ProductDetailsPage() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        let filteredProducts = DUMMY_PRODUCT_LIST.find((product) => product.id == id);
        if (filteredProducts) {
            setProduct(filteredProducts)
        }
    }, []);

    return (
        <div className="pdp">
            <Breadcrum currentPageName={product?.name} />
            <CartCompareBtn />
            <ProductCard product={product} pageType="pdp" />
        </div>
    );
}

export default React.memo(ProductDetailsPage);