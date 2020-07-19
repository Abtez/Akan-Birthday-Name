
function compute(event){
    console.log(event);

    event.preventDefault();

    var gender=document.getElementById("gender").value;
    var day=document.getElementById("day").value;
    var form=new FormData(event.target);
    var day=form.get("day");
    var month=form.get("month");

    if (day<0 || day>31){
        alert("Incorrect Day!")
    }
    if (month<0 || month>12){
        alert("Incorrect Month!")
    }
    var year=form.get("year");
    var gender=form.get("gender");
    var names= {
        Sunday: {
        male: 'Kwasi',
        female: 'Akosua'
        },
        Monday: {
        male: 'Kwadwo',
        female: 'Adwoa'
        },
        Tuesday: {
        male: 'Kwabena',
        female: 'Abenaa'
        },
        Wednesday: {
        male: 'Kwaku',
        female: 'Akua'
        },
        Thursday: {
        male: 'Yaw',
        female: 'Yaa'
        },
        Friday: {
        male: 'Kofi',
        female: 'Afua'
        },
        Saturday: {
        male: 'Kwame',
        female: 'Ama'
        },
        } 
    var date=[year,month,day]
    var date=new Date(date);
    console.log(date);

    var dayOfweekBorn=date.getDay();
    console.log(dayOfweekBorn);

    var daysOfTheWeek=Object.keys(names);
    var ghanaNames=names[daysOfTheWeek[dayOfweekBorn]][gender];
    console.log(ghanaNames);
   
    if (gender=== "male"){
        alert("You Were Born On A " + daysOfTheWeek[date.getDay()] +" " +"And Your Akan Name Is : " + ghanaNames);
        document.getElementById("result").innerHTML=names[date.getDay()];
    }
    else if (gender=== "female"){
        alert("You Were Born On A " + daysOfTheWeek[date.getDay()] + " " +"And Your Akan Name Is : " + ghanaNames);
        document.getElementById("result").innerHTML=names[date.getDay()];
    }
    else{
        alert("You seem to have entered the wrong information please try again!")
    }
    
}
