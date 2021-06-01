import React, { useState } from "react";




export default function Cesta(props) {
    const { cartItems, onAdd, onRemove, onPay } = props;
    const [mesa, setMesa] = useState("Ninguna");
    const itemsPrice = cartItems.reduce((a, c) => a + c.precio * c.qty, 0);
    console.log(itemsPrice);


    return (
        <div className="ui card">
            <div className="content">
                <div className="header">
                    <h3 className="ui centered dividing header">Carrito</h3>
                </div>
                <div className="meta"> {cartItems.length === 0 && <div>El Carro esta Vacio</div>}</div>
                <div className="description">
                    {cartItems.map((item) => (
                        <div key={item.id}>
                            <p className="amarillo">{item.nombre}</p>
                            <p>{item.qty} x {item.precio.toFixed(2)}€</p>
                            <div className="ui two buttons">
                                <button className="ui green basic button" onClick={() => onAdd(item)}>+</button>
                                <button className="ui red basic button" onClick={() => onRemove(item)}>-</button>
                            </div>
                        </div>
                    )
                    )
                    }
                </div>
                <div className="description">
                    {cartItems.length !== 0 && (
                        <>
                            <hr></hr>
                            <div>
                                <p className="amarillo">Precio Total</p>
                                <p>{itemsPrice.toFixed(2)}</p>
                            </div>
                            <hr></hr>
                            Elija Mesa Actual
                            <div className="ui borderless menu">
                                <a className="item" onClick={() => setMesa("1")}>1</a>
                                <a className="item" onClick={() => setMesa("2")}>2</a>
                                <a className="item" onClick={() => setMesa("3")}>3</a>
                                <a className="item" onClick={() => setMesa("4")}>4</a>
                                <a className="item" onClick={() => setMesa("5")}>5</a>
                                <a className="item" onClick={() => setMesa("6")}>6</a>
                            </div>
                            <div>
                                <p>Mesa Actual: {mesa}</p>
                            </div>
                            <hr></hr>
                            <div>

                                <button className="ui vertical animated button" onClick={() => onPay(cartItems, itemsPrice, mesa)}>


                                    <div className="hidden content">Pagar</div>
                                    <div className="visible content">
                                        <i aria-hidden="true" className="shop icon"></i>
                                    </div>
                                </button>

                            </div>
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}