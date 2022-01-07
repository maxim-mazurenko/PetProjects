import Courses from '../courses/courses';
import './request.scss';

const RequestCourses = () => {

    let statusMessage = document.createElement('div');
    statusMessage.className = 'cssload-spin-box';
 
    document.querySelector('body').insertAdjacentElement('afterbegin', statusMessage);


    fetch('http://localhost:88/server/requestCourses.php', {
        method: "GET",
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response.text();  
        } 
        throw new Error(response.statusText);
    })
    .then(response => {
        const data = JSON.parse(response);
        statusMessage.remove();
        <Courses data={data}/>
        
       
        
    })
    .catch(() => {
        statusMessage.remove();
        
    });

    
}


export default RequestCourses;
