import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"


const NavBar = ()=>{
    return (
        <nav className="NavBar" >
            <h3 >Ecommerce</h3>
            <div className= "NavButtons">
                <button>Celulares</button>
                <button>Tablets</button>
                <button>Notebooks</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar