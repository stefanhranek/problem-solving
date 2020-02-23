function gradingStudents(grades) {
    let roundedGrades = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
            roundedGrades.push(grades[i]);
        } else {
            if ((grades[i] % 5) < 3) {
                roundedGrades.push(grades[i]);
            } else {
                roundedGrades.push(grades[i]+2);
            }
        }
    }
    return roundedGrades;
}

// Fails 7/12 test cases so far