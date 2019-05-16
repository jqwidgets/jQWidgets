import * as React from 'react';
 


import JqxRating from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxrating';

class App extends React.PureComponent<{}> {

    private rate = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    public render() {
        return (
            <div style={{ fontSize: '13px', fontFamily: 'Verdana' }}>
                <JqxRating onChange={this.onChange} width={350} height={35} />
                <div style={{ marginTop: '10px', float: 'left' }}>
                    <div>Rating: </div>
                    <div ref={this.rate} />
                </div>
            </div>
        );
    }

    private onChange(event: any) {
        const rate = this.rate.current!;

        rate.innerHTML = '<span> ' + event.value + '</span>';
    }
}

export default App;
