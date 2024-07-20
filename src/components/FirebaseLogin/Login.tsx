import { Box, Button, Typography,} from '@mui/material'
import React, { useState } from 'react'
import {auth, googleProvider} from './Firebase-config';
import { createUserWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import { styles } from './LoginStyles';
import { Google } from '@mui/icons-material';

interface IState{
  email: string,
  password: string,
}

function Login() {
  const [email, setEmail] = useState<IState['email']>('')
  const [password, setPassword] = useState<IState['password']>('')

  const onLogin = async () => {
    try{
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (err){
      console.error(err);
    }
    setEmail('')
    setPassword('')
  }

  const onGoogle = async () => {
    
    try{
      await signInWithPopup(auth, googleProvider)
    } catch (err:any){
      if (err.code === "auth/account-exists-with-different-credential") {
        let pendingCred = err.credential;
      }
      console.error(err)
    }

    setPassword('')
    setEmail('')
  }

  return (
      <Box sx={styles.main_container}>
        <Box sx={styles.login_card}>
          <Box sx={styles.whats_app_logo_container}>
            <Typography variant='h5'>Whats App</Typography>
            <Box component={'img'} src={'/logo-whatsapp-trans.webp'} alt='whats app logo' sx={styles.wa_img}/>
          </Box>
          <Box sx={styles.inputs_container}>
            <Box component={'input'} type='text' placeholder='Enter email Id' sx={styles.user_input} value = {email} onChange={(e) => {setEmail(e.target.value)}}/>
            <Box component={'input'} type='password' placeholder='Enter password' sx={styles.user_input} value = {password} onChange={(e) => {setPassword(e.target.value)}}/>
            <Button variant='contained' onClick={onLogin}>Sign In</Button>
            <Box>
              <Google onClick={onGoogle} sx={styles.google_icon} />
            </Box>
          </Box>

        </Box>
      </Box>
  )
}

export default Login


{/* <Box sx={styles.googleContainer} onClick={onGoogle}>
                        <Box  component={'img'} src='/googleLogo.png' alt='Google logo' sx={styles.googleImg}/>
                        LOG IN WITH GOOGLE 
                    </Box> */}
