const initState = {
    projects: [
        {id: '1', title: 'Adding dummy data to the project 1', content: 'blah blah blah'},
        {id: '2', title: 'Adding dummy data to the project 2', content: 'blah blah blah'},
        {id: '3', title: 'Adding dummy data to the project 3', content: 'blah blah blah'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('Error creating project', action.err);
            return state;
        default:
            return state;
    }
}
 
export default projectReducer;