import * as React from 'react';
 


import './App.css';

import JqxButton, { IButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';

class App extends React.PureComponent<{}, IButtonProps> {
    private textImageButton = React.createRef<JqxButton>();
    private htmlButton = React.createRef<JqxButton>();
    private events = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props); 
        this.buttonClicked = this.buttonClicked.bind(this);
        this.submitButtonClicked = this.submitButtonClicked.bind(this);
        this.imageButtonClicked = this.imageButtonClicked.bind(this);
        this.textImageButtonClicked = this.textImageButtonClicked.bind(this);
        this.hTMLButtonClicked = this.hTMLButtonClicked.bind(this);

        this.state = {
            imgPosition: 'center',
            textImageRelation: 'imageBeforeText',
            textPosition: 'left',
            value: "<span style={{ fontWeight: 'bold' }}>HTML Button</span>"
        }
    };

    public render() { 
        return (
            <div> 
                <div style={{ marginTop: '20px' }}>
                    <JqxButton theme={'material-purple'} width={120} height={30} onClick={this.buttonClicked}>Button</JqxButton>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <JqxButton theme={'material-purple'} width={120} height={30} onClick={this.submitButtonClicked}>Submit</JqxButton>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <JqxButton theme={'material-purple'} width={120} height={40} imgSrc={'https://www.jqwidgets.com/react/images/facebook.png'} onClick={this.imageButtonClicked} />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <JqxButton theme={'material-purple'} ref={this.textImageButton} onClick={this.textImageButtonClicked}
                        width={120} height={40} textImageRelation={this.state.textImageRelation}
                        imgPosition={this.state.imgPosition} textPosition={'left'} imgSrc={'https://www.jqwidgets.com/react/images/twitter.png'}>
                        Button
                    </JqxButton>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <JqxButton theme={'material-purple'} ref={this.htmlButton} onClick={this.hTMLButtonClicked}
                        width={120} height={40} value={this.state.value} />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <JqxButton theme={'material-purple'} width={120} height={30} disabled={true}>Disabled</JqxButton>
                </div>
                <div style={{ marginTop: '1em' }}>Events:</div>
                <div ref={this.events} />
            </div>
        );
    }

    private buttonClicked() {
        this.events.current!.innerHTML = '<span>Button Clicked</span>';
    }

    private submitButtonClicked() {
        this.events.current!.innerHTML = '<span>Submit Button Clicked</span>';
    }  

    private imageButtonClicked() {
        this.events.current!.innerHTML = '<span>Image Button Clicked</span>';
    }

    private textImageButtonClicked() {
        this.events.current!.innerHTML = '<span>Text/Image Button Clicked</span>';
        this.setState({
            imgPosition: 'left',
            textImageRelation: 'textBeforeImage',
            textPosition: 'center'
        })
    }

    private hTMLButtonClicked() {
        this.events.current!.innerHTML = '<span>HTML Button Clicked</span>';
        this.setState({
            value: "<span style='font-style: italic; position: relative; right: 8px'>Thanks for clicking me!</span>"
        })
    }
}

export default App;