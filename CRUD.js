class Person{
     static key = 0;
     constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
        this.ID = ++Person.key;
     }
     get_ID(){
        return this.ID;
     }

     get_name(){
        return this.name;
     }
     set_name(name){
        this.name=name;
     }

     get_age(){
        return this.age;
     }
     set_age(age){
        this.age=age;
     }
     displayInformation(){
        console.log("ID: ",this.ID);
        console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`);
     }
}

class Student extends Person{
    constructor(name,age,address){
        super(name,age,address);
        this.position = "Student";
    }
    displayInformation(){
        super.displayInformation();
        console.log("Position: ", this.position)
    }
}

class Teacher extends Person{
    constructor(name,age,address,subject){
        super(name,age,address);
        this.position = "Teacher";
        this.subject = subject;
    }
    displayInformation(){
        super.displayInformation();
        console.log("Position: ", this.position);
        console.log("Subject: ", this.subject);
    }
}


class Class{
    constructor(name_class,teacher,...students){
        this.name_class = name_class;
        this.teacher = teacher;
        this.student_list = [];
        students.forEach((student)=>this.student_list.push(student));
    }

    displayInformation(){
        console.log("Class name: ", this.name_class);
        console.log("---------------------------------------")
        console.log(this.teacher.displayInformation());
        console.log("---------------------------------------")
        this.student_list.forEach((student,index)=>{
            console.log("Number",index);
            student.displayInformation();
        })
    }
    delete_student(id){
        this.student_list = this.student_list.filter((student)=>student.get_ID() != id);
    }

    edit_student(student){
        let student_update = this.student_list.find((element)=> element.get_ID() == student.get_ID())
        student_update.name = student.name;
        student_update.age = student.age;
        student_update.address = student.address;
    }

    add_student(...students){
        students.forEach(student => this.student_list.push(student));
    }
}

let student_tuan = new Student("Tuan",12,20);
let teacher_tuan = new Teacher("Tuan",12,20,"Toan");
let student_tai = new Student("Tai",12,20);
let class_12 = new Class("Class 12A", teacher_tuan,student_tuan,student_tai);
class_12.displayInformation();
student_tuan.set_name("TUAN 12 BEN NUOC");
class_12.displayInformation();
class_12.edit_student(student_tuan);
class_12.displayInformation();
class_12.delete_student(student_tai.get_ID());
class_12.displayInformation();
class_12.add_student(student_tai);
class_12.displayInformation();