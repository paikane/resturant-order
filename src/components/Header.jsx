import { useContext } from "react"
import logo from "../assets/logo.jpg"
import Button from "./UI/Button.jsx"
import CartContext from "../store/CartContext.jsx"
import UserProgressContext from "../store/UserProgressContext.jsx"


export default function Header () {

    const cartCtx = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)


    function handelShowCart() {
        userProgressCtx.showCart()
    }

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItem, items) => {
        return totalNumberOfItem + items.quantity
    }, 0)

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="" />
                <h1>React Food</h1>
            </div>
            <nav>
                <Button textOnly onClick={handelShowCart}>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}