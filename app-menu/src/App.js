import React, { useState } from "react";
import Menu from "./Componentes/Menu";
import Admin from "./Componentes/Admin";
import LogIn from "./Componentes/LogIn";
import LoginCard from "./Componentes/LoginCard";
import Route from "./Componentes/Route";
import Cesta from "./Componentes/Cesta";
import axios from "axios";



const App = () => {
  const [renderComponent, empleado] = LogIn();
  
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

  
  


  const onPay = (product, price, mesa) => {
    

    if (window.confirm("Confirmar Pago")) {
    axios.post("http://127.0.0.1:8000/api/pedido", {
      mesa: mesa,
      precio_total: price,

    }).then(alert("Pedido Creado Correctamente"))
    .catch(error => {
      console.log(error.message);
    })

    }
      window.location.reload();
  }
  return (
    <div>
      <LoginCard />

      <Route path="/login">
      {renderComponent()}
      </Route>

      <Route path="/">
        <div className="ui grid">
          <div className="two column row">
            <Menu onAdd={onAdd} />
            <div className="four wide column">
            <Cesta cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onPay={onPay} />
            </div>
          </div>
        </div>
      </Route>

      <Route path="/admin">
        <Admin 
        empleado= {empleado}/>
      </Route>
    </div>
  );
};

export default App;