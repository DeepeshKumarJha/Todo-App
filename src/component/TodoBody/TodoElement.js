import { Checkbox, Grid, IconButton, Paper, Typography } from "@mui/material";
import ClearSharpIcon from '@mui/icons-material/ClearSharp';



const TodoElement = (props)=> {

    const handleCrossClick = (event)=> {
        console.log(props.todo)
        console.log('cross is clicked')
    }

    const handleCheckBox = (event)=> {
        props.onof({active: event.target.checked, todo: props.todo})
    }

    return (
        <li style={{'listStyle':'none'}} >
            <Paper sx={{padding:'.8rem', marginBottom:'1rem', background:'#303030'}} elevation={1}>
                <Grid 
                    container
                    alignItems={'center'}
                    >
                    <Grid item>
                        <Checkbox onChange={handleCheckBox}
                            sx={{
                                    color:'white', 
                                    '&.Mui-checked': {
                                        color:"red",
                                    }
                                }}
                        />
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" sx={{color:'lightgrey'}}>
                            {props.todo}
                        </Typography>
                    </Grid>
                    <Grid 
                        item 
                        sx={{
                                marginRight:'1rem',
                                marginLeft:'auto'
                            }}
                        >
                            <IconButton id="two" onClick={handleCrossClick}>
                                <ClearSharpIcon 
                                    sx={{color:'lightgrey'}} 
                                />
                            </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </li>
    )
}

export default TodoElement;