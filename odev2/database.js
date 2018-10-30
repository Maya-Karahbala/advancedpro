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
      function addCourses(txt) {
        let a = txt.split("\n");
        for (let s of a) {
          let course = parseCourse(s);
          courses.set(course.name,course)
        }

      }
function read(){
  //reading students data
  fetch("https://maeyler.github.io/JS/data/Students.txt")
  .then(r => r.text())
  .then(addStudents);
   // reading courses data
   fetch("https://maeyler.github.io/JS/data/Courses.txt")
   .then(r => r.text())
   .then(addCourses);  
 }
 function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
