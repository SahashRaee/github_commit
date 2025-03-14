const jsonfile=require('jsonfile');
const moment=require('moment');
const simpleGit=require('simple-git');



const PATH_FILE='./data.json';
const DATE=moment().subtract(1, 'd').format();

const data={
    date: DATE
}

jsonfile.writeFile(PATH_FILE, data);

simpleGit().add([PATH_FILE]).commit(DATE,{'--date': DATE}).push();




