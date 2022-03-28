import React from 'react'

import Bun from './Bun'
import Cheese from './Cheese'
import Lettuce from './Lettuce'
import Patty from './Patty'
import Tomato from './Tomato'


const Burger = () => {

    return (
        <>
            <Bun />
            <Patty/>
            <Lettuce/>
            <Cheese/>
            <Tomato/>
            <Bun />    
        </>
    )

}

export default Burger