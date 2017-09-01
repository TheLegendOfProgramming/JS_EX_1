var student= {name:"Jill", birthday: "20-september",hobby: "travelling",email: "jill@gmail.com"};
delete student.name;
student.name ="Yolanda";
for(hobby in student){// this iterates overthe properties
    console.log(hobby,student[hobby]);
  }

  function Person(firstname,lastname,age){
    this.firstname = firstname;
    this.lastname =lastname;
    this.age= age;
    console.log("Name: "+ this.firstname);
    setTimeout(function(){
      console.log("Hi  "+this.firstname);  
    }.bind(this),2000);
  }
  console.log("==========================================");  
var person = new Person("Yolz","Kay","31");
 console.log(person);
console.log("==========================================");