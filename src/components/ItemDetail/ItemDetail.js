import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { NavLink, Link } from "react-router-dom"

const ItemDetail = ({id, name, img, category, description, price, stock}) =>{
    
    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    }
    
    
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>

            <section>
                <p className="Info">
                    categoria: {category}
                </p>
                <p className="Info">
                    descripcion: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                        <Link to="/cart" className="Option">Terminar Compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={10} onAdd={handleOnAdd} />
                    )
                }
                
                

            </footer>

        </article>
    )
}

export default ItemDetail