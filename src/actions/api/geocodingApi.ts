import axios from 'axios';


 const geocodingAPIAdress = axios.create({
    headers:{
        'Content-Type': 'application/json',
    },
});


export {
    geocodingAPIAdress,
};
