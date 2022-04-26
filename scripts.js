const d = document,
    result = d.querySelector('.result'),
    firstPage = d.querySelector('.first-page'),
    secondPage = d.querySelector('.second-page'),
    grades = [...d.querySelectorAll('.grade')],
    submit = d.querySelector('input');

let gradeClicked = 0;
function chooseGrade(e) {
    e.preventDefault();

    grades.forEach(grade => {
        if (grade.className === 'grade chosen') {
            grade.classList.remove('chosen');
        }
    });
    this.classList.add('chosen');
    
    gradeClicked = this.dataset.grade;
    result.textContent = `You selected ${gradeClicked} out of 5`;
}

function submitGrade(e) {
    if (gradeClicked !== 0) {
        firstPage.classList.add('hidden');
        secondPage.classList.remove('hidden');
    } else {
        e.preventDefault
    }    
}

grades.forEach(grade => grade.addEventListener('click', chooseGrade));
submit.addEventListener('click', submitGrade);