// index.js
const Mustache = require('mustache');
import fetch from 'node-fetch';
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';
/**
  * DATA is the object that contains all
  * the data to be provided to Mustache
  * Notice the "name" and "date" property.
*/
let liveryStat = {liveryCount : undefined};

function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) =>  {
    if (err) throw err;
    const output = Mustache.render(data.toString(), liveryStat);
    fs.writeFileSync('README.md', output);
  });
}

async function getStuff() {
 await fetch("https://raw.githubusercontent.com/Spice9/Geofs-Multiliveries/main/dependencies/liveries.json")
 .then(res => res.json())
 .then(data => liveryStat.liveryCount = (Object.values(data.aircraft).length))
  setTimeout(function(){generateReadMe()},500)
}
getStuff()

