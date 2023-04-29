import React from "react";
import { AppBar, Divider, Toolbar, Typography } from "@mui/material";
import { getLoginStatus } from "../../helper/getLoginStatus";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
    let isAuthenticated = getLoginStatus();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLogin");
        navigate("/");
    }
    return (
        <AppBar position="static">
            <Toolbar>
                <NavLink to="/">
                    <Typography variant="h6" color="white">Product Catalog</Typography>
                </NavLink>
                <Divider />
                {isAuthenticated ?
                    <button
                        type="button"
                        className="btn btn-warning float-right"
                        style={{ marginLeft: "10px" }}
                        onClick={(e) => handleLogout()}
                    >
                        Logout
                    </button>
                    :
                    <Link to="/login">
                        <button
                            type="button"
                            className="btn btn-warning float-right"
                            style={{ marginLeft: "10px" }}
                        >
                            Login
                        </button>
                    </Link>
                }
                <Link to="/topic">
                    <button
                        type="button"
                        className="btn btn-danger float-right"
                        style={{ marginLeft: "10px" }}
                    >
                        Topic
                    </button>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default React.memo(Header);