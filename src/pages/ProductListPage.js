import { Button, ButtonGroup, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import ListView from "../components/plp/ListView";
import GridView from "../components/plp/GridView";
import { DUMMY_PRODUCT_LIST } from "../utils/DummyProductList";
import { useDispatch, useSelector } from "react-redux";
import { viewToggleMode } from "../services/common/common";
import CartCompareBtn from "../components/common/CartCompareBtn";

function ProductListPage() {

  const { viewMode } = useSelector((state) => state.commonReducer);
  const dispatch = useDispatch();

  const [layoutMode, setLayoutMode] = useState(viewMode || "");

  useEffect(() => {
    setLayoutMode(viewMode || "");
  }, [viewMode]);

  const handleChangeLayoutMode = (mode) => {
    dispatch(viewToggleMode(mode));
  };

  return (
    <div>
      <ButtonGroup>
        <Button
          variant={layoutMode === 'grid' ? 'contained' : 'outlined'}
          onClick={() => handleChangeLayoutMode('grid')}
        >
          Grid View
        </Button>
        <Button
          variant={layoutMode === 'list' ? 'contained' : 'outlined'}
          onClick={() => handleChangeLayoutMode('list')}
        >
          List View
        </Button>
      </ButtonGroup>
      <CartCompareBtn />
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
        {layoutMode === 'grid' ? (
          <GridView products={DUMMY_PRODUCT_LIST} />
        ) : (
          <ListView products={DUMMY_PRODUCT_LIST} />
        )}
      </Paper>

    </div>
  );
}

export default React.memo(ProductListPage);