import React, {useState, useEffect} from 'react'
import { Box, Typography, Button, FormControlLabel, FormControl, Radio, RadioGroup } from '@mui/material';

const questionsList = [
    {
        id: 1,
        question: 'Q. Javascript is an _______ language?',
        options: ['Object-Oriented', 'Object-Based', 'Procedural', 'None of the above'],
        option1: 'Object-Oriented',
        option2: 'Object-Based',
        option3: 'Procedural',
        option4: 'None of the above',
        correctAnswer: 'Object-Oriented'
    },
    {
        id: 2,
        question: 'Q. Which of the following keywords is used to define a variable in Javascript?',
        options: ['let', 'const', 'var', 'All of the above'],
        option1: 'let',
        option2: 'const',
        option3: 'var',
        option4: 'All of the above',
        correctAnswer: 'All of the above',
    },
    {
        id: 3,
        question: 'Q. Which of the following methods is used to access HTML elements using Javascript?',
        options: ['getElementById()', 'getElementByClassName()', 'Both A and B', 'None of the above'],
        option1: 'getElementById()',
        option2: 'getElementByClassName()',
        option3: 'Both A and B',
        option4: 'None of the above',
        correctAnswer: 'Both A and B',
    },
    {
        id: 4,
        question: 'Q. How can a datatype be declared to be a constant type?',
        options: ['const', 'let', 'var', 'constant'],
        option1: 'const',
        option2: 'let',
        option3: 'var',
        option4: 'constant',
        correctAnswer: 'const',
    },
    {
        id: 5,
        question: 'Q. What is the output of the 5+"5" in Javascript?',
        options: ['55',`${10}`,'Error', 'None of the above' ],
        option1: "55",
        option2: `${10}`,
        option3: 'Error',
        option4: 'None of the above',
        correctAnswer: "55",
    },
    {
        id: 6,
        question: 'Q. Which function is used to serialize an object into a JSON string in Javascript?',
        options: ['convert()', 'parse()', 'stringify()', 'None of the above'],
        option1: 'convert()',
        option2: 'parse()',
        option3: 'stringify()',
        option4: 'None of the above',
        correctAnswer: 'stringify()'
    },
    {
        id: 7,
        question: 'Q. What keyword is used to declare an asynchronous function in Javascript?',
        options: ['async', 'await', 'setTimeout', 'None of the above'],
        option1: 'async',
        option2: 'await',
        option3: 'setTimeout',
        option4: 'None of the above',
        correctAnswer: 'async',
    },
    {
        id: 8,
        question: 'Q. How to stop an interval timer in Javascript?',
        options: ['clearInterval', 'clearTimer', 'intervalOver', 'None of the above' ],
        option1: 'clearInterval',
        option2: 'clearTimer',
        option3: 'intervalOver',
        option4: 'None of the above',
        correctAnswer: 'clearInterval'
    },
    {
        id: 9,
        question: 'Q. How do we write a comment in javascript?',
        options: ['/* */', '//',  '#', '&&'],
        option1: '/* */',
        option2: '//',
        option3: '#',
        option4: '&&',
        correctAnswer: '//',
    },
    {
        id: 10,
        question: 'Q. Which of the following methods can be used to display data in some form using Javascript?',
        options: ['document.write()', 'console.log()', 'window.alert()', 'All of the above'],
        option1: 'document.write()',
        option2: 'console.log()',
        option3: 'window.alert()',
        option4: 'All of the above',
        correctAnswer: 'All of the above',
    },
]


interface IState{
    index: number,
    isChecked: boolean,
    selectedValue: string | null,
    score: number,
    timeLeft: number,
    showResult: boolean,
    isActive: boolean,
}

interface Props{
    isStarted: boolean,
    setQuizStarted: React.Dispatch<React.SetStateAction<boolean>>,
}


const Questions = (props: Props) => {
    const [index, setIndex] = useState<IState['index']>(0)
    const [selectedValue, setSelectedValue] = useState<IState['selectedValue']>(null)
    const [score, setScore] = useState<IState['score']>(0)
    const [timeLeft, setTimeLeft] = useState<IState['timeLeft']>(30);
    const [showResult, setShowResult] = useState<IState['showResult']>(false)   
    
    useEffect(() => {
        const countdownTimer = setTimeout(() => {
            if (timeLeft > 0) {
              setTimeLeft(prevTime => prevTime - 1);
            }else{
                setTimeLeft(30)
            }
          }, 1000);

          return () => clearTimeout(countdownTimer);

      }, [timeLeft]);


    useEffect(() => {
        const displayQuestion = () => {
            setIndex((i) => (i + 1) % questionsList.length);                
            
        }
        const timerId = setInterval(displayQuestion, 30000); 
        if(index === questionsList.length-1){
            setScore(0)
            setShowResult(true)
            return () => clearInterval(timerId);
        }        
        return () => clearInterval(timerId);
        
      }, [questionsList]);


      const handleChangeOption = (e:React.ChangeEvent<HTMLInputElement>) => {
            setSelectedValue(e.target.value)           
      }   
     

    const onClickSubmitButton = () => {
        setSelectedValue(null)
        // setTimeLeft(30)
        setIndex((i) => (i + 1) % questionsList.length);
        const correctAnswer = questionsList[index].correctAnswer
        if(selectedValue === correctAnswer){
            setScore(prevScore => prevScore + 1)
        }
        if(index === questionsList.length-1){
            setShowResult(true)
             
        }
    }

    const onClickSkipButton = () => {
        // setTimeLeft(30)
        setIndex((i) => (i + 1) % questionsList.length);
        if(index === questionsList.length-1){
            setShowResult(true)
        }
    }

    const onClickRestart = () => {
        props.setQuizStarted(!props.isStarted)
    }

   
    return(
        <>           
            <Box component='div' sx={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center' }}>
               {
                !showResult ? 

                (
                <>
                <Typography variant='h5'>{questionsList[index].question}</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3, mt: 5}}>
                
                    <FormControl>
                        <RadioGroup name="options" onChange={handleChangeOption}>
                            <FormControlLabel
                                value={`${questionsList[index].option1}`}
                                label={`${questionsList[index].option1}`}
                                control={<Radio />}
                            />
                            <FormControlLabel
                                value={`${questionsList[index].option2}`}
                                label={`${questionsList[index].option2}`}
                                control={<Radio  />}
                            />
                            <FormControlLabel
                                value={`${questionsList[index].option3}`}
                                label={`${questionsList[index].option3}`}
                                control={<Radio />}
                            />
                            <FormControlLabel
                                value={`${questionsList[index].option4}`}
                                label={`${questionsList[index].option4}`}
                                control={<Radio/>}
                            />
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box component='div' sx={{display: 'flex', justifyContent:'center', alignItems:'center', mt: 5}}>
                    {selectedValue === null ? <Button variant='contained' sx={{m: 4}} disabled onClick={onClickSubmitButton}>Submit</Button> : <Button variant='contained' sx={{m: 4}} onClick={onClickSubmitButton}>Submit</Button>}
                    <Button variant='contained' onClick={onClickSkipButton}>Skip</Button>
                </Box>
                <Box component='h4' color={'red'}>You have {timeLeft}sec left</Box>
                </>
                )
                :
                (
                    <Box component='div' sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
                        <Typography variant='h3'>Your Score: {score}</Typography>    
                        <Button onClick={onClickRestart} variant='contained' sx={{m:5}}>Attempt Again</Button>                   
                    </Box>
                )                
                }
            </Box>            
        </>
    )
}
export default Questions