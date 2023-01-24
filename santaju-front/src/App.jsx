import "./styles.css";

import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";

import ClientProvider from "./hooks/useClient";
import ProductProvider from "./hooks/useProduct";

function App() {
  return (
    <ClientProvider>
      <ProductProvider>
        <>
          <Header />
          <Dashboard />
        </>
      </ProductProvider>
    </ClientProvider>
  );
}

export default App;
