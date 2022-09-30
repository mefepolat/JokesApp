import fetch, { Request } from 'node-fetch';
const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {Accept: 'application/json'}
});

const joke = await response.json();

console.log(joke);