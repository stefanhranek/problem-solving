function gradingStudents(grades) {
    let roundedGrades = [];
    for (let i = 0; i < grades.length; i++) {
        if ((grades[i] < 38) || (grades[i] % 5 < 3)) {
            roundedGrades.push(grades[i]);
        } else {
            roundedGrades.push(Math.ceil(grades[i]/5)*5);
        }
    }
    return roundedGrades;
}