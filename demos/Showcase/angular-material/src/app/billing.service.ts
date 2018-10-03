import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  constructor() { }

  private countries = [
    { value: "AF", label: "Afghanistan" },
    { value: "AL", label: "Albania" },
    { value: "DZ", label: "Algeria" },
    { value: "AS", label: "American Samoa" },
    { value: "AD", label: "Andorra" },
    { value: "AO", label: "Angola" },
    { value: "AI", label: "Anguilla" },
    { value: "AQ", label: "Antarctica" },
    { value: "AG", label: "Antigua and Barbuda" },
    { value: "AR", label: "Argentina" },
    { value: "AM", label: "Armenia" },
    { value: "AW", label: "Aruba" },
    { value: "AU", label: "Australia" },
    { value: "AT", label: "Austria" },
    { value: "AZ", label: "Azerbaijan" },
    { value: "BS", label: "Bahamas" },
    { value: "BH", label: "Bahrain" },
    { value: "BD", label: "Bangladesh" },
    { value: "BB", label: "Barbados" },
    { value: "BY", label: "Belarus" },
    { value: "BE", label: "Belgium" },
    { value: "BZ", label: "Belize" },
    { value: "BJ", label: "Benin" },
    { value: "BM", label: "Bermuda" },
    { value: "BT", label: "Bhutan" },
    { value: "BO", label: "Bolivia" },
    { value: "BA", label: "Bosnia and Herzegovina" },
    { value: "BW", label: "Botswana" },
    { value: "BV", label: "Bouvet Island" },
    { value: "BR", label: "Brazil" },
    { value: "BN", label: "Brunei" },
    { value: "BG", label: "Bulgaria" },
    { value: "BF", label: "Burkina Faso" },
    { value: "BI", label: "Burundi" },
    { value: "KH", label: "Cambodia" },
    { value: "CM", label: "Cameroon" },
    { value: "CA", label: "Canada" },
    { value: "CV", label: "Cape Verde" },
    { value: "KY", label: "Cayman Islands" },
    { value: "CF", label: "Central African Republic" },
    { value: "TD", label: "Chad" },
    { value: "CL", label: "Chile" },
    { value: "CN", label: "China" },
    { value: "CX", label: "Christmas Island" },
    { value: "CC", label: "Cocos (Keeling) Islands" },
    { value: "CO", label: "Columbia" },
    { value: "KM", label: "Comoros" },
    { value: "CG", label: "Congo" },
    { value: "CK", label: "Cook Islands" },
    { value: "CR", label: "Costa Rica" },
    { value: "CI", label: "Cote D'Ivorie" },
    { value: "HR", label: "Croatia (Hrvatska)" },
    { value: "CU", label: "Cuba" },
    { value: "CY", label: "Cyprus" },
    { value: "CZ", label: "Czech Republic" },
    { value: "DK", label: "Denmark" },
    { value: "DJ", label: "Djibouti" },
    { value: "DM", label: "Dominica" },
    { value: "DO", label: "Dominican Republic" },
    { value: "TP", label: "East Timor" },
    { value: "EC", label: "Ecuador" },
    { value: "EG", label: "Egypt" },
    { value: "SV", label: "El Salvador" },
    { value: "GQ", label: "Equatorial Guinea" },
    { value: "ER", label: "Eritrea" },
    { value: "EE", label: "Estonia" },
    { value: "ET", label: "Ethiopia" },
    { value: "FO", label: "Faroe Islands" },
    { value: "FJ", label: "Fiji" },
    { value: "FI", label: "Finland" },
    { value: "FR", label: "France" },
    { value: "GF", label: "French Guinea" },
    { value: "PF", label: "French Polynesia" },
    { value: "GA", label: "Gabon" },
    { value: "GM", label: "Gambia" },
    { value: "GE", label: "Georgia" },
    { value: "DE", label: "Germany" },
    { value: "GH", label: "Ghana" },
    { value: "GI", label: "Gibraltar" },
    { value: "GR", label: "Greece" },
    { value: "GL", label: "Greenland" },
    { value: "GD", label: "Grenada" },
    { value: "GP", label: "Guadeloupe" },
    { value: "GU", label: "Guam" },
    { value: "GT", label: "Guatemala" },
    { value: "GN", label: "Guinea" },
    { value: "GW", label: "Guinea-Bissau" },
    { value: "GY", label: "Guyana" },
    { value: "HT", label: "Haiti" },
    { value: "HN", label: "Honduras" },
    { value: "HK", label: "Hong Kong" },
    { value: "HU", label: "Hungary" },
    { value: "IS", label: "Iceland" },
    { value: "IN", label: "India" },
    { value: "ID", label: "Indonesia" },
    { value: "IR", label: "Iran" },
    { value: "IQ", label: "Iraq" },
    { value: "IE", label: "Ireland" },
    { value: "IL", label: "Israel" },
    { value: "IT", label: "Italy" },
    { value: "JM", label: "Jamaica" },
    { value: "JP", label: "Japan" },
    { value: "JO", label: "Jordan" },
    { value: "KZ", label: "Kazakhstan" },
    { value: "KE", label: "Kenya" },
    { value: "KI", label: "Kiribati" },
    { value: "KW", label: "Kuwait" },
    { value: "KG", label: "Kyrgyzstan" },
    { value: "LA", label: "Laos" },
    { value: "LV", label: "Latvia" },
    { value: "LB", label: "Lebanon" },
    { value: "LS", label: "Lesotho" },
    { value: "LR", label: "Liberia" },
    { value: "LY", label: "Libya" },
    { value: "LI", label: "Liechtenstein" },
    { value: "LT", label: "Lithuania" },
    { value: "LU", label: "Luxembourg" },
    { value: "MO", label: "Macau" },
    { value: "MK", label: "Macedonia" },
    { value: "MG", label: "Madagascar" },
    { value: "MW", label: "Malawi" },
    { value: "MY", label: "Malaysia" },
    { value: "MV", label: "Maldives" },
    { value: "ML", label: "Mali" },
    { value: "MT", label: "Malta" },
    { value: "MH", label: "Marshall Islands" },
    { value: "MQ", label: "Martinique" },
    { value: "MR", label: "Mauritania" },
    { value: "MU", label: "Mauritius" },
    { value: "YT", label: "Mayotte" },
    { value: "MX", label: "Mexico" },
    { value: "FM", label: "Micronesia" },
    { value: "MD", label: "Moldova" },
    { value: "MC", label: "Monaco" },
    { value: "MN", label: "Mongolia" },
    { value: "MS", label: "Montserrat" },
    { value: "MA", label: "Morocco" },
    { value: "MZ", label: "Mozambique" },
    { value: "MM", label: "Myanmar (Burma)" },
    { value: "NA", label: "Namibia" },
    { value: "NR", label: "Nauru" },
    { value: "NP", label: "Nepal" },
    { value: "NL", label: "Netherlands" },
    { value: "AN", label: "Netherlands Antilles" },
    { value: "NC", label: "New Caledonia" },
    { value: "NZ", label: "New Zealand" },
    { value: "NI", label: "Nicaragua" },
    { value: "NE", label: "Niger" },
    { value: "NG", label: "Nigeria" },
    { value: "NU", label: "Niue" },
    { value: "NF", label: "Norfolk Island" },
    { value: "KP", label: "North Korea" },
    { value: "NO", label: "Norway" },
    { value: "OM", label: "Oman" },
    { value: "PK", label: "Pakistan" },
    { value: "PW", label: "Palau" },
    { value: "PA", label: "Panama" },
    { value: "PG", label: "Papua New Guinea" },
    { value: "PY", label: "Paraguay" },
    { value: "PE", label: "Peru" },
    { value: "PH", label: "Philippines" },
    { value: "PN", label: "Pitcairn" },
    { value: "PL", label: "Poland" },
    { value: "PT", label: "Portugal" },
    { value: "PR", label: "Puerto Rico" },
    { value: "QA", label: "Qatar" },
    { value: "RE", label: "Reunion" },
    { value: "RO", label: "Romania" },
    { value: "RU", label: "Russia" },
    { value: "RW", label: "Rwanda" },
    { value: "SH", label: "Saint Helena" },
    { value: "KN", label: "Saint Kitts and Nevis" },
    { value: "LC", label: "Saint Lucia" },
    { value: "SM", label: "San Marino" },
    { value: "SA", label: "Saudi Arabia" },
    { value: "SN", label: "Senegal" },
    { value: "SC", label: "Seychelles" },
    { value: "SL", label: "Sierra Leone" },
    { value: "SG", label: "Singapore" },
    { value: "SK", label: "Slovak Republic" },
    { value: "SI", label: "Slovenia" },
    { value: "SB", label: "Solomon Islands" },
    { value: "SO", label: "Somalia" },
    { value: "ZA", label: "South Africa" },
    { value: "GS", label: "South Georgia" },
    { value: "KR", label: "South Korea" },
    { value: "ES", label: "Spain" },
    { value: "LK", label: "Sri Lanka" },
    { value: "SD", label: "Sudan" },
    { value: "SR", label: "Suriname" },
    { value: "SZ", label: "Swaziland" },
    { value: "SE", label: "Sweden" },
    { value: "CH", label: "Switzerland" },
    { value: "SY", label: "Syria" },
    { value: "TW", label: "Taiwan" },
    { value: "TJ", label: "Tajikistan" },
    { value: "TZ", label: "Tanzania" },
    { value: "TH", label: "Thailand" },
    { value: "TG", label: "Togo" },
    { value: "TK", label: "Tokelau" },
    { value: "TO", label: "Tonga" },
    { value: "TT", label: "Trinidad and Tobago" },
    { value: "TN", label: "Tunisia" },
    { value: "TR", label: "Turkey" },
    { value: "TM", label: "Turkmenistan" },
    { value: "TC", label: "Turks and Caicos Islands" },
    { value: "TV", label: "Tuvalu" },
    { value: "UG", label: "Uganda" },
    { value: "UA", label: "Ukraine" },
    { value: "AE", label: "United Arab Emirates" },
    { value: "UK", label: "United Kingdom" },
    { value: "US", label: "United States" },
    { value: "UY", label: "Uruguay" },
    { value: "UZ", label: "Uzbekistan" },
    { value: "VU", label: "Vanuatu" },
    { value: "VA", label: "Vatican City (Holy See)" },
    { value: "VE", label: "Venezuela" },
    { value: "VN", label: "Vietnam" },
    { value: "VG", label: "Virgin Islands (British)" },
    { value: "VI", label: "Virgin Islands (US)" },
    { value: "WF", label: "Wallis and Futuna Islands" },
    { value: "EH", label: "Western Sahara" },
    { value: "WS", label: "Western Samoa" },
    { value: "YE", label: "Yemen" },
    { value: "YU", label: "Yugoslavia" },
    { value: "ZM", label: "Zambia" },
    { value: "ZW", label: "Zimbabwe" }
  ];

  private months = [
    { value: "01", label: "01 - January" },
    { value: "02", label: "02 - February" },
    { value: "03", label: "03 - March" },
    { value: "04", label: "04 - April" },
    { value: "05", label: "05 - May" },
    { value: "06", label: "06 - June" },
    { value: "07", label: "07 - July" },
    { value: "08", label: "08 - August" },
    { value: "09", label: "09 - September" },
    { value: "10", label: "10 - October" },
    { value: "11", label: "11 - November" },
    { value: "12", label: "12 - December" }
  ];

  private years = [
    { value: "2014", label: "2014" },
    { value: "2015", label: "2015" },
    { value: "2016", label: "2016" },
    { value: "2017", label: "2017" },
    { value: "2018", label: "2018" },
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" }
  ];

  private firstTabFormContent = `
    <div class="form-horizontal">
        <h2>Enter your Billing Information</h2>
    </div>

    <div class="form-horizontal col-sm-6">
        <div>
            <label class="col-sm-4 control-label" for="firstname">First Name</label>
            <div class="col-sm-8">
                <input placeholder="First Name" id="firstName" name="firstName" value="" />
            </div>
        </div>
        <div>
            <label class="col-sm-4 control-label" for="middleInitial">Middle Name</label>
            <div class="col-sm-8">
                <input placeholder="MI" id="middleInitial" name="middleInitial" value="" />
            </div>
        </div>
        <div>
            <label class="col-sm-4 control-label" for="lastName">Last Name</label>
            <div class="col-sm-8">
                <input placeholder="Last Name" id="lastName" name="lastName" value="" />
            </div>
        </div>
        <div>
            <label class="col-sm-4 control-label" for="birthDate">Birth Date</label>
            <div class="col-sm-8">
                <div style="margin-top: 5px;" id="birthDate" name="birthDate"></div>
            </div>
        </div>
    </div>
    
    <div class="form-horizontal col-sm-6">
        <div>
            <label class="col-sm-4 control-label" for="billingAddress">Address</label>
            <div class="col-sm-8">
                <input name="billingAddress" id="billingAddress" placeholder="Street Address" />
            </div>
        </div>
        <div>
            <label class="col-sm-4 control-label" for="billingCity">City</label>
            <div class="col-sm-8">
                <input name="billingCity" id="billingCity" placeholder="City" maxlength="15" />
            </div>
        </div>
        <div>
            <label class="col-sm-4 control-label" for="billingZipCode">Postal Code</label>
            <div class="col-sm-8">
                <input name="billingZipCode" id="billingZipCode" placeholder="Postal / Zip Code" maxlength="5" />
            </div>
        </div>
        <div>
            <label class="col-sm-4 control-label" for="billingCountries">Country</label>
            <div class="col-sm-8">
                <div style="margin-top: 5px;" id="billingCountries"></div>
            </div>
        </div>
    </div>
    <div class="form-horizontal col-sm-6">
        <div>
            <label class="col-sm-4 control-label" for="cardNumber">Card Number</label>
            <div class="col-sm-8">
                <input placeholder="Card Number" id="cardNumber" name="cardNumber" maxlength="16" />
            </div>
        </div>
        <div>
            <label class="col-sm-4 control-label" for="cardType">Card Type</label>
            <div class="col-sm-8">
                <div style="margin-top: 5px;" id="cardType"></div>
            </div>
        </div>                           
        <div>
            <label class="col-sm-4 control-label" for="expirationDate">Expiration Date</label>
            <div class="col-sm-8">
                <div style="margin-top: 5px;" name="expirationDate" id="expirationDate"></div>
            </div>
        </div>
        <div>
            <label class="col-sm-4 control-label" for="expirationYear">Expiration Year</label>
            <div class="col-sm-8">
                <div style="margin-top: 5px;" name="expirationYear" id="expirationYear"></div>
            </div>
        </div>
        <div>
            <label class="col-sm-4 control-label" for="securityCode">Security Code</label>
            <div class="col-sm-8">
                <input placeholder="Security Code" id="securityCode" name="securityCode" maxlength="4" />
            </div>
        </div>
        <div>
            <div class="col-sm-4">
            </div>
            <div class="col-sm-6">
                <div style="margin-top: 15px;" id="acceptTerms" name="acceptTerms">I agree to the Terms and Conditions</div>
            </div>
            <div class="col-sm-2">
            </div>
        </div>
        <div>
            <div class="col-sm-4">
            </div>
            <div class="col-sm-4">
                <button style="margin-top: 15px;" id="sendButton" type="button">Checkout</button>
            </div>
        </div>
    </div>`;

  /**
     * 
     * @param selectorID ID name of the jqxValidator container (<form/>)
     * @param theme theme for the jqxDataTable (Default theme)
     */
  public createBillingForm(selectorID: string, theme?: string) {
    //let theme = 'material';
    theme = theme || 'material';

    let firstTab = document.getElementById(selectorID);

    let form = document.createElement("form");
    form.id = 'form';
    form.className = 'navbar-form';
    form.innerHTML = this.firstTabFormContent;
    firstTab.appendChild(form);

    let validator = jqwidgets.createInstance('#form', 'jqxValidator', {
      hintType: 'label',
      rules: [
        { input: '#firstName', message: 'First Name is required!', action: 'keyup, blur', rule: 'required' },
        { input: '#lastName', message: 'Last Name is required!', action: 'keyup, blur', rule: 'required' },
        { input: '#billingAddress', message: 'Billing Address is required!', action: 'keyup, blur', rule: 'required' },
        { input: '#billingCity', message: 'Billing City is required!', action: 'keyup, blur', rule: 'required' },
        { input: '#billingZipCode', message: 'Zip Code is required!', action: 'keyup, blur', rule: 'required' },
        { input: '#cardNumber', message: 'Card Number is required!', action: 'keyup, blur', rule: 'required' },
        { input: '#securityCode', message: 'Security Code is required!', action: 'keyup, blur', rule: 'required' },
        { input: '#acceptTerms', message: 'You need to accept the terms!', action: 'keyup, blur', rule: 'required' }
      ]
    });

    // Start initialization of the fields
    // Create Countries ComboBox.
    let billingCountries = jqwidgets.createInstance('#billingCountries', 'jqxComboBox', {
      theme: theme,
      enableBrowserBoundsDetection: true,
      promptText: "Select a Country:",
      source: this.countries,
      height: 22, width: '100%'
    });

    // Create Accept Terms Checkbox.
    let acceptTerms = jqwidgets.createInstance('#acceptTerms', 'jqxCheckBox', { theme: theme, width: '100%' });

    // Create the Birth Date Calendar.
    let birthDate = jqwidgets.createInstance('#birthDate', 'jqxDateTimeInput', { theme: theme, enableBrowserBoundsDetection: true, width: '100%', height: 24 });

    // Create the Cart Type ComboBox.
    let cardTypes = [{ value: "visa", label: "Visa" }, { value: "masterCard", label: "MasterCard" }, { value: "americanExpress", label: "American Express" }, { value: "discover", label: "Discover" }];
    let cardType = jqwidgets.createInstance('#cardType', 'jqxComboBox', {
      theme: theme,
      enableBrowserBoundsDetection: true,
      selectedIndex: 0,
      autoDropDownHeight: true,
      promptText: "Card Type:",
      source: cardTypes,
      width: '100%',
      height: 22
    });

    // Create Expiration Date & Year ComboBoxes.                
    let expirationDate = jqwidgets.createInstance('#expirationDate', 'jqxComboBox', { theme: theme, enableBrowserBoundsDetection: true, source: this.months, selectedIndex: 0, height: 22, width: '100%' });
    let expirationYear = jqwidgets.createInstance('#expirationYear', 'jqxComboBox', { theme: theme, enableBrowserBoundsDetection: true, source: this.years, autoDropDownHeight: true, selectedIndex: 0, height: 22, width: '100%' });

    let inputOptions = { theme: theme, height: 22, width: '100%' };
    let sendButton = jqwidgets.createInstance('#sendButton', 'jqxButton', { theme: theme });
    let firstName = jqwidgets.createInstance('#firstName', 'jqxInput', inputOptions);
    let middleInitial = jqwidgets.createInstance('#middleInitial', 'jqxInput', inputOptions);
    let lastName = jqwidgets.createInstance('#lastName', 'jqxInput', inputOptions);
    let billingAddress = jqwidgets.createInstance('#billingAddress', 'jqxInput', inputOptions);
    let billingCity = jqwidgets.createInstance('#billingCity', 'jqxInput', inputOptions);
    let billingZipCode = jqwidgets.createInstance('#billingZipCode', 'jqxInput', inputOptions);
    let cardNumber = jqwidgets.createInstance('#cardNumber', 'jqxInput', inputOptions);
    let securityCode = jqwidgets.createInstance('#securityCode', 'jqxInput', inputOptions);

    // Validate form
    sendButton.addEventHandler('click', () => {
      validator.validate();
    });
  }
}
