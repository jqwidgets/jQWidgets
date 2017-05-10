import React from 'react';
import ReactDOM from 'react-dom';

import JqxMenu from '../../../jqwidgets-react/react_jqxmenu.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.animation.on('change', (event) => {
            let value = event.args.checked;
            // enable or disable the menu's animation
            if (!value) {
                this.refs.myMenu.setOptions({ animationShowDuration: 0, animationHideDuration: 0, animationShowDelay: 0 });
            }
            else {
                this.refs.myMenu.setOptions({ animationShowDuration: 200, animationHideDuration: 200, animationShowDelay: 200 });
            }
        });

        this.refs.disabled.on('change', (event) => {
            let value = event.args.checked;
            // enable or disable the menu
            if (!value) {
                this.refs.myMenu.disabled(false);
            }
            else {
                this.refs.myMenu.disabled(true);
            }
        });

        this.refs.hover.on('change', (event) => {
            let value = event.args.checked;
            // enable or disable the menu's hover effect
            if (!value) {
                this.refs.myMenu.enableHover(false);
            }
            else {
                this.refs.myMenu.enableHover(true);
            }
        });

        this.refs.open.on('change', (event) => {
            let value = event.args.checked;
            // enable or disable the opening of the top level menu items when the user hovers them.
            if (!value) {
                this.refs.myMenu.autoOpen(false);
            }
            else {
                this.refs.myMenu.autoOpen(true);
            }
        });

        this.refs.topLevelArrows.on('change', (event) => {
            let value = event.args.checked;
            // enable or disable the top level arrows.
            if (!value) {
                this.refs.myMenu.showTopLevelArrows(false);
            }
            else {
                this.refs.myMenu.showTopLevelArrows(true);
            }
        });
    }
    render () {
      let styleSpace = {
          marginTop: '20px',
          marginLeft: '60px',
          fontSize: '14px',
          fontFamily: 'Verdana Arial',
          float: 'left'
      };

      let menuInnerHtml =
          '<ul>' +
              '<li><a href="#Home">Home</a></li>' +
              '<li>Solutions' +
                  '<ul style="width: 250px;">' +
                      '<li><a href="#Education">Education</a></li>' +
                      '<li><a href="#Financial">Financial services</a></li>' +
                      '<li><a href="#Government">Government</a></li>' +
                      '<li><a href="#Manufacturing">Manufacturing</a></li>' +
                      '<li type="separator"></li>' +
                      '<li>Software Solutions' +
                          '<ul style="width: 220px;">' +
                              '<li><a href="#ConsumerPhoto">Consumer photo and video</a></li>' +
                              '<li><a href="#Mobile">Mobile</a></li>' +
                              '<li><a href="#RIA">Rich Internet applications</a></li>' +
                              '<li><a href="#TechnicalCommunication">Technical communication</a></li>' +
                              '<li><a href="#Training">Training and eLearning</a></li>' +
                              '<li><a href="#WebConferencing">Web conferencing</a></li>' +
                          '</ul>' +
                      '</li>' +
                      '<li><a href="#">All industries and solutions</a></li>' +
                  '</ul>' +
              '</li>' +
              '<li>Products' +
                  '<ul>' +
                      '<li><a href="#PCProducts">PC products</a></li>' +
                      '<li><a href="#MobileProducts">Mobile products</a></li>' +
                      '<li><a href="#AllProducts">All products</a></li>' +
                  '</ul>' +
              '</li>' +
              '<li>Support' +
                  '<ul style="width: 200px;">' +
                      '<li><a href="#SupportHome">Support home</a></li>' +
                      '<li><a href="#CustomerService">Customer Service</a></li>' +
                      '<li><a href="#KB">Knowledge base</a></li>' +
                      '<li><a href="#Books">Books</a></li>' +
                      '<li><a href="#Training">Training and certification</a></li>' +
                      '<li><a href="#SupportPrograms">Support programs</a></li>' +
                      '<li><a href="#Forums">Forums</a></li>' +
                      '<li><a href="#Documentation">Documentation</a></li>' +
                      '<li><a href="#Updates">Updates</a></li>' +
                  '</ul>' +
              '</li>' +
              '<li>Communities' +
                  '<ul style="width: 200px;">' +
                      '<li><a href="#Designers">Designers</a></li>' +
                      '<li><a href="#Developers">Developers</a></li>' +
                      '<li><a href="#Educators">Educators and students</a></li>' +
                      '<li><a href="#Partners">Partners</a></li>' +
                      '<li type="separator"></li>' +
                      '<li>By resource' +
                          '<ul>' +
                              '<li><a href="#Labs">Labs</a></li>' +
                              '<li><a href="#TV">TV</a></li>' +
                              '<li><a href="#Forums">Forums</a></li>' +
                              '<li><a href="#Exchange">Exchange</a></li>' +
                              '<li><a href="#Blogs">Blogs</a></li>' +
                              '<li><a href="#Experience Design">Experience Design</a></li>' +
                          '</ul>' +
                      '</li>' +
                  '</ul>' +
              '</li>' +
              '<li>Company' +
                  '<ul style="width: 180px;">' +
                      '<li><a href="#About">About Us</a></li>' +
                      '<li><a href="#Press">Press</a></li>' +
                      '<li><a href="#Investor">Investor Relations</a></li>' +
                      '<li><a href="#CorporateAffairs">Corporate Affairs</a></li>' +
                      '<li><a href="#Careers">Careers</a></li>' +
                      '<li><a href="#Showcase">Showcase</a></li>' +
                      '<li><a href="#Events">Events</a></li>' +
                      '<li><a href="#ContactUs">Contact Us</a></li>' +
                      '<li><a href="#Become an affiliate">Become an affiliate</a></li>' +
                  '</ul>' +
              '</li>' +
          '</ul>';
        return (
            <div style={{ height: '300px' }}>
                <JqxMenu ref='myMenu' template={menuInnerHtml} width={670} height={30}/>
                <br />
                <div style={{ marginLeft: '60px', marginTop: '120px' }}>
                    <div style={{ fontSize: '16px', fontFamily: 'Verdana Arial' }}>
                        Settings
                    </div>
                    <div style={{ marginTop: '20px', fontSize: '14px', fontFamily: 'Verdana Arial', float: 'left' }}>
                        <JqxCheckBox ref='animation' value='Enable Animation'
                          width={150} height={20} checked={true}
                        />
                        <JqxCheckBox ref='disabled' value='Disabled'
                          width={150} height={20}
                        />
                    </div>
                    <div style={ styleSpace }>
                        <JqxCheckBox ref='hover' value='Enable Hover'
                          width={150} height={20} checked={true}
                        />
                        <JqxCheckBox ref='open' value='Auto Open'
                          width={150} height={20} checked={true}
                        />
                    </div>
                    <div style={ styleSpace }>
                        <JqxCheckBox ref='topLevelArrows' value='Show Top-Level Arrows'
                          width={200} height={20}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
