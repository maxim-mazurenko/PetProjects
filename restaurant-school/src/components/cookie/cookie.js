


const cookieDecoder = decodeURIComponent(document.cookie),
      user = cookieDecoder.split(';').reduce((ac, str) => Object.assign(ac, {[str.split('=')[0].trim()]: str.split('=')[1]}), {});

 



export default user;