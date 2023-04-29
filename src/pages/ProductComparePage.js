import { Card, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Breadcrum from "../components/common/Breadcrum";
import ProductCard from "../components/plp/ProductCard";
import useProductCompare from "../hooks/useProductCompare";
import DeleteIcon from '@mui/icons-material/Delete';

function ProductComparePage() {

  const { handleRemoveFromCompare } = useProductCompare();
  const { compareData } = useSelector((state) => state.productReducer);

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(compareData);
  }, [compareData]);

  const handleChangeComapre = (product) => {
    handleRemoveFromCompare(product);
  }

  return (
    <div className="compare">
      <Breadcrum currentPageName="Compare" />
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
        {productList && productList?.length === 0 ?
          <Typography variant="subtitle1" component="div" style={{ textAlign: "center" }}>
            No Product in Compare
          </Typography>
          :
          <Grid container spacing={3}>
            {productList.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={6} lg={4}>
                <Card sx={{ maxWidth: 400 }} key={product?.id}>
                  <DeleteIcon onClick={(e) => handleChangeComapre(product)} style={{ float: "right" }} />
                  <ProductCard product={product} pageType="compare" />
                </Card>
              </Grid>
            ))}
          </Grid>
        }
      </Paper>
    </div>
  );
}

export default React.memo(ProductComparePage);