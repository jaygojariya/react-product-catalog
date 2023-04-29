import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCartData } from '../services/cart.service';
import { notifyError, notifySuccess } from '../services/common/common';

const useCartUpdate = () => {
  const dispatch = useDispatch();
  const { cartData } = useSelector(state => state.cartReducer);
  const [cartUpdate, setCartUpdate] = useState({ type: '', product: null });

  const updateCart = useCallback(() => {
    if (!cartUpdate.type || !cartUpdate.product) return;

    const { type, product } = cartUpdate;
    const checkProductOnCart = cartData.find(prod => prod.id === product.id);

    if (type === 'add') {
      if (!checkProductOnCart) {
        // Product not found in cart then add
        const proUpdate = { ...product, qty: 1 };
        dispatch(loadCartData([...cartData, proUpdate]));
        dispatch(notifySuccess({ message: 'Added to Cart' }));
      } else if (checkProductOnCart.qty < product.stock) {
        // Item already exists, update quantity
        const updatedItems = cartData.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
        dispatch(loadCartData(updatedItems));
        dispatch(notifySuccess({ message: 'Added to Cart' }));
      } else {
        // Stock not available
        dispatch(notifyError({ message: `Sellable stock : ${product.stock}` }));
      }
    } else if (type === 'minus') {
      if (product.qty === 1) {
        // Remove from cart if quantity is 1
        const removeOnCart = cartData.filter(prod => prod.id !== product.id);
        dispatch(loadCartData(removeOnCart));
        dispatch(notifySuccess({ message: 'Removed from Cart' }));
      } else {
        // Item already exists, update quantity
        const updatedItems = cartData.map(item =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
        dispatch(loadCartData(updatedItems));
        dispatch(notifySuccess({ message: 'Removed from Cart' }));
      }
    } else if (type === 'delete') {
      // Remove from cart
      const removeFilterData = cartData.filter(prod => prod.id !== product.id);
      dispatch(loadCartData(removeFilterData));
      dispatch(notifySuccess({ message: 'Deleted from Cart' }));
    }

    setCartUpdate({ type: '', product: null });
  }, [cartData, cartUpdate, dispatch]);

  useEffect(() => {
    updateCart();
  }, [updateCart]);

  return { setCartUpdate };
};

export default useCartUpdate;
