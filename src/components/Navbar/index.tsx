import './styles.css';

const Navbar = () => {
    const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-warning main-nav">
            <div className="container-fluid">
                <div className="nav-logo-text">
                    <h4>MovieFlix</h4>
                </div>
                <div className='btn nav-logout'>
                    <a href='#logout' onClick={handleLogoutClick}>
                        SAIR
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;