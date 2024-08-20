

function openTab(event, tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    const tabButtons = document.getElementsByClassName('tab-button');

    for (let content of tabContents) {
        content.classList.remove('active');
    }

    for (let button of tabButtons) {
        button.classList.remove('active');
    }

    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}