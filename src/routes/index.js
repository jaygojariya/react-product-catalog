import React, { Suspense, lazy, useEffect, useState } from "react";
import {
    Route,
    Routes,
} from "react-router-dom";
import { PrivateRoutes, BeforeLoginRoutes } from "./PrivateRoutes";

const ProductListPage = lazy(() => import("./../pages/ProductListPage"));
const ProductDetailsPage = lazy(() => import("./../pages/ProductDetailsPage"));
const CartPage = lazy(() => import("./../pages/CartPage"));
const ProductComparePage = lazy(() => import("./../pages/ProductComparePage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("./../pages/RegisterPage"));
const MyOrderPage = lazy(() => import("./../pages/MyOrderPage"));
const ProfilePage = lazy(() => import("./../pages/ProfilePage"));
const Page_Not_Found = lazy(() => import("./../pages/Page_Not_Found"));
const Topic = lazy(() => import("./../pages/Topic"));

function AllRoutes() {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
                <Route index element={<ProductListPage />}></Route>
                <Route path="/product/compare" element={<ProductComparePage />}></Route>
                <Route path="/product/:id" element={<ProductDetailsPage />}></Route>
                <Route path="/cart" element={<CartPage />}></Route>
                <Route path="/topic" element={<Topic />}></Route>

                <Route element={<BeforeLoginRoutes />} >
                    <Route path="/register" element={<RegisterPage />}></Route>
                    <Route path="/login" element={<LoginPage />} />
                </Route>

                <Route element={<PrivateRoutes />} >
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/order" element={<MyOrderPage />} />
                </Route>

                <Route path="*" element={<Page_Not_Found />}></Route>
            </Routes>
        </Suspense>
    )
}

export default React.memo(AllRoutes);