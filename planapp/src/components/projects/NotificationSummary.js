import moment from 'moment';

const Notificationsummary = ({project}) => {
    return (
        <li>
            <span className="pink-text">{project.authorFirstName} {project.authorLastName} </span>
            <span>Added a new project</span>
            <p className="grey-text note-date">{moment(project.createdAt.toDate()).fromNow()}</p>
        </li> 
        
     );
}
 
export default Notificationsummary;