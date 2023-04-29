import React from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Breadcrum({ currentPageName }) {
    return (
        <div role="presentation" key={currentPageName}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" to="/">
                    Home
                </Link>
                <Typography color="text.primary">{currentPageName}</Typography>
            </Breadcrumbs>
        </div>
    );
}

export default React.memo(Breadcrum);
