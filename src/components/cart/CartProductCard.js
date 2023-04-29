import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Paper } from '@mui/material';
import ProductQtyUpdate from '../common/ProductQtyUpdate';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

function CartProductCard({ product }) {

    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
            key={product?.name}
        >
            <Grid container spacing={2} key={`list_${product?.name}`}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src={product?.baseImage} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {product?.name}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {product?.description}
                            </Typography>
                        </Grid>
                        <ProductQtyUpdate product={product} />
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            ${parseFloat(product?.discountPrice * product?.qty).toFixed(2)}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default React.memo(CartProductCard);