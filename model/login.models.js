import {results} from '../data/agentes.js';

const findUser = (email) => {
   return results.find(result => result.email === email);
}   

export const LoginModels = {
    findUser
}