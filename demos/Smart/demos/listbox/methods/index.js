window.onload = function () {
    const list = document.getElementById('list'),
	data = [
        {
            label: "Andrew",
            value: 1,
            group: "A"
        },
        {
            label: "Natalia",
            value: 5,
            group: "B"
        },
        {
            label: "Michael",
            value: 4,
            group: "B"
        },
        {
            label: "Angel",
            value: 2,
            group: "A"
        },
        {
            label: "Hristo",
            value: 6,
            group: "C"
        },
       {
           label: "Peter",
           value: 3,
           group: "A"
       },
       {
           label: "Albert",
           value: 2,
           group: "A"
       },
       {
           label: "Boyko",
           value: 8,
           group: "A"
       },
       {
           label: "Dimitar",
           value: 2,
           group: "B"
       },
       {
           label: "George",
           value: 10,
           group: "C"
       }
    ];

    list.dataSource = data;


    document.getElementById("unsort").onclick = function () {
        list.sorted = false;
    }
    document.getElementById("sort").onclick = function () {
        list.sorted = true;
    }
    document.getElementById("ungroup").onclick = function () {
        list.grouped = false;
    }
    document.getElementById("group").onclick = function () {
        list.grouped = true;
    }
    document.getElementById("default").onclick = function () {
        list.selectionMode = 'one';
    }
    document.getElementById("check").onclick = function () {
        list.selectionMode = 'checkBox';
    }
    document.getElementById("radio").onclick = function () {
        list.selectionMode = 'radioButton';
    }
    document.getElementById("insert").onclick = function () {
        list.insert(0, "New Item");
    }
    document.getElementById("update").onclick = function () {
        list.update(0, "Updated Item");
    }
    document.getElementById("remove").onclick = function () {
        list.remove(0);
    }
    document.getElementById("disabled").onclick = function () {
        list.disabled = !list.disabled;
    }
    document.getElementById("clearItems").onclick = function () {
        list.clearItems();
    }
}