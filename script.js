function makeArray(n){
    this.length=n;
    for (var i=1; i<=n; i++){
      this[i]=0;
    }
  }

days=new makeArray(7);
days[o]="Saturday"
days[1]="Sunday"
days[2]="Monday"
days[3]="Tuesday"
days[4]="Wednesday"
days[5]="Thursday"
days[6]="Friday"

months=new makeArray(12);
months[1]="January"
months[2]="February"
months[3]="March"
months[4]="April"
months[5]="May"
months[6]="June"
months[7]="July"
months[8]="August"
months[9]="September"
months[10]="October"
months[11]="November"
months[12]="December"

function compute(form){
    var val1=parseInt(form.day.value, 10)
    if((val1<0)|| (val1>31)){
        alert("Invalid Day Of Month. Please enter a value between 1 and 31")
    }

var val2=parseInt(form.month.value, 10)
if((val2<0) || (val2>12)){
    alert("Incorrect Month Value. Please Try Again!")
    }

var val2a=parseInt(form.month.value, 10)
var val3=parseInt(form.year.value, 10)
if (val3<1850){
    alert("Are You That Old?")
}


}

