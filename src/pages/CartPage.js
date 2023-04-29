import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Paper, Typography } from '@mui/material';
import CartProductCard from '../components/cart/CartProductCard';
import CartSummary from '../components/cart/CartSummary';
import Breadcrum from '../components/common/Breadcrum';

function CartPage() {
  const { cartData } = useSelector((state) => state.cartReducer);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < cartData.length; i++) {
      total += parseFloat(cartData[i].qty * cartData[i].discountPrice);
    }
    setCartTotal(total);
  }, [cartData]);

  const cartLength = cartData.length;

  return (
    <>
      <Breadcrum currentPageName="Cart" />
      {cartLength ? (
        <>
          {cartData.map((item) => (
            <CartProductCard key={item.id} product={item} />
          ))}
          <CartSummary cartTotal={cartTotal} />
        </>
      ) : (
        <Paper
          sx={{
            p: 2,
            margin: 'auto',
            marginTop: '10px',
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
          key="cartPaper"
        >
          <Typography variant="subtitle1" component="div" className="empty-cart-message">
            Your Cart Is Currently Empty
          </Typography>
        </Paper>
      )}
    </>
  );
}

export default React.memo(CartPage);