import React, { useRef } from 'react';
import JqxRating from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxrating';

function App() {
    const rate = useRef<HTMLDivElement>(null);

    const onChange = (event: any) => {
        if (rate.current) {
            rate.current.innerHTML = '<span> ' + event.value + '</span>';
        }
    };

    return (
        <div style={{ fontSize: '13px', fontFamily: 'Verdana' }}>
            <JqxRating onChange={onChange} width={350} height={35} />
            <div style={{ marginTop: '10px', float: 'left' }}>
                <div>Rating: </div>
                <div ref={rate} />
            </div>
        </div>
    );
}

export default App;