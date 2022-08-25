import React, {useEffect, useState} from 'react';
import {Message} from "./Message";

export const MySimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'luciano',
        email: 'luciano@gmail.com'
    });

    const {username, email} = formState

    const inputChange = ({target}) => {
        const {name, value} = target
        setFormState({...formState, [name]: value})
    }

    useEffect(() => {
           console.log("useEffect called")
    }, []);

    useEffect(() => {
          console.log("formstate change")
    }, [formState]);

    useEffect(() => {
        console.log("email change")
    }, [email]);


    return (
        <>
            <h1>Formulario Simple</h1>
            <input type={"text"} className={"form-control"} placeholder={"Username"} name={"username"}
                   value={username} onChange={inputChange}/>
            <input type={"email"} className={"form-control mt-2"} placeholder={"Email"} name={"email"} value={email}
                   onChange={inputChange}/>

            {
                (username === 'lucianopulido') && <Message/>
            }

        </>
    );
};


