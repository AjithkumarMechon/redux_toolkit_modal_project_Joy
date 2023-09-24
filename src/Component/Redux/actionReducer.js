import { combineReducers, createSlice } from "@reduxjs/toolkit";
import {
  fetchCategory,
  fetchProducts,
} from "../Container/Product/TotalProductsFetch";

// Initial state for the product slice
const initialProductState = {
  products: [],
  loading: false,
  error: null,
};

// Product slice
export const productSlice = createSlice({
  name: "product",
  initialState: initialProductState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;

        state.error = action.error.message;
      });
  },
});

// Initial state for the search slice
const initialSearchState = {
  search: "", // Change searchText to search
  loading: false,
  error: null,
};

// Search slice
export const searchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducers: {
    setSearchText: (state, action) => {
      state.search = action.payload; // Change searchText to search
    },
  },
});

// Initial state for the category slice
const initialCategoryState = {
  categories: [],
  loading: false,
  error: null,
};

// Category slice
export const categorySlice = createSlice({
  name: "category",
  initialState: initialCategoryState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions
export const { setSearchText } = searchSlice.actions;

// Combine reducers
const rootReducer = combineReducers({
  product: productSlice.reducer,
  search: searchSlice.reducer,
  category: categorySlice.reducer,
});

export default rootReducer;
