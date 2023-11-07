import {React} from 'react';
import './login.scss';

const Login = () => {

    return(
        <div className="login-container">
            <h1>Login</h1>
            <div id='inside'>
                <form>
                    <label for="mail">E-mail</label><br/>
                    <input id="email" name="mail" type="text"/> <br/>
                    <label for="passwd">Password </label> <br/>
                    <input id="passwd" name="passwd" type="password"/><br/>
                    <br/>
                    <button>Prześlij</button>
                </form>

                <p id="errors">Not working yet</p>
            </div>
        </div>
    )
}

export default Login;