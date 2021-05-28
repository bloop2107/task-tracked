
import { Link } from 'react-router-dom'

const Footer = props => {
    return (
        <footer className="text-center">
            <p>Copyright &copy; 2021</p>
            <Link className="underline" to="/about">About</Link>
        </footer>
    )
}

export default Footer
