import React, { useState, useContext } from 'react';
import userService from '../services/UserService';
import { AppContext } from '../store/AppContext';
import { useNavigate } from "react-router-dom";

const Login = ( props ) => {

    const { setUser } = useContext(AppContext);

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [checkingCredentials, setCheckingCredentials] = useState(false);

    const login = () => {

        setCheckingCredentials(true);

        userService.login(email, password)
            .then( resp => {
                window.localStorage.setItem('access_token', resp.auth_token);
                window.localStorage.setItem('refresh_token', resp.refresh_token);
                setUser(resp.user);
            })
            .catch( err => {
                window.alert("Invalid Credentials");
            })
            .finally( resp => setCheckingCredentials(false) )
    }
    
    return (
        <div className="row justify-content-center" id="login-panel">
                <div className="class-12 class-md-6">
                    <div className="">
                        <div id="formContent">
                            <div className="">
                                <h5>Welcome to Joke Generator</h5>
                            </div>

                            <form>
                                <fieldset disabled={ checkingCredentials }>
                                    <div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            placeholder="email"
                                            value={email}
                                            onChange={ e => setEmail(e.target.value)}
                                            />
                                    </div>
                                    <div>
                                        <input
                                            type="password" 
                                            className="form-control mt-1"
                                            id="password"
                                            placeholder="password"
                                            value={password}
                                            onChange={ e => setPassword(e.target.value)}
                                            />
                                    </div>
                                    <input 
                                        type="button"
                                        className="btn btn-success mt-1"
                                        value="Log In"
                                        onClick={login}
                                        />
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Login;