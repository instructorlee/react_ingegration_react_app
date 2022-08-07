import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../store/AppContext";
import userService from '../services/UserService';

const Navigation = ( props ) => {

    const { logout } = useContext(AppContext);

    const onLogout = (e) => {
        e.preventDefault();

        if ( window.confirm("Are you sure you want to log out?") ) 
            logout()
    }
    
    return(
            <div className="row mb-2">
                <div className="col-12">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Joke Generator</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link 
                                className="nav-link" 
                                to="/"
                                >Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link 
                                className="nav-link" 
                                to="/my-topics"
                                > My Topics</Link>
                        </li>
                        <li>
                            <button 
                                className="btn btn-sm btn-danger"
                                onClick={onLogout}
                            >Logout</button>
                        </li>
                        </ul>
                    </div>
                    </nav>
                </div>
            </div>
    )
}

export default Navigation;