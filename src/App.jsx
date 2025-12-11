import "./App.css";
import ModernFooter from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Router from "./Page/Router";

function App() {
  return (
    <>
      <Router />
      <Navbar />

      <ModernFooter />
    </>
  );
}

export default App;
