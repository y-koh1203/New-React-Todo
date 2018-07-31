import React from 'react';

class TodoList extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    handleTextChange(e){
        this.setState({
            text: e.target.value
        });
    }

    handleSetTask(){
        this.props.setTask(this.state.text);
    }

    handleTaskStatusChange(key){
        this.props.updateTask(key);
    }

    handleFinishTask(){
        this.props.finishTask();
    }

    render(){
        let taskList = this.props.todoReducer.task;
        let output = [];
        let elem;


        for(let v in taskList){
            if( taskList[v].isFinished == true){
                elem = <li key={v} style={{textDecoration: 'line-through'}} onClick={this.handleTaskStatusChange.bind(this,taskList[v].id)}>{taskList[v].name}</li>
            }else{
                elem = <li key={v} onClick={this.handleTaskStatusChange.bind(this,taskList[v].id)}>{taskList[v].name}</li>
            }
          
            output.push(elem);
        }

        return(
            <div>
                <div>
                    TaskName:<input type="text" name="" id="" onChange={this.handleTextChange.bind(this)} /><br/>
                    <button onClick={this.handleSetTask.bind(this)}>タスクセット</button>
                </div>
                <ul>
                    {output}
                </ul>
                <button onClick={this.handleFinishTask.bind(this)}>タスクを完了する</button>
            </div>
        );
    }
}

export default TodoList;