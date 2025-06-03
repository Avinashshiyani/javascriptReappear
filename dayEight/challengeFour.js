let studentInfo = {
  name: "Avinash",
  marks: {
    math: 80,
    science: 75,
    english: 65,
  },
  avg : function (){
    let marks = 0 ; 
     for(let key in this.marks){
        marks += this.marks[key]
        return marks / 3;
    }
  }
};

let generateReportCard = (data) => {
  console.log(`Name : ${data.name}`);
  console.log(`Average : ${data.avg()}`)
};

generateReportCard(studentInfo);
