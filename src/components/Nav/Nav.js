import './Nav.style.css';

export default function Nav() {
    return (
        <header className="header">
            <div className="container">
            <div className="main-menu">
            <div className="logo">
                <a href="/"> Scien<span>tist</span> </a>
            </div>
            <div className="nav">
                <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            </div>
      </div>
    </header>
    )
}
