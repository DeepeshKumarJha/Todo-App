import React from "react";
import TodoElement from "./TodoElement";
import TodoAdd from "./TodoAdd";

/*
    // how it will look : 

    <form><input>Todo</input></form>
    <ul>
        <li> todo-1 </li>
        <li> todo-2 </li>
        <li> todo-3 </li>
    </ul>
*/

export default class TodoBody extends React.Component{

    constructor(props){
        super(props);

        this.addNewTodo = this.addNewTodo.bind(this);
        this.state = {todoList : this.props.initialTodo};
    }

    addNewTodo(newTodo){
        // console.log(newTodo)
        this.setState(
            oldVal => {
                return {todoList: [newTodo, ...oldVal.todoList]}
            }
        )
        // console.log(...this.state.todoList)
    }

    render(){
        return(
            <>
                <TodoAdd addNewTodo={this.addNewTodo}/>
                <ul>
                    {
                        this.state.todoList.map(
                        val => {
                            return (
                                <TodoElement 
                                    todo = {val.todo} 
                                    todoStatus= {val.active}
                                    key = {val.todo}
                                />
                            )
                        }
                        )
                    } 
                </ul>
            </>
            
        )
    }
}