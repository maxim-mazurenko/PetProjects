import './request.scss';

const Request = (event) => {
    event.preventDefault();
    const user = {
        email: document.querySelector('#email_auto').value,
        password: document.querySelector('#password_auto').value
    };

    if (user.email === '') {
        document.querySelector('#email_auto').style.border = '2px solid rgb(230 7 7)';
    } else { 
        document.querySelector('#email_auto').style.border = '1px solid rgba(0, 0, 0, 0.8)';
        
    }

    if (user.password === '') {
        document.querySelector('#password_auto').style.border = '2px solid rgb(230 7 7)';
    } else { 
        document.querySelector('#password_auto').style.border = '1px solid rgba(0, 0, 0, 0.8)';
        
    }

    let statusMessage = document.createElement('div');
    statusMessage.className = 'cssload-spin-box';
 
    document.querySelector('.authorization__form-btn').insertAdjacentElement('afterend', statusMessage);


    fetch('http://localhost:88/server/auth.php', {
        method: "POST",
        body: JSON.stringify(user)
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response.text();  
        } 
        throw new Error(response.statusText);
    })
    .then(response => {
        const data = JSON.parse(response);
        
      if (data == null) {
        statusMessage.remove();
        Err("Неверный логин или пароль.");
          
      } else if (data.email === 'Admin@link') {
          window.location.href = '../admin.html';
          statusMessage.remove();
      } else {
        statusMessage.remove();
        
        const {name, surname, email, id, restaurant} = data;

        document.cookie = "name=" + encodeURIComponent(name);
        document.cookie = "surname=" + encodeURIComponent(surname);
        document.cookie = "email=" + encodeURIComponent(email);
        document.cookie = "id=" + encodeURIComponent(id);
        document.cookie = "restaurant=" + encodeURIComponent(restaurant);
        
        window.location.reload();


      }
    })
    .catch(() => {
        statusMessage.remove();
        Err("Ошибка соеденения");
        
    });

    
}


const Err = (text) => {
    


    let div = document.createElement('div');
    div.className = "noLogin";
    div.innerHTML = text;

    document.querySelector('.authorization__form-btn').after(div);

    document.querySelectorAll('.noLogin').forEach((item, i) => {
        if (i > 0) {
            item.remove();
        }
    })
    

    
      
}

export default Request;