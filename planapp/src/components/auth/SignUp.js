import { useState } from "react";
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from "../../store/actions/authActions";

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');

    const { auth, authError } = useSelector(state => ({ 
        auth: state.firebase.auth,
        authError: state.auth.authError
        }));

    const dispatch = useDispatch();
       

    const handleSubmit = (e) => {
        e.preventDefault();

        const usrinfo = { email, password, fname, lname }
        dispatch(signUp(usrinfo)); 
    }
    if(auth.uid) return <Redirect to='/'/>
    return(
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" value={fname} id="firstname" onChange={(e) => setFname(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" value={lname} id="lastname" onChange={(e) => setLname(e.target.value)} />
                </div>
                <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                <div className="red-text center">
                    { authError ? <p>{authError}</p> : null }
                </div>
            </form>
        </div>
    );

}

export default SignUp;