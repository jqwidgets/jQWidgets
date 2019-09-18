window.onload = function() {
	const app = new Smart.App(
		{
			data: {
				itemClick: function(event) {
					alert(event.target.innerHTML);
				},
				items: [
					{
						label: "Employee 1",
						details: {
							firstName: "John",
							lastName: "Brown",
							jobPosition: "Support Officer"
						}	
					},
					{
						label: "Employee 2",
						details: {
							firstName: "Michael",
							lastName: "Roberts",
							jobPosition: "Support Officer"
						}					
					},
					{
						label: "Employee 3",
						details: {
							firstName: "Nancy",
							lastName: "Smith",
							jobPosition: "Sales Representative"
						}
					}							
				]
			}
		}
	)			
}