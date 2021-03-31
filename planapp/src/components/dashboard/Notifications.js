import React from 'react';
import Notificationsummary from '../projects/NotificationSummary';


const Notifications = ({projects}) => {
    return ( 
        <div className='section'>            
            <div className="card z-depth-0 notificataions">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    {/* <ul className='notifications'>
                        <li>Notification</li>
                        <li>Notification</li>
                        <li>Notification</li>
                        <li>Notification</li>
                    </ul> */}
                    { projects && projects.slice(0,3).map(project => {
                        return(
                            <ul>
                                <Notificationsummary project={project}/>
                            </ul>
                        );
                    })}
                </div>
            </div>
        </div>
     );
}
 
export default Notifications;