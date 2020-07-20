
function compute(event){
    event.preventDefault();

    //var x = document.getElementById("myDate").value;
    //document.getElementById("demo").innerHTML = x;
    var gender=document.getElementById("gender").value;
    var day=document.getElementById("day").value;
    var form=new FormData(event.target);
    var day=form.get("day");
    var month=form.get("month");

    if (day<0 || day>31){
        alert("Incorrect Day!")
    }

    if (day==""){
        alert("Input Date!")
    }

    if (month<0 || month>12){
        alert("Incorrect Month!")
    }

    if (month==""){
        alert("Input Month")
    }
    
    var year=form.get("year");

    if (year.length != 4) {
        alert("Incorrect Year");
    }

    if (year=="") {
        alert("Input Year")
    }

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
    var dayOfweekBorn=date.getDay();
    var daysOfTheWeek=Object.keys(names);
    var ghanaNames=names[daysOfTheWeek[dayOfweekBorn]][gender];  
    
    if (gender=== "male" && year>=1900 && day==1 && day<=31 && month==1 && month<=12){
        alert("You Were Born On A " + daysOfTheWeek[date.getDay()] +" " +"And Your Akan Name Is : " + ghanaNames);
        document.getElementById("result").innerHTML=names[date.getDay()];
    }
    else if (gender=== "female" && year>=1900 && day==1 && day<=31 && month==1 && month<=12){
        alert("You Were Born On A " + daysOfTheWeek[date.getDay()] + " " +"And Your Akan Name Is : " + ghanaNames);
        document.getElementById("result").innerHTML=names[date.getDay()];
    }
    else {
        alert("Check details again!")
    }
   
}
    
