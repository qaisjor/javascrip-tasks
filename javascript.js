let mark =  window.prompt("enter your mark between (0 : 100)")


if (mark < 50 ){
    document.write("fail")

}
else if (mark >=50 && mark <60 ) {
    document.write(" your mark is : D");
}
else if (mark >=60 && mark < 70 ){
    document.write("your mark is : C");
}
else if (mark >=70 && mark<80){
    document.write("your mark is : B");
}
else if (mark >=80 && mark<90){
    document.write("your mark is : A");
}
else if(mark >= 90 && mark<=100){
    document.write("your mark is : A+")
}
else{
    document.write("invalid mark  it have to be between (0 and 100)");
}


// task 2

