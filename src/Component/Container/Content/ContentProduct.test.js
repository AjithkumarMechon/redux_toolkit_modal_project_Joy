import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux"; // You might need to mock your Redux store
import ContentProduct from "./ContentProduct"; // Import the component to be tested

// Mock the Redux store and provide it to the component
const mockStore = {
  getState: () => ({
    product: {
      products: {
        products: [],
      },
    },
    search: {
      loading: false,
      search: "",
    },
    category: {
      categories: [],
    },
    searchdata: {
      search: {
        products: [],
      },
    },
  }),
  dispatch: () => {},
  subscribe: () => {},
};

test("renders loading indicator when loading is true", () => {
  const loading = true;

  render(
    <Provider store={mockStore}>
      <ContentProduct />
    </Provider>
  );

  const loadingIndicator = screen.getByTestId("loading-indicator");
  expect(loadingIndicator).toBeInTheDocument();
});

test("renders products when loading is false", () => {
  const loading = false;
  const mockProducts = [
    // Define mock products here
  ];

  render(
    <Provider store={mockStore}>
      <ContentProduct />
    </Provider>
  );

  const productElements = screen.getAllByTestId("product");
  expect(productElements).toHaveLength(mockProducts.length);
});

// Add more tests as needed to cover different scenarios and interactions
