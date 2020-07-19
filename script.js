
function compute(event){
    console.log(event);

    event.preventDefault();


    var form=new FormData(event.target);
    var day=form.get("day");
    var month=form.get("month");
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
    var date=[year,month,day].join("/");
    //var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //var d = new Date(dateString);
    //var dayName = days[d.getDay()];
    var date=new Date(date);
    console.log(date);

    var dayOfweekBorn=date.getDay();
    console.log(dayOfweekBorn);

    var daysOfTheWeek=Object.keys(names);
    var ghanaNames=names[daysOfTheWeek[dayOfweekBorn]][gender];
    console.log(ghanaNames);
    
}
