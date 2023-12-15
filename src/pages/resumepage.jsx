import pdf from '../assets/resume.pdf';
//build resume page into react dom
function Resume() {
    return (
        <div className="container">
            <h1>Resume</h1>
            <p>click on the link to download my resume.</p>
             <a className='resumelink' href={pdf} download>My Resume</a>
        </div>
    );
    }
export default Resume;