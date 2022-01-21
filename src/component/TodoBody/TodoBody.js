import React from "react";
import TodoElement from "./TodoElement";
import TodoAdd from "./TodoAdd";
import { Container } from "@mui/material";


export default class TodoBody extends React.Component{

    constructor(props){
        super(props);

        this.addNewTodo = this.addNewTodo.bind(this);
        this.moveTodoWhenDone = this.moveTodoWhenDone.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        // this.state = {
        //     todoList : this.props.initialTodo,
        //     todoActive: this.props.initialTodo.filter(
        //         val => {
        //             return val.active;
        //         }
        //     ),
        //     todoDone: this.props.initialTodo.filter(
        //         val => {
        //             return !val.active;
        //         }
        //     )
        // };
        
        // create a single state 
        this.state = {
            todoList : this.props.initialTodo
        }

        this.todoActive = this.state.todoList.filter(
            val => {
                return val.active;
            }
        )

        this.todoDone = this.state.todoList.filter(
            val => {
                return !val.active;
            }
        )
    }

    moveTodoWhenDone(todoValue){
        // This function will move item from todoActive list to todoDone list
        
    }
    
    handleCheckbox(checkboxObject){
        // this will call the moveTodoWhenDone according to it's state
        console.log(checkboxObject)
    }

    addNewTodo(newTodo){

        this.setState(
            oldVal => {
                return {todoActive: [newTodo, ...oldVal.todoActive]}
            }
        )

    }

    render(){
        console.log(this.state.todoDone)
        return(
            <>
                <Container sx={{marginTop:'2rem'}}>
                    {/* Input Form */}
                    <TodoAdd addNewTodo={this.addNewTodo}/>
                    <ul>
                        {
                            this.todoActive.map(
                            val => {
                                return (
                                    <TodoElement 
                                        todo = {val.todo} 
                                        todoStatus= {val.active}
                                        key = {val.todo}
                                        onof = {this.handleCheckbox}
                                    />
                                )
                            }
                            )
                        } 
                        <br/>
                        {
                            this.todoDone.map(
                                val=> {
                                    return (
                                        <TodoElement
                                            todo = {val.todo}
                                            key = {val.todo}
                                            blur = {true}
                                            onof = {this.handleCheckbox}
                                        />
                                    )
                                }
                            )
                        }
                    </ul>
                </Container>
            </>
            
        )
    }
}