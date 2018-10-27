	class Student{
		constructor(id, name, gpa, courses=[]){
			this.id=id
			this.name=name
			this.gpa=gpa
			this.courses=courses}
			toString(){
				return "name: "+ this.name+" id :"+this.id
			}
		}
		class Course{
			constructor(name, time, date, rooms=[]){
				this.name=name
				this.time=time
				this.date=date
				this.rooms=rooms}
				toString(){
					return "name: "+ this.name+" time :"+this.time
				}
			}
students=new Map()
courses=new Map()
 function parseStudent(line) {
        let b = line.split("\t");

        let id = b[0], name = b[1], gpa = b[2];
        let list = [];
        for (let i=3; i<b.length; i++) 
            list.push(b[i]);
        return new Student(id, name, gpa, list);
    }
    function addStudents(txt) {
        let a = txt.split("\n");
        for (var i = 0; i < a.length; i++) {
            let std = parseStudent(a[i]);
            students.set(i,std)
        }
     

  }
  function parseCourse(line) {
    let b = line.split("\t");
    let name = b[0], time = b[1], date = b[2];
    let list = [];
    for (let i=3; i<b.length; i++) 
        list.push(b[i]);
    return new Course(name,time, date, list);
}
function addCourse(txt) {
    let a = txt.split("\n");
    for (let s of a) {
      let course = parseCourse(s);
      courses.set(course.name,course)
  }

}
function read(){
    addStudents(studentText)
    addCourse(courceText)
        //output1.innerText =studentText
        // output1.innerText =courceText
       // fetch("https://github.com/maeyler/JS/blob/master/data/Students.txt")
        /*fetch("https://github.com/Maya-Karahbala/advancedpro/blob/master/odev2/a.txt")
           .then(function (resp) {
            return  resp.text()})
           .then(function (data) {
            console.log(data) })*/
        //   .then (data => output1.innerText =data)
       // then(r=> console.log(r.text()))
       
   }
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
