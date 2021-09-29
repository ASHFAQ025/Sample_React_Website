import React from 'react'
import { useState } from 'react';
const Contact = () => {
    const [data, setData]= useState({
        fullname: "",
        number: "",
        email: "",
        msg: "",
    });
    const InpuEvent =(event)=>{
const {name, value} = event.target;
setData((preVal)=>{
return{
    ...preVal,
    [name]:value,
};
});
    };
    const formSubmit=(e)=>{
e.preventDefault();
alert(
`my name is ${data.fullname},
 My mobile number is ${data.number},
 My email is ${data.email},
 what you want ${data.msg}`
);
    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    FullName
                                </label>
                                <input type="text" 
                                class="form-control"
                                 id="exampleFormControlInput1"
                                 name={"fullname"}
                                 value={data.fullname}
                                 onChange={InputEvent}

                                  placeholder="Enter Your Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Phone
                                </label>
                                <input type="number"
                                 class="form-control"
                                  id="exampleFormControlInput1"
                                  name={"Number"}
                                 value={data.number}
                                 onChange={InputEvent} 
                                  placeholder="Mobile Number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Email address
                                </label>
                                <input type="email" 
                                class="form-control" 
                                id="exampleFormControlInput1"
                                name={"email"}
                                 value={data.email}
                                 onChange={InputEvent}
                                 placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">
                                    Message
                                </label>
                                <textarea 
                                class="form-control" 
                                id="exampleFormControlTextarea1" 
                                rows="3"
                                name={"msg"}
                                 value={data.msg}
                                 onChange={InputEvent}
                                >

                                </textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">
                                    Submit form
                                </button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Contact;
