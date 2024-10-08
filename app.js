class Student {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

student1 = new Student("John", 2040);
document.getElementById("student1").innerHTML = student1.name+ " "+ student1.year + student1.age();
student2 = new Student("Bob", 2050);
document.getElementById("student2").innerHTML = "My name is " + student2.name+ " "+"I am born in "+ student2.year +" "+ "My age is " + student2.age();