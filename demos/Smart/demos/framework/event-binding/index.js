window.onload = function() {
	const app = new Smart.App(
		{
			data: {
				message: "Hello World",
				buttonText: "Submit",
				submit: function(event) {
					alert("Submitting: " + this.message);
				}
			}
		}
	)				
}