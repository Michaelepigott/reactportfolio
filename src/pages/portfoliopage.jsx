
import React from 'react';
import '../css/Body.css';
import { Card } from 'react-bootstrap';
import Filler from '../assets/images/th.jpg'

//Create template for project cards
const CardFormat = ( {title, info,image, link, git}) =>{
    return(
        <Card className ='mb-6 cardsize'>
            <div>
                <a target='_blank' rel = "noopener noreferrer">
                    <Card.Img
                    variant='middle'
                    src={image}
                    alt={title}
                    className ='img' />
                </a>
                <div className='sidebtns'>
                    <form action={link}  method="get" target="_blank">
                        <button type='button' className='btn'>Project</button>
                    </form>
                    <form action={git}  method="get" target="_blank">
                        <button type='button' className='btn'>GitHub</button>
                    </form>
                </div>
            </div>
            <h3>{title}</h3>
            <p>{info}</p>
        </Card>
    );
};
//Create project objects
const projects = [
    {
        //Title of Project
        title:'filler',
        //Info about project
        info:'this is a lot of filler',
        //Github Repo Link
        git:['stuff', 'morestuff', 'lots of stuff'], 
        //Image
        image: Filler, 
        //Deployed link
        link:'https://developer.chrome.com/docs/workbox/managing-fallback-responses/#offline-page-only',
    },
    {
        title:'filler',
        info:'this is a lot of filler',
        git:['stuff', 'morestuff', 'lots of stuff'], 
        image: Filler, 
        link:'https://developer.chrome.com/docs/workbox/managing-fallback-responses/#offline-page-only',
    },
    {
        title:'filler',
        info:'this is a lot of filler',
        git:['stuff', 'morestuff', 'lots of stuff'], 
        image: Filler, 
        link:'https://developer.chrome.com/docs/workbox/managing-fallback-responses/#offline-page-only',
    },
    {
        title:'filler',
        info:'this is a lot of filler',
        git:['stuff', 'morestuff', 'lots of stuff'], 
        image: Filler, 
        link:'https://developer.chrome.com/docs/workbox/managing-fallback-responses/#offline-page-only',
    },
    {
        title:'filler',
        info:'this is a lot of filler',
        git:['stuff', 'morestuff', 'lots of stuff'], 
        image: Filler, 
        link:'https://developer.chrome.com/docs/workbox/managing-fallback-responses/#offline-page-only',
    },
];
//Impliment push Project objects into template
const Portfolio = () => {
    return (
        <div className='cardcontainer'>
            {projects.map((project, index) =>(
                <CardFormat key = {index} {...project}></CardFormat>
            ))}
        </div>
    );
};

export default Portfolio;