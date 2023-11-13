import {  Link } from 'react-router-dom';
function Nav(){
    return(
        
            <div class="container-fluid "style={{color:" #ffac3c"}}>
                <nav class="navbar">
                    <div class="navbar-brand"><Link to="/" class="nav-link  fs-2 p-2 m-2 "style={{color:" #ffac3c"}}>eDriveSpace</Link></div>
                    <div class="nav">
                        <Link to="/" class="nav-link m-2 fs-5 p-2" style={{color:" #ffac3c"}}>Home</Link>
                        <Link to="/create" class="nav-link m-2 fs-5 p-2"style={{color:" #ffac3c"}}>Create Car</Link>
                        <Link to="/maintain" class="nav-link m-2 fs-5 p-2"style={{color:" #ffac3c"}}>Maintain</Link>
                        <Link to="/repair" class="nav-link m-2 fs-5 p-2"style={{color:" #ffac3c"}}>Repair</Link>
                        <Link to="/upgrade" class="nav-link m-2 fs-5 p-2"style={{color:" #ffac3c"}}>Upgrade</Link>
                        <Link to="/orders" class="nav-link m-2  fs-5 p-2"style={{color:" #ffac3c"}}>Orders</Link>
                        <Link to="/list" class="nav-link m-2 fs-5 p-2"style={{color:" #ffac3c"}}>List</Link>

                    </div>
                </nav>
            </div>
        
    )
}
export default Nav;