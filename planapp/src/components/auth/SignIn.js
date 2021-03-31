import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from "../../store/actions/authActions";
import { Redirect } from 'react-router-dom';

const SignIn = () => {

    const dispatch = useDispatch();
    const { auth } = useSelector(state => ({ 
        // authError: state.auth.authError,
        auth: state.firebase.auth
        })
    );
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const usrinfo = { email, password }

        // console.log(usrinfo)

        dispatch(signIn(usrinfo));
    }
    if(auth.uid) return <Redirect to='/'/>

    return(
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="btn pink lighten-1 z-depth-0">Login</button>
                {/* <div className="red-text center">
                    { authError ? <p>{authError}</p> : null }
                </div> */}
            </form>
        </div>
    );

}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         signIn: (creds) => dispatch(signIn(creds))
//     }
// }

export default SignIn;