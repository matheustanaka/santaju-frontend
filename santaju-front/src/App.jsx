import "./styles.css";

import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";

import ClientProvider from "./hooks/useClient";

function App() {
  return (
    <ClientProvider>
      <>
        <Header />
        <Dashboard />
      </>
    </ClientProvider>
  );
}

export default App;
