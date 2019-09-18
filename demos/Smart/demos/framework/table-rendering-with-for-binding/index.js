window.onload = function() {
	const app = new Smart.App(
		{
			data: {
				cellClick: function(event) {
					alert(event.target.innerHTML);
				},
				columns: [
					'ID', 
					'First Name', 
					'Last Name'
				],
				rows: [
					{ id: 1, firstName: "Peter", lastName: "Johnes"},
					{ id: 2, firstName: "Michael", lastName: "Roberts"},
					{ id: 3, firstName: "Nancy", lastName: "Davolio"},
					{ id: 4, firstName: "Thomas", lastName: "Purdy"},
					{ id: 5, firstName: "John", lastName: "Wilkinson"}							
				]
			}
		}
	)		
}