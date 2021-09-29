import React from 'react'
import web from '../src/Imgages/download.jpg'
import Card from './Card';
import Sdata from './Sdata';

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                    <div className="col-8 mx-auto  ">
                        
                            <div className="asd ">

                                {Sdata.map((val, ind) => {
                                    return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />
                                })}
                            </div>

                        

                    </div>
               
            </div>
        </>
    )
}

export default Service;
