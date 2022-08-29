const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg col-12 navbar-light justify-content-between">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">🎨</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="./index.html">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./pages/about.html">Acerca</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./pages/gallery.html">Galería</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./pages/blog.html">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./pages/contact.html">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default NavBar;