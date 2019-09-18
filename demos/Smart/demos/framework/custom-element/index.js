Smart('smart-greeting', class SmartGreeting extends Smart.BaseElement {  
  // Declare properties
  static get properties() {  
    return {
      'name': 
        {
           value: 'World!',
           type: 'string'
        }
    };
  }
 
  // Define a template
  template() {
     return '<p>Hello, <span>{{name}}</span></p>';
  }
});