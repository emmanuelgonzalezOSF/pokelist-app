import React from "react";
import renderer from "react-test-renderer";
import Card from "../components/Card";
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
          <Card />
        </QueryClientProvider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <a
      className="css-1h5h2hg"
      href="/details/undefined"
      onClick={[Function]}
    >
      <div
        className="card"
      >
        <div
          className="card__container"
        >
          <h2 />
        </div>
      </div>
    </a>
  `);
});
