import './Footer.style.css';

export default function Footer() {
    return (
        <footer className="footer">
        <div className="container">
          <div className="footer-area">
            <div className="logo">
              <a href="/"> Scien<span>tist</span> </a>
              <p>We are find all the world famous Scientist List</p>
              <div className="social-icons">
                <a href="/facebook"><i class="fab fa-facebook"></i></a>
                <a href="/twitter"><i class="fab fa-twitter"></i></a>
                <a href="/linkedin"><i class="fab fa-linkedin"></i></a>
                <a href="/instagram"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="quick-list">
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
      </footer>
    )
}
