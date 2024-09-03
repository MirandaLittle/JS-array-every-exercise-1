'use strict';

// JS find() exercise

const guestList = require('./mockData.js').data;

// Your code here

const thisYear = new Date().getFullYear();

const isOver18 = guestList.every(person => person.birth_year + 18 <= thisYear)

console.log(isOver18)