import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxTooltip from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtooltip';

class App extends React.PureComponent<{}, any> {
    private myTooltip = React.createRef<JqxTooltip>();
    private image = React.createRef<HTMLImageElement>();
    private toggle: boolean = false;

    constructor(props: {}) {
        super(props);
        this.click = this.click.bind(this);
    }

    public render() {
        return (
            <div>
                <JqxButton theme={'material-purple'} width={100} height={20} onClick={this.click}>Toggle tooltip</JqxButton>

                <div style={{ marginLeft: 210, width: 'auto' }}>
                    <JqxTooltip theme={'material-purple'} ref={this.myTooltip}
                        name={"moveTooltip"}
                        autoHide={false}
                        trigger={'none'}
                        closeOnClick={false}
                        content={"The Amazing Spider-man"}
                        position={"left"}>
                        <img ref={this.image} src='https://www.jqwidgets.com/react/images/The_Amazng_Spider_Man.jpeg' />
                    </JqxTooltip>
                </div>
            </div>
        );
    }

    // Event handling
    private click(): void {
        if (this.toggle) {
            this.myTooltip.current!.close();
            this.toggle = !this.toggle;
        } else {
            const imageElement = this.image.current!;
            const x = imageElement.offsetLeft - imageElement.width / 2 + 10;
            const y = imageElement.offsetTop + imageElement.height + 5;

            this.myTooltip.current!.open(x, y);
            this.toggle = !this.toggle;
        }
    }
}

export default App;
