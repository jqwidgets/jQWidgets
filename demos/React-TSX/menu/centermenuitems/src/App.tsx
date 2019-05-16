import * as React from 'react';
 


import JqxMenu from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmenu';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public componentDidMount() {
        this.centerItems();
        window.addEventListener('resize', this.centerItems);
    }

    public render() {
        return (
            <div>
                <JqxMenu theme={'material-purple'} width={'90%'} height={30}>
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li>
                            Solutions
                            <ul style={{ width: '250px' }}>
                                <li><a href="#Education">Education</a></li>
                                <li><a href="#Financial">Financial services</a></li>
                                <li><a href="#Government">Government</a></li>
                                <li ><a href="#Manufacturing">Manufacturing</a></li>
                                {/* 
                                 // @ts-ignore */}
                                <li type='separator' />
                                <li>
                                    Software Solutions
                                    <ul style={{ width: '220px' }}>
                                        <li><a href="#ConsumerPhoto">Consumer photo and video</a></li>
                                        <li><a href="#Mobile">Mobile</a></li>
                                        <li><a href="#RIA">Rich Internet applications</a></li>
                                        <li><a href="#TechnicalCommunication">Technical communication</a></li>
                                        <li><a href="#Training">Training and eLearning</a></li>
                                        <li><a href="#WebConferencing">Web conferencing</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">All industries and solutions</a></li>
                            </ul>
                        </li>
                        <li>
                            Products
                            <ul>
                                <li><a href="#PCProducts">PC products</a></li>
                                <li><a href="#MobileProducts">Mobile products</a></li>
                                <li><a href="#AllProducts">All products</a></li>
                            </ul>
                        </li>
                        <li>
                            Support
                            <ul style={{ width: '200px' }}>
                                <li><a href="#SupportHome">Support home</a></li>
                                <li><a href="#CustomerService">Customer Service</a></li>
                                <li><a href="#KB">Knowledge base</a></li>
                                <li><a href="#Books">Books</a></li>
                                <li><a href="#Training">Training and certification</a></li>
                                <li><a href="#SupportPrograms">Support programs</a></li>
                                <li><a href="#Forums">Forums</a></li>
                                <li><a href="#Documentation">Documentation</a></li>
                                <li><a href="#Updates">Updates</a></li>
                            </ul>
                        </li>
                        <li>
                            Communities
                            <ul style={{ width: '200px' }}>
                                <li><a href="#Designers">Designers</a></li>
                                <li><a href="#Developers">Developers</a></li>
                                <li><a href="#Educators">Educators and students</a></li>
                                <li><a href="#Partners">Partners</a></li>
                                {/* 
                                 // @ts-ignore */}
                                <li type='separator' />
                                <li>By resource</li>
                            </ul>
                        </li>
                        <li>
                            Company
                        <ul style={{ width: '180px' }}>
                                <li><a href="#About">About Us</a></li>
                                <li><a href="#Press">Press</a></li>
                                <li><a href="#Investor">Investor Relations</a></li>
                                <li><a href="#CorporateAffairs">Corporate Affairs</a></li>
                                <li><a href="#Careers">Careers</a></li>
                                <li><a href="#Showcase">Showcase</a></li>
                                <li><a href="#Events">Events</a></li>
                                <li><a href="#ContactUs">Contact Us</a></li>
                                <li><a href="#Become an affiliate">Become an affiliate</a></li>
                            </ul>
                        </li>
                    </ul>
                </JqxMenu>
            </div>
        );
    }

    private centerItems(): void {
        const firstItem = document.querySelector('.jqx-menu li') as HTMLLIElement;
        let width = 0;
        const borderOffset = 2;
        const allLiElements = document.querySelectorAll('.jqx-menu li');


        Array.prototype.forEach.call(allLiElements, (liElement: HTMLLIElement) => {
            width += liElement.offsetWidth + borderOffset;
        });

        const menuUl = document.querySelector('.jqx-menu ul') as HTMLUListElement;
        const menuWidth = menuUl.offsetWidth;
        const calculatedOffset = (menuWidth / 2) - (width / 2);
        firstItem.style.margin = '0 0 0 ' + (calculatedOffset).toString() + 'px'; 
    }
}

export default App;