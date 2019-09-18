window.onload = function() {
	const app = new Smart.App(
		{
			id: "app1",
			template: {
				"#textBox1": {
					properties: {
						value: "",
						placeholder: "First Name"
					},
					bind: {
						value: "firstName"
					}
				},
				"#textBox2": {
					properties: {
						value: "",
						placeholder: "Last Name"
					},
					bind: {
						value: "lastName"
					}
				},
				"#listBox": {
					properties: {
						dataSource: [],
						selectedIndexes: [0]
					},
					listeners: {
						change: "selectItem"
					},
					bind: {
						dataSource: "items",
						selectedIndexes: "selectedIndexes"
					}
				},
				"#dropDownList":{
					properties: {
						dataSource: [],
						selectedIndexes: [0]
					},
					listeners: {
						change: "selectItem"
					},
					bind: {
						dataSource: "items",
						selectedIndexes: "selectedIndexes"
					}
				},	
				"#button":{
					properties: {
						value: "submit",
						innerHTML: "Submit"
					},
					listeners: {
						click: "addItem"
					},
					bind: {
						innerHTML: "buttonText"
					}
				}
			},	
			data: {
				firstName: "John",
				lastName: "Peterson",
				items: ["George Brown", "Anthony Black", "Mike Jordan"],
				selectedIndexes: [1],
				addItem: function() {
					this.items.push(this.firstName + " " + this.lastName);
					this.firstName = this.lastName = "";
				},
				selectItem: function(event){
					if (event.detail.selected) {
						const selectedItem = this.items[this.selectedIndexes[0]];
						const names = selectedItem.split(" ");
					
						this.firstName = names[0];
						this.lastName = names[1];
					}
				},
				buttonText: "Add Item",
			}
		}
	)
			
	app.notify(function(changes) {
		console.log('data is updated');
	});
}