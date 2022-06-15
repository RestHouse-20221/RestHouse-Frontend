import React, {useState} from 'react'
import BurguerButton from './BurguerButton'

// CSS
import './Navbar.css'

function Navbar() {

    const [clicked, setClicked] = useState(false)
    
    const handleClick = () => {
        //cuando es true lo pasa a false y viceversa
        setClicked(!clicked)
    }

    return (
        <div className="navbar-container">


            <h2>Navbar <span>Responsive</span></h2>

            <div className={`links ${clicked ? 'active' : ''}`}>
                <a href="/">Home</a>
                <a href="/">Shop</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Blog</a>
            </div>

            <div className="burguer">
                <BurguerButton clicked = {clicked} handleClick={handleClick}/>
            </div>


        </div>

    )
}

export default Navbar