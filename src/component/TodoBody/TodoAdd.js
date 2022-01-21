import { Button, Grid, Paper, TextField } from "@mui/material";
import { useState } from "react";



const TodoAdd = (props)=> {

    const [inputVal, setInputVal] = useState('');

    const formHandler = (event)=> {
        event.preventDefault();
        props.addNewTodo({active: true, todo: inputVal});
        setInputVal('');
    }

    const inputHandler = (event)=> {
        setInputVal(event.target.value);
    }

    return (
        <>
            <Paper elevation={0} sx={{marginBottom:'1.5rem'}}>
                <form onSubmit={formHandler}>
                    <Grid container columnSpacing={2} alignItems='center'>
                        <Grid item lg>
                            <TextField 
                                variant="outlined" 
                                label="todo" 
                                type="text" 
                                onChange={inputHandler} 
                                value={inputVal} 
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <Button 
                                variant="contained" 
                                type="submit"
                                size="large"
                            >
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </>
    )
}

export default TodoAdd;