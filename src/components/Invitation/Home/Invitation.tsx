import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styles } from './InvitationStyles'
import './Invitation.css'

interface IState {
    isStarted: boolean,
}

function Invitation() {
    const [isStarted, setIsStarted] = useState<IState['isStarted']>(true)
    const [nextPage, setNextPage] = useState<IState['isStarted']>(false)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setIsStarted(false)
        }, 2300)

        const nextId = setTimeout(() => {
            setNextPage(true)
        }, 20000)

        return () => {
            clearTimeout(timerId)
            clearTimeout(nextId)
        }
    }, [])


    return (
        <>
            {isStarted ?
                <Box sx={styles.first_page_background}>
                    <Box sx={styles.welcome_container}>
                        <Box component={'img'} src={'/logo.jpg'} alt='logo' className='lineUp' />
                        <Typography variant='h2' className='welcome-note'>Welcome</Typography>
                    </Box>
                </Box>
                :
                <>
                    {nextPage ?
                        <Box sx={styles.end_note_container} className='end_container'>
                            <Box sx={styles.design_logo_container}>
                                <Box component='img' src={'/leftDsgn.png'} alt='design' sx={styles.design_img} />
                                <Box component='img' src={'/logo.jpg'} alt='logo' sx={styles.logo_img} />
                            </Box>
                            <Box component='hr' sx={styles.horizontal_line} />
                            <Box sx={styles.contact_container}>
                                <Box sx={styles.info_container}>
                                    <Typography variant='h6'>+91-6304702727</Typography>
                                    <Typography variant='h6'>sales@extweb.com</Typography>
                                    <Typography variant='h6'>www.extwebtech.com</Typography>
                                </Box>
                            </Box>
                            <Typography variant='h1' sx={styles.thank_you_note} className='thank-you-note'>Thank you</Typography>
                        </Box>
                        :
                        <Box sx={styles.second_container}>
                            <Box sx={styles.theme_container}>
                                <Box component={'img'} src={'/10th 3.webp'} alt='10 years img' sx={styles.ten_years_img} className='ten-years-img' />
                            </Box>

                            <Box sx={styles.content_container}>
                                <Box component={'img'} src={'/logo.jpg'} alt='card' sx={styles.org_logo} />
                                <Typography variant='h2' sx={styles.heading}>Annual Day Invitation</Typography>
                                <Box className='date_container'>
                                    <Typography variant='h6' className='date'>10-Dec-2023</Typography>
                                </Box>
                                <Box sx={styles.invitation_quote}>
                                    <Typography sx={styles.quote} className='quote-text'>We extend a warm invitation to you to attend annual day celebration of Extended Web AppTech.
                                        Join us and sharing the joy of our 10 years annual day celebration.</Typography>
                                </Box>

                                <Box sx={styles.location_container}>
                                    <Typography variant='h2' sx={styles.location_heading} >Location</Typography>
                                    <Typography sx={styles.location} className='address'>Minerva Grand (Kondapur)</Typography>
                                    <Typography sx={styles.location}>Survey No. 13, 91/4, 5th Floor, Door No.2,</Typography>
                                    <Typography sx={styles.location}>Adjacent To Jayabheri Silicon Towers,</Typography>
                                    <Typography sx={styles.location}>Hitech City Rd, Kondapur, Hyderabad,</Typography>
                                    <Typography sx={styles.location}>Telangana-500084</Typography>
                                </Box>
                            </Box>
                        </Box>
                    }
                </>
            }
        </>
    )
}

export default Invitation









