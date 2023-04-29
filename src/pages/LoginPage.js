import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { notifyError, notifySuccess } from '../services/common/common';
import { useDispatch } from 'react-redux';
import Breadcrum from '../components/common/Breadcrum';

const LoginPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string()
            .required('Password is required')
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onChange"
    });

    const onSubmit = (data) => {
        console.log(JSON.stringify(data, null, 2));
        if (data?.username === "admin" && data.password === "123") {
            localStorage.setItem('isLogin',true)
            dispatch(notifySuccess({ message: 'Login successful' }));
            navigate("/");
        } else {
            dispatch(notifyError({ message: 'Username and password do not matched' }));
        }
    };

    return (
        <div className="register-form">
            <Breadcrum currentPageName="Login" />
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                    <label>Username</label>
                    <input
                        name="username"
                        type="text"
                        {...register('username')}
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.username?.message}</div>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        {...register('password')}
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                    <button
                        type="button"
                        onClick={() => reset()}
                        className="btn btn-warning"
                        style={{ marginLeft: "10px" }}
                    >
                        Reset
                    </button>
                    <Link to="/register">
                        <button
                            type="button"
                            className="btn btn-danger float-right"
                        >
                            Create New Account
                        </button>
                    </Link>
                </div>
                <div className="form-group" style={{ flex: "center" }}>
                    <span>admin</span>
                    <br></br>
                    <span>123</span>
                </div>
            </form>
        </div>
    );
};

export default React.memo(LoginPage);
