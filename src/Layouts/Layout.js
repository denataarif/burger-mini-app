import React from 'react'
import Navigation from './Navigation.js'
import MainContent from './MainContent.js'

const DefaultLayout = (props) =>{
    return (
        <>
            <Navigation />
            <MainContent>
                {props.children}
            </MainContent>
        </>
    )
}

export default DefaultLayout