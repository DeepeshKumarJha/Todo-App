import { useState } from "react";



const TodoAdd = (props)=> {

    const [inputVal, setInputVal] = useState('');

    const formHandler = (event)=> {
        event.preventDefault();
        // console.log(inputVal)
        props.addNewTodo({active: true, todo: inputVal});
        setInputVal('');
    }

    const inputHandler = (event)=> {
        setInputVal(event.target.value);
    }

    return (
        <>
            <form onSubmit={formHandler}>
                    <input type='text' onChange={inputHandler} value={inputVal}/>
                    <input type='submit' value='ADD'/>
            </form>
        </>
    )
}

export default TodoAdd;