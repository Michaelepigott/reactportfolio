import '../css/Body.css';
import React, { useState } from 'react';

export default function Contact(){
    //establish 2 step variables to handle user input
    const [name, nameGet] = useState('');
    const [email, emailGet] = useState('');
    const [message, messageGet] = useState('');
    const [validateEmail, setIsValidEmail] = useState(false);
    const [validateEntry, entryFilled] = useState(false);
    //establish proper email format and test input against it
    const checkEmailFormat = (email) => {
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailFormat.test(email);
    }
    //uses regex to test if a feild is empty
    const checkIfBlank = (input) => {
        const notBlank = /^.+$/;
        return notBlank.test(input);
    }
    //assign function to run test functions and assign results to variables
    function onSubmit(event){
        event.preventDefault();
        //assign test results to variables
        const isEmail = checkEmailFormat(email);
        setIsValidEmail(isEmail);

        const nameEntered = checkIfBlank(name);
        const messageEntered = checkIfBlank(message);
        //collects validations into single variable
        entryFilled(nameEntered && messageEntered);
        //If a feild is empty, end function
        if (!nameEntered || !isEmail || !messageEntered ){
            console.log('Empty Feild, try again');
            return;
        }
        //assigns variable to targets
        const contactForm = event.target;
        //gets data from input, assigns to formData
        const formData = new FormData(contactForm);
        //puts input into object
        const formSave = Object.fromEntries(formData.entries());
        //console logs information, database implimentation to receive content to happen later
        console.log(formSave);


    }
    //Create form and Send buttons, add text if validation fails.
    return (
        <form id='contactform' method = 'post' onSubmit={onSubmit}>
            <div className='container'>
                <h2>Contact Me</h2>
                <label>
                    Name:<br></br>
                    <input 
                        name='name'
                        value = {name}
                        onChange={(event) => nameGet(event.target.value)}
                    />
                </label>
                <br></br>
                <label>
                    Email:<br></br>
                    <input 
                        name='email'
                        type='email'
                        value = {email}
                        onChange={(event) => emailGet(event.target.value)}
                    />
                </label>
                <br></br>
                <label>
                    Message:<br></br>
                    <textarea 
                        name='message'
                        rows={10}
                        cols={100}
                        value = {message}
                        onChange={(event) => messageGet(event.target.value)}
                    />
                </label>
                <br></br>
                <button className='btn2' type='submit'>SEND</button>
                {!validateEmail && <p>Please Enter a Valid Email</p>}
                {!validateEntry && <p>Please Fill All Inputs</p>}
                
            </div>
        </form>
    );
}