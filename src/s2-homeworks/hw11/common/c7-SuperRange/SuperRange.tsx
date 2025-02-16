import React from 'react'
import {Slider, SliderProps, styled} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <PrettoSlider
            sx={{width: 147}}

            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange

const PrettoSlider = styled(Slider)({
    color: 'rgba(0, 204, 34, 1)',
    height: 4,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-rail': {
        height: 4,
        opacity: 2,
        color: 'rgba(139, 139, 139, 1)',
    },
    '& .MuiSlider-thumb': {
        height: 18,
        width: 18,
        backgroundColor: '#fff',
        border: '1px solid rgba(0, 204, 34, 1)',
        '&:focus, &:hover,&.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&::before': {
            height: 6,
            width: 6,
            backgroundColor: 'rgba(0, 204, 34, 1)',
            boxShadow: 'inherit',
        },
    },

});