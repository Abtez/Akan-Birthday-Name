function compute(event){
    event.preventDefaults();

    var form=new FormData(event.target);
    var day=form.get("day");
    var month=form.get("month");
    var year=form.get("year");
    var gender=form.get("gender");
     
}
