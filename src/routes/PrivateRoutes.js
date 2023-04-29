import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { getLoginStatus } from '../helper/getLoginStatus';

export const PrivateRoutes = () => {
    let isAuthenticated = getLoginStatus();
    return (
        <>
            {isAuthenticated ? <Outlet /> : <Navigate to="/" />}
        </>
    )
}

export const BeforeLoginRoutes = () => {
    let isAuthenticated = getLoginStatus();
    return (
        <>
            {!isAuthenticated ? <Outlet /> : <Navigate to="/" />}
        </>
    )
}