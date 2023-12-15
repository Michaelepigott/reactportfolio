
import React from 'react';
import '../css/Body.css';
import { Card } from 'react-bootstrap';
import Recipieimage from '../assets/images/recipieproject.png';
import Drinkimg from '../assets/images/drinkologist.png';
import Portfol from '../assets/images/oldportfolio.png';
import Schedimg from '../assets/images/Scheduling.png';
import Quizimg from '../assets/images/quizImg.png';
import Passgenimg from '../assets/images/passwordgen.png';
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
        title:'RecipeProject',
        //Info about project
        info:'A full stack Node.js based blog I contributed to',
        //Github Repo Link
        git:'https://github.com/Michaelepigott/RecipeProject', 
        //Image
        image: Recipieimage, 
        //Deployed link
        link:'https://thawing-sea-00451-374dc9c94032.herokuapp.com/',
    },
    {
        title:'Drinkologist',
        info:'A pure front end use of APIs to randomly generate and display a cocktail order based on user inputted ingredients',
        git:'https://github.com/Michaelepigott/Group-Project-8-25', 
        image: Drinkimg, 
        link:'https://michaelepigott.github.io/Group-Project-8-25/',
    },
    {
        title:'Previous Portfolio',
        info:'A previous portfolio created as a project early in my learning process, shown here as a benchmark of improvement',
        git:'https://github.com/Michaelepigott/Personal-Portfolio', 
        image: Portfol, 
        link:'https://michaelepigott.github.io/Personal-Portfolio/',
    },
    {
        title:'Workday Scheduler',
        info:'Hourly manager created using Day.js and local storage',
        git:'https://michaelepigott.github.io/Hourlymangagerproject/', 
        image: Schedimg, 
        link:'https://github.com/Michaelepigott/Hourlymangagerproject',
    },
    {
        title:'StudyQuiz',
        info:'A coding study quiz created for practice with Dom traverse in JS',
        git:'https://github.com/Michaelepigott/QuizProject', 
        image: Quizimg, 
        link:'https://michaelepigott.github.io/QuizProject/index.html',
    },
    {
        title:'PasswordGenerator',
        info:'Basic JS practice that autogenerates a password based on user input',
        git:'https://github.com/Michaelepigott/Password-Generator', 
        image: Passgenimg, 
        link:'https://michaelepigott.github.io/Password-Generator/',
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