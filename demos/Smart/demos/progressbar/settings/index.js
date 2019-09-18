function setValue() {
    const customElement = document.getElementById('progressbar1'),
        progressBar2 = document.getElementById('progressbar2'),
        progressBar3 = document.getElementById('progressbar3'),
        value = parseInt(document.getElementById('input').value, 10) || 0;
    customElement.value = value;
    progressBar2.value = value;
    progressBar3.value = value;
}

function setSettings(key) {
    const progressBar1 = document.getElementById('progressbar1'),
        progressBar2 = document.getElementById('progressbar2');
    const doc = document;
    switch (key) {
        case 'normal':
            progressBar1.inverted = false;
            progressBar2.inverted = false;
            progressbar3.inverted = false;
            doc.getElementsByClassName('layout')[0].disabled = true;
            doc.getElementsByClassName('layout')[1].disabled = false;
            break;
        case 'inverted':
            progressBar1.inverted = true;
            progressBar2.inverted = true;
            progressbar3.inverted = true;
            doc.getElementsByClassName('layout')[1].disabled = true;
            doc.getElementsByClassName('layout')[0].disabled = false;
            break;
        case 0:
            progressBar1.min = 0;
            progressBar2.min = 0;
            progressbar3.min = 0;
            doc.getElementsByClassName('min')[0].disabled = true;
            doc.getElementsByClassName('min')[1].disabled = false;
            break;
        case 50:
            progressBar1.min = 50;
            progressBar2.min = 50;
            progressbar3.min = 50;
            doc.getElementsByClassName('min')[1].disabled = true;
            doc.getElementsByClassName('min')[0].disabled = false;
        case 100:
            progressBar1.max = 100;
            progressBar2.max = 100;
            progressbar3.max = 100;
            doc.getElementsByClassName('max')[0].disabled = true;
            doc.getElementsByClassName('max')[1].disabled = false;
            break;
        case 200:
            progressBar1.max = 200;
            progressBar2.max = 200;
            progressbar3.max = 200;
            doc.getElementsByClassName('max')[1].disabled = true;
            doc.getElementsByClassName('max')[0].disabled = false;
            break;
        default:
            break;
    }
}