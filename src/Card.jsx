import React from 'react'
import { NavLink } from 'react-router-dom';
import web from '../src/Imgages/download.jpg'

const Card = (props) => {
    return (
        <>

            <div className="mx-auto  ">
                <div className="card dsa">
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card
                           title the bulk of the card's content.
                        </p>
                        <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Card;
