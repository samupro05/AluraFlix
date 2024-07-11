import { Link } from "react-router-dom"
import Title from "../Title"
import './Header.modules.css'

function Header(){
    return(
    <>
        <header className="header">
            <Title content="Alura Flix" type="h1" />
            <nav className="navbar">
                <Link className="navbar__link" to="/">Home</Link>
                <Link className="navbar__link" to="/add">Add new video</Link>
            </nav>
        </header>
    </>
    )
}

export default Header