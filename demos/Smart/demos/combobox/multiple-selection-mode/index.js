window.onload = function () {
    document.querySelector('smart-combo-box').dataSource = [
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
           value: 13,
           group: "A"
       },
       {
           label: "Albert",
           value: 34,
           group: "A"
       },
       {
           label: "Boyko",
           value: 32,
           group: "A"
       },
       {
           label: "Dimitar",
           value: 113,
           group: "B"
       },
       {
           label: "George",
           value: 31,
           group: "C"
       }
    ];

    document.querySelector('smart-combo-box').addEventListener('change', function (event) {
        console.log(event.detail);
    });
}