import { Box, Paper } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { FiberManualRecordOutlined, FiberManualRecord } from '@mui/icons-material'

const imagesList = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

interface IState {
  scroll: number;
}

function TimerCarousel() {
  const [scrollIndex, setScrollIndex] = useState<IState['scroll']>(0)


  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollIndex === imagesList.length - 1) {
        return setScrollIndex(0)
      } else {
        return setScrollIndex(scrollIndex + 1)
      }
    }, 3000)

    return () => {
      clearInterval(timer)
    }
  }, [scrollIndex])

  const handleSelectedButton = (scrollIndex: number) => {
    setScrollIndex(scrollIndex)
  }

  const onClickNonSelectedButtons = () => {
    handleSelectedButton(scrollIndex)
  }

  return (
    <Paper sx={{ padding: 30, paddingTop: 8 }}>
      {imagesList.map((eachImg, index) => (
        index === scrollIndex &&
        <Box key={eachImg.label} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <Box component='img' src={eachImg.imgPath} alt='images' sx={{ width: '100%', height: 500, }} />
          <Box component='h4' sx={{ position: 'absolute', bottom: '50px', textAlign: 'center', color: ' #009900' }}>{eachImg.label}</Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '	#ebebe0', borderRadius: '40px', height: '5px', padding: '8px', marginTop: '20px' }}>
            {imagesList.map((e, index) => (index === scrollIndex ? <FiberManualRecord key={index + 'fmr'} sx={{ fontSize: 15, color: '#3399ff' }} /> : <FiberManualRecordOutlined key={index + 'fmro'} sx={{ fontSize: 12, color: '#808080' }} onClick={onClickNonSelectedButtons} />))}
          </Box>
        </Box>
      ))}
    </Paper>
  )
}

export default TimerCarousel