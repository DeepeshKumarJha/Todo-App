import React from "react";
import TodoElement from "./TodoElement";
import TodoAdd from "./TodoAdd";
import { Container } from "@mui/material";


export default class TodoBody extends React.Component{

    constructor(props){
        super(props);
        console.log('constructor is running....')
        this.addNewTodo = this.addNewTodo.bind(this);
        this.moveTodoWhenDone = this.moveTodoWhenDone.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        // create a single state 
        this.state = {todoList : props.initialTodo}
        
    }

    moveTodoWhenDone(todoValue){
        // This function will move item from todoActive list to todoDone list
        
    }
    
    handleCheckbox(checkboxObject){
        // this will call the moveTodoWhenDone according to it's state
        this.setState(
            (oldVal)=>{
                return oldVal.todoList.map(
                    (val)=>{
                        if(val.todo === checkboxObject.todo){
                            console.log('changing active state')
                            val.active = !val.active
                        }
                        return val
                    }
                )
            }
        )
        console.log(this.state.todoList.map(val=>{
            console.log(val)
            return val
        }))
        
    }

    addNewTodo(newTodo){

        this.setState( (oldVal) => {
                return {todoList: [newTodo, ...oldVal.todoList]}
            }
        )

    }

    render(){

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
                                        blur = {val.active}
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
                                            blur = {val.active}
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
