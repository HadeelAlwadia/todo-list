import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
//this console to demonstrate be true becuse value for this undfiend
console.log(localStorage.getItem("cartItems")!== null)
function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
