window.onload = function () {
    document.querySelector('smart-drop-down-list').addEventListener('change', function () {
        const tokens = this.getElementsByClassName('smart-token');

        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i].textContent.indexOf('Anne Kean') > -1) {
                tokens[i].getElementsByClassName('avatar')[0].src = '../../images/phonebook/anne.png';
            }
            else if (tokens[i].textContent.indexOf('Andrew Watson') > -1) {
                tokens[i].getElementsByClassName('avatar')[0].src = '../../images/phonebook/andrew.png';
            }
            else if (tokens[i].textContent.indexOf('Avril Janin') > -1) {
                tokens[i].getElementsByClassName('avatar')[0].src = '../../images/phonebook/avril.jpeg';
            }
            else if (tokens[i].textContent.indexOf('Janet Pattenson') > -1) {
                tokens[i].getElementsByClassName('avatar')[0].src = '../../images/phonebook/janet.png';
            }
            else if (tokens[i].textContent.indexOf('Johanna Svensson') > -1) {
                tokens[i].getElementsByClassName('avatar')[0].src = '../../images/phonebook/johanna.jpeg';
            }
            else if (tokens[i].textContent.indexOf('Johnny Abana') > -1) {
                tokens[i].getElementsByClassName('avatar')[0].src = '../../images/phonebook/johnny.jpeg';
            }
            else if (tokens[i].textContent.indexOf('Laura Thene') > -1) {
                tokens[i].getElementsByClassName('avatar')[0].src = '../../images/phonebook/laura.png';
            }
            else if (tokens[i].textContent.indexOf('Margaret Vetton') > -1) {
                tokens[i].getElementsByClassName('avatar')[0].src = '../../images/phonebook/margaret.png';
            }
            else if (tokens[i].textContent.indexOf('Maria Sevrano') > -1) {
                tokens[i].getElementsByClassName('avatar')[0].src = '../../images/phonebook/Maria.jpeg';
            }
            else if (tokens[i].textContent.indexOf('Mark Yemen') > -1) {
                tokens[i].getElementsByClassName('avatar')[0].src = '../../images/phonebook/mark.jpeg';
            }
            else if (tokens[i].textContent.indexOf('Maya Verdara') > -1) {
                tokens[i].getElementsByClassName('avatar')[0].src = '../../images/phonebook/maya.jpeg';
            }
            else if (tokens[i].textContent.indexOf('Michael Barton') > -1) {
                tokens[i].getElementsByClassName('avatar')[0].src = '../../images/phonebook/michael.png';
            }
            else if (tokens[i].textContent.indexOf('Monica Oghini') > -1) {
                tokens[i].getElementsByClassName('avatar')[0].src = '../../images/phonebook/monica.jpeg';
            }
            else if (tokens[i].textContent.indexOf('Nancy Queens') > -1) {
                tokens[i].getElementsByClassName('avatar')[0].src = '../../images/phonebook/nancy.png';
            }
            else if (tokens[i].textContent.indexOf('Robert Drawny') > -1) {
                tokens[i].getElementsByClassName('avatar')[0].src = '../../images/phonebook/robert.png';
            }
            else if (tokens[i].textContent.indexOf('Steven Fedrichy') > -1) {
                tokens[i].getElementsByClassName('avatar')[0].src = '../../images/phonebook/steven.jpeg';
            }
            else if (tokens[i].textContent.indexOf('Toni Versachi') > -1) {
                tokens[i].getElementsByClassName('avatar')[0].src = '../../images/phonebook/toni.jpeg';
            }
        }
    });
}