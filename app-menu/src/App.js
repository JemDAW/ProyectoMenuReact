import React,  { useState }  from "react";
import Menu from "./Componentes/Menu";
import Admin from "./Componentes/Admin";
import LogIn from "./Componentes/LogIn";
import LoginCard from "./Componentes/LoginCard";
import Route from "./Componentes/Route";
import Cesta from "./Componentes/Cesta";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div>
      <LoginCard />

      <Route path="/login">
        <LogIn />
      </Route>
      
      <Route path="/">
        <Menu onAdd={onAdd}/>
        <Cesta cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
      </Route>

      <Route path="/admin">
        <Admin />
      </Route>
    </div>
  );
};

export default App;