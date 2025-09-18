import * as React from 'react';
import './App.css';
import JqxSortable from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsortable';

function App() {
    const sortableRef = React.useRef<JqxSortable>(null);
    const firstItemRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven'];
        const lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan'];
        const titles = ['Sales Representative', 'Vice President, Sales', 'Sales Representative', 'Sales Representative', 'Sales Manager'];

        const parentElement = firstItemRef.current?.parentElement;
        if (!parentElement) return;
        let isFirstLoad = true;

        for (let i = 0; i < firstNames.length; i++) {
            const element = document.createElement('div');
            const imgurl = 'https://www.jqwidgets.com/react/images/' + firstNames[i].toLowerCase() + '.png';
            const img = '<img height="50" width="40" src="' + imgurl + '"/>';
            element.innerHTML = '<table style="min-width: 130px;"><tr><td style="width: 40px;" rowspan="2">' + img + '</td><td>' + firstNames[i] + ' ' + lastNames[i] + '</td></tr><tr><td>' + titles[i] + '</td></tr></table>';
            if (isFirstLoad) {
                isFirstLoad = false;
                parentElement.appendChild(element);
                parentElement.removeChild(firstItemRef.current!);
                continue;
            }
            parentElement.appendChild(element);
        }
    }, []);

    return (
        <JqxSortable ref={sortableRef}>
            <div ref={firstItemRef} />
        </JqxSortable>
    );
}

export default App;