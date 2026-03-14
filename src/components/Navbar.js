function Navbar(){
    return (
        <nav className="nav">
            <img src={process.env.PUBLIC_URL + "/echelon.jpeg"} className="logo-mark"/>
            <h3 className="nav-label">Echelon Club</h3>
        </nav>
    );
}

export default Navbar;