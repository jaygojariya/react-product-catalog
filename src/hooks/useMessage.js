import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { notifyError, notifySuccess } from '../services/common/common';

const useMessage = () => {
    const dispatch = useDispatch();

    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {
        const sendNotification = (msg, notifyFunc) => {
            if (msg) {
                dispatch(notifyFunc({ message: msg }));
            }
        }
        sendNotification(errorMsg, notifyError);
        sendNotification(successMsg, notifySuccess);

    }, [errorMsg, successMsg, dispatch]);

    return { setErrorMsg, setSuccessMsg };
};

export default useMessage;