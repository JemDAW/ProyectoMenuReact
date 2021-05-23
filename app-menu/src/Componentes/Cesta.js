import React from 'react';


export default function Cesta(props) {
    const { cartItems, onAdd, onRemove } = props;
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
                            <div>
                                <button className="ui vertical animated button" onClick={() => alert('Implementar metodo pago')}>
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