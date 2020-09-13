    /* Grade function */

function grade(id, mark){
    var grade;
    
    if (mark > 100) {
        grade = 'Out of range';
    } else if (mark >= 80) {
        grade = 'A+';
    } else if (mark >= 70) {
        grade = 'A';
    } else if (mark >= 60) {
        grade = 'A-';
    } else if (mark >= 50) {
        grade = 'B';
    } else if (mark >= 40) {
        grade = 'C';
    } else if (mark >= 33) {
        grade = 'D';
    } else if (mark >= 0) {
        grade = 'F';
    } else {
        grade = 'Out of range';
    }
    document.getElementById(id).innerHTML = grade;    
}


    /* gradePoint function */

function gradePoint(grade){
    if (grade === 'A+') {
        return 5;
    } else if (grade === 'A') {
        return 4;
    } else if (grade === 'A-') {
        return 3.5;
    } else if (grade === 'B') {
        return 3;
    } else if (grade === 'C') {
        return 2;
    } else if (grade === 'D') {
        return 1;
    } else if (grade === 'F') {
        return 0;
    } else {
        return 'invalid';
    }
}

    /* getResult function */

function getResult(){
    var mark = document.getElementsByTagName('input');    
    var grade = document.getElementsByClassName('grade');    
    var total = 0, totgp = 0;
    var i, gp;
    
    for (i=0; i<9; i++){
        total += Number(mark[i].value);
        gp = gradePoint(grade[i].innerHTML);
        if (gp === 0){
            var fail = true;
        }
        totgp += gp;
    }
    total += Number(mark[9].value);
    if (gradePoint(grade[9].innerHTML) > 2) {
        totgp += gradePoint(grade[9].innerHTML) - 2;
    }
    
    gpa = Math.round(totgp/9*100)/100;
    if (gpa > 5){gpa = 5;}
    document.getElementById('total').innerHTML = total;    
    document.getElementById('gpa').innerHTML = gpa;
    if (fail){
        document.getElementById('gpa').innerHTML = 'Fail';    
    }
    
    if (gpa === 5){
        document.getElementById('result').innerHTML = 'You got total '+total+' marks and your grade is A+.';     
    } else if (gpa >= 4){
        document.getElementById('result').innerHTML = 'You got total '+total+' marks and your grade is A.'; 
    } else if (gpa >= 3.5){
        document.getElementById('result').innerHTML = 'You got total '+total+' marks and your grade is A-.'; 
    } else if (gpa >= 3){
        document.getElementById('result').innerHTML = 'You got total '+total+' marks and your grade is B.';     
    } else if (gpa >= 2){
        document.getElementById('result').innerHTML = 'You got total '+total+' marks and your grade is C.'; 
    } else if (gpa >= 1){
        document.getElementById('result').innerHTML = 'You got total '+total+' marks and your grade is D.'; 
    } 
    if (fail){
        document.getElementById('result').innerHTML = 'You failed. Or there might be some problem.'; 
    }
}








