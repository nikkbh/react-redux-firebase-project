import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLink';
import SignedOutLinks from './SignedOutLink';
import { useSelector } from "react-redux";
// import { connect } from 'react-redux';

const Navbar = () => {

    const { auth, profile } = useSelector(state => ({ 
        auth: state.firebase.auth,
        profile: state.firebase.profile
    })
    );
    //console.log(auth);
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>;

    return ( 
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo left">PlanApp</Link>
                { auth.isLoaded && links}
            </div>
        </nav>
     );
}

// const mapStateToProps = (state) =>{
//     console.log(state);
//     return {
//         auth: state.firebase.auth
//     };
// }
 
// export default connect(mapStateToProps)(Navbar);

export default Navbar;