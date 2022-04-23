const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Laugh My App Off</h1>
            <div className="links">
                <a href='/'>Home</a>
                <a href='/create' style={{
                    color: 'white',
                    backgroundColor: '#48D1CC',
                    borderRadius: '8px'
                }}>Add Joke <i className="fa-solid fa-pen-nib" style={{color: "white"}}></i></a>
            </div>
        </nav>
    );
}

 
export default Navbar;
