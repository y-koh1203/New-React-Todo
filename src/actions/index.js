//ToDoのID初期値を設定する
let nextTodoId = 0;

// タスクを設定するaction
export const setTask = (taskName)=>{
    return {
        type: 'SET_TASK',
        id: nextTodoId++,
        taskName: taskName,
        isFinished: false
    }
}

// タスクの状態を更新するaction
export const updateTask =  (todoId) => {
    return {
        type: 'UPDATE_TASK',
        todoId: todoId,
    }
}

//タスクを完了するaction
export const finishTask = ()=> {
    return {
        type: 'FINISH_TASK'
    }
}

// タスクを削除するaction
export const deleteTask = (todoId)=> {
    return {
        type: 'DELETE_TASK',
        todoId: todoId,
    }
}