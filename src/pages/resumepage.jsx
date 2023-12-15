import pdf from '../assets/resume.pdf';
//build resume page into react dom
function Resume() {
    return (
        <div className="container">
            <h1>Resume</h1>
            <p>click on the link to download my resume.</p>
             <a className='resumelink' href={pdf} download>My Resume</a>
             <h2>My Competencies</h2>
             <ul className='complist'>
                <li>Bootstrap</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>React</li>
                <li>API use and Creation</li>
             </ul>
        </div>
    );
    }
export default Resume;