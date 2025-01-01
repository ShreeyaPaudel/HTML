function calculateResults() {

    let webDev = parseFloat(document.getElementById("webDev").value);
    let softwareDev = parseFloat(document.getElementById("softwareDev").value);
    let programming = parseFloat(document.getElementById("programming").value);
    let androidStudio = parseFloat(document.getElementById("(androidStudio").value);

    if(webDev>100){
        alert("marks must be less than 100");
    }


  
    let totalMarks = webDev + softwareDev + programming + androidStudio;
    let percentage = (totalMarks / 400) * 100;


    let gpa = (percentage / 100) *4;

   
    let grade ;
    if(percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B+";
    } else if (percentage >= 60) {
        grade = "B";
    } else if (percentage >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }






    document.getElementById("percentage").textContent = percentage.toFixed(2);
    document.getElementById("gpa").textContent = gpa.toFixed(2);
    document.getElementById("grade").textContent = grade;

   
    document.getElementById("results").style.display = "block";
}
