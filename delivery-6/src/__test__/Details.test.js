import React from "react";
import renderer from "react-test-renderer";
import Details from "../components/Details";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

test("snapshot", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Details />
        </QueryClientProvider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="css-1kkstn9"
    >
      ⚙
    </div>
  `);
});
