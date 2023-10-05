import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./components/ErrorBoundary";
import CardList from "./components/CardList";
import Details from "./components/Details";
import styled from "@emotion/styled";
import colors from "./colors";

const WrapperApp = styled.div`
  .home_title {
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.light};
    background-color: ${colors.primary};
    width: fit-content;
    max-width: fit-content;
    text-align: center;
    margin: 20px auto;
    padding: 10px;
    border-radius: 10px;
  }

  a {
    text-decoration: none;
    color: ${colors.dark};
  }
`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <WrapperApp>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Link to="/">
            <h1 className="home_title">Pokelist App!</h1>
          </Link>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<CardList />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </WrapperApp>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
