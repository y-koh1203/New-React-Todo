import { connect } from 'react-redux'
import TodoList from '../components/TodoList.jsx'

import { setTask,deleteTask,updateTask,finishTask } from '../actions/index'

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {    
        setTask: (taskName) => { 
            dispatch(setTask(taskName));
        },

        updateTask: (taskId) => {
            dispatch(updateTask(taskId));
        },

        finishTask: () => {
            dispatch(finishTask());
        },

        deleteTask: (taskId) => {
            dispatch(deleteTask(taskId));
        }
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(TodoList);