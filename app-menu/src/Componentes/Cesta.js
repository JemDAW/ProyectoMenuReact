import React from 'react';


export default function Cesta(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.precio * c.qty, 0);
    console.log(itemsPrice);


    return (
        <div class="ui card">
            <div class="content">
                <div class="header">Carrito</div>
                <div class="meta"> {cartItems.length === 0 && <div>El Carro esta Vacio</div>}</div>
                <div class="description">
                    {cartItems.map((item) => (
                        <div key={item.id}>
                            <p>{item.nombre}</p>
                            <p>{item.qty} x {item.precio.toFixed(2)}€</p>
                            <div class="ui two buttons">
                                <button class="ui green basic button" onClick={() => onAdd(item)}>+</button>
                                <button class="ui red basic button" onClick={() => onRemove(item)}>-</button>
                            </div>
                        </div>
                    )
                    )
                    }
                </div>
                <div class="description">
                    {cartItems.length !== 0 && (
                        <>
                            <hr></hr>
                            <div>
                                <p>Precio Total</p>
                                <p>{itemsPrice.toFixed(2)}</p>
                            </div>
                            <hr></hr>
                            <div>
                                <button class="ui vertical animated button" onClick={() => alert('Implementar metodo pago')}>
                                    <div class="hidden content">Pagar</div>
                                    <div class="visible content">
                                        <i aria-hidden="true" class="shop icon"></i>
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