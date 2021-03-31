import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';

const CreateProject = () => {

    const dispatch = useDispatch();
    const { auth } = useSelector(state => ({ 
        auth: state.firebase.auth
    })
    );
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();

        const projectinfo = { title, content }
        // props.createProject(projectinfo);

        dispatch(createProject(projectinfo));
        history.push('/');
    }

    if(!auth.uid) return <Redirect to='/signin'/>

    return(
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create Task</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={title} id="title" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea id="content" className="materialize-textarea" onChange={(e) => setContent(e.target.value)}></textarea>
                   
                </div>
                <button className="btn pink lighten-1 z-depth-0">Create</button>
            </form>
        </div>
    );

}

// const mapDispatchToProps  = (dispatch) =>{
//     return{
//         createProject: (project) => dispatch(createProject(project)),
//     };
// }

// export default connect(null, mapDispatchToProps)(CreateProject);

export default CreateProject;


//request.time < timestamp.date(2021, 4, 25)