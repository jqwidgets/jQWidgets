window.onload = function() {
	const app = new Smart.App(
		{
			data: {
				counter: 0,
				click: function(event) {
					this.counter++;
				}
			}
		}
	)	
}