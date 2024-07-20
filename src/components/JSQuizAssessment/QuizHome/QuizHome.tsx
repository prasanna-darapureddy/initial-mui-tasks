import React,{useState}  from 'react'
import { Box, Typography, Button, Stack} from '@mui/material';
import Questions from '../Questions/Questions';


interface IState{
    isStarted: boolean,
}


const QuizHome = () => {
    const [isStarted, setQuizStarted] = useState<IState['isStarted']>(false)   
    
    const onClickStartButton = () => {       
        setQuizStarted(!isStarted)
    }    
       
    return(
        <>
            {isStarted ?  
            (
            <>
                <Questions isStarted={isStarted} setQuizStarted={setQuizStarted}/>            
            </>
            ) 
            
            :            
            (
            <Box component='div' sx={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center' }}>
                <Typography component='h1' variant='h2'>Let's Start Quiz</Typography>
                <Stack direction='row' sx={{m: 4}}>
                    <Button variant="contained" type='button' onClick={onClickStartButton}>Start</Button>
                </Stack>
            </Box>
            )}
            
        </>
    )
}
export default QuizHome