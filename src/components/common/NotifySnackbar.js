import { Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notifyClear } from '../../services/common/common';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function NotifySnackbar(props) {

    const dispatch = useDispatch();

    const { notifyMsg } = useSelector((state) => state.commonReducer);

    const [notifyData, setNotifyData] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
        message: "",
        messageType: ""
    });

    const { vertical, horizontal, open, message, messageType } = notifyData;

    useEffect(() => {
        if (notifyMsg) {
            let messageType = notifyMsg?.status === true ? 'success' : 'error';
            setNotifyData({ ...notifyData, open: true, messageType: messageType, message: notifyMsg?.message });
            setTimeout(() => {
                dispatch(notifyClear({ message: '' }))
                setNotifyData({ ...notifyData, open: false, messageType: "", message: "" });
            }, 3000);
        }
    }, [notifyMsg])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            dispatch(notifyClear({ message: '' }))
            return;
        }
        setNotifyData({ ...notifyData, open: false, messageType: "", message: "" });
    };

    return (
        <>
            {message &&
                <Snackbar open={true} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
                    <Alert onClose={handleClose} severity={messageType} sx={{ width: '100%' }}>
                        {message}
                    </Alert>
                </Snackbar>
            }
        </>
    );
}

export default React.memo(NotifySnackbar);