import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Paper } from '@mui/material';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

function CartSummary({ cartTotal }) {

    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                marginTop: '10px',
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
            key='cartSummry'
        >
            <Typography variant="subtitle1" component="div" style={{ textAlign: "right" }}>
                Total : ${parseFloat(cartTotal).toFixed(2)}
            </Typography>
        </Paper>
    );
}

export default React.memo(CartSummary);