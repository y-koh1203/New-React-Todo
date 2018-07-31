const initialState = {
    task: [],
}

export default function todoReducer(state = initialState,action){

    let newTask;

    switch(action.type){
        case 'SET_TASK':
            newTask = state;
            newTask.task.push(
                {       
                    id: action.id,
                    name: action.taskName,
                    isFinished: action.isFinished
                }
            );

            return Object.assign({},state,newTask);

        case 'UPDATE_TASK':
            newTask = state;
            for(let v in newTask.task){
                if(newTask.task[v].id == action.todoId){
                    newTask.task[v].isFinished = true;
                }
            }
            
            return Object.assign({},state,newTask);

        case 'FINISH_TASK':
            newTask = state;
            for(let d in newTask.task){
                if(newTask.task[d].isFinished == true){
                    newTask.task.splice([d],1);
                }
            }
            
            return Object.assign({},state,newTask);
        
        default:
            return state;
    }
}