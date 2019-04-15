import * as React from 'react';
 


import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxMenu from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmenu';

class App extends React.PureComponent<{}> {

    private myMenu = React.createRef<JqxMenu>();
    private myCheckBox = React.createRef<JqxCheckBox>();

    constructor(props: {}) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    public componentDidMount() {
        this.myMenu.current!.minimize();
    }

    public render() {
        return (
            <div>
                <JqxMenu theme={'material-purple'} ref={this.myMenu}
                    width={'100%'} height={32} autoSizeMainItems={true}>
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li>
                            <a href="#Solutions">Solutions</a>
                            <ul style={{ width: '250px' }}>
                                <li><a href="#Education">Education</a></li>
                                <li><a href="#Financial">Financial services</a></li>
                                <li><a href="#Government">Government</a></li>
                                <li><a href="#Manufacturing">Manufacturing</a></li>
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
                            <a href="#Products">Products</a>
                            <ul>
                                <li><a href="#PCProducts">PC products</a></li>
                                <li><a href="#MobileProducts">Mobile products</a></li>
                                <li><a href="#AllProducts">All products</a></li>
                            </ul>
                        </li>
                    </ul>
                </JqxMenu>
                <br />
                <br />
                <JqxCheckBox theme={'material-purple'} ref={this.myCheckBox} onChange={this.onChange} checked={true} hasThreeStates={false}>Minimized</JqxCheckBox>
            </div>
        );
    }

    private onChange(event: any): void {
        if (this.myCheckBox.current!.getOptions('checked')) {
            this.myMenu.current!.minimize();
        }
        else {
            this.myMenu.current!.restore();
        }
    };
}

export default App;