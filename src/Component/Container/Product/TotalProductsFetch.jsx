import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import ErrorBoundary from "../Error_Boundary/ErrorBoundary";
import ContentProduct from "../Content/ContentProduct";

// Async Thunks
export const fetchCategory = createAsyncThunk(
  "category/fetchCategory",
  async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const searchProducts = createAsyncThunk(
  "product/searchProducts",
  async (searchText) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?search=${searchText}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Slice for product state
const productSlice = createSlice({
  name: "product",
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Slice for search state
const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchText: "",
    searchResults: [],
    loading: false,
    error: null,
  },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions
export const { setSearchText } = searchSlice.actions;

// Selectors
export const selectProductData = (state) => state.product.data;
export const selectProductLoading = (state) => state.product.loading;
export const selectSearchText = (state) => state.search.searchText;

export const selectFilteredProducts = createSelector(
  [selectProductData, selectSearchText],
  (products, searchText) => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
);

// Component
export default function TotalProductsFetch() {
  const dispatch = useDispatch();
  const searchText = useSelector(selectSearchText);
  const isLoading = useSelector(selectProductLoading);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategory());
  }, [dispatch]);

  useEffect(() => {
    if (searchText) {
      dispatch(searchProducts(searchText));
    }
  }, [searchText, dispatch]);

  return (
    <div>
      {isLoading ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <ErrorBoundary>
          <ContentProduct />
        </ErrorBoundary>
      )}
    </div>
  );
}
