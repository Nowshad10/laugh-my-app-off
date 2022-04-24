import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Laugh My App Off</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/newpost' style={{
                    color: 'white',
                    backgroundColor: '#48D1CC',
                    borderRadius: '8px'
                }}>Add Joke <i className="fa-solid fa-pen-nib" style={{color: "white"}}></i></Link>
            </div>
        </nav>
    );
}

 
export default Navbar;
