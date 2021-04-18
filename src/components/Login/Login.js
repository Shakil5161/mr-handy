import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

firebase.initializeApp(firebaseConfig);
const Login = () => {
    firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);

    let history = useHistory();
    let location = useLocation();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleLogin = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const newUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    img: result.user.photoURL,
                }
                var credential = result.credential;
                var token = credential.accessToken;
                console.log(result)
                setLoggedInUser(newUser)
                sessionStorage.setItem('token', token)
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                // ...
            });

    }
    return (
        <section className="login-bg">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div style={{ marginTop: '50px' }} class="card login-card">
                        <div class="card-header">
                            <h3>Sign In</h3>
                            <div class="d-flex justify-content-end social_icon">
                                <span><i class="fab fa-facebook-square"></i></span>
                                <span onClick={handleGoogleLogin}><i class="fab fa-google-plus-square"></i></span>
                                <span><i class="fab fa-twitter-square"></i></span>
                            </div>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="username" />

                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="password" />
                                </div>
                                <div class="row align-items-center remember">
                                    <input type="checkbox" />Remember Me
					</div>
                                <div class="form-group">
                                    <input type="submit" value="Login" class="btn float-right login_btn" />
                                </div>
                            </form>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-center links">
                                Don't have an account?<a href="#">Sign Up</a>
                            </div>
                            <div class="d-flex justify-content-center">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;