import React from 'react'
import web from '../src/Imgages/image.gif'
import { NavLink } from 'react-router-dom';
import Common from './Common';

const About = () => {
    return (
        <>
           <Common 
               name="Wellcome to About Page"
               imgsrc={web}
               visit="/Contact"
               btname="Contact Now"
           />
        </>
    )
}

export default About;
