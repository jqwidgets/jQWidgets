window.onload = function () {
    const calendar = document.querySelector('smart-calendar');

    document.getElementById("clearSelection").onclick = function () {
        calendar.clearSelection();
    }
    document.getElementById("today").onclick = function () {
        calendar.today();
    }
    document.getElementById("navForward").onclick = function () {
        calendar.navigate(1);
    }
    document.getElementById("navBackward").onclick = function () {
        calendar.navigate(-1);
    }
    document.getElementById("selectDate").onclick = function () {
        calendar.select(document.getElementById('dateInput').value);
    }
    document.getElementById("disabled").onclick = function () {
        calendar.disabled = !calendar.disabled;
    }
}