const list = document.getElementById('list');

function showAllTask() {
    const allTask = list.querySelectorAll('div');


    allTask.forEach(task => {
        task.style.display = 'block';
    })
}

function showCompleteTask() {
    const allTask = list.querySelectorAll('div');
    allTask.forEach(task => {
        if (task.classList.contains('complete')) {


            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
}

function showUncompleteTask() {
    const allTask = list.querySelectorAll('div');
    allTask.forEach(task => {

        if (task.classList.contains('complete')) {
            task.style.display = 'none';
        } else {
            task.style.display = 'block';
        }
    })
}

function sortTask(seletedOption) {
    switch (seletedOption.value) {
        case 'all':
            showAllTask();
            break;
        case 'complete':
            showCompleteTask();
            break;
        case 'uncomplete':
            showUncompleteTask();
            break;
    }
}