import React from 'react';
import ReactDOM from 'react-dom';

import JqxTagCloud from '../../../jqwidgets-react/react_jqxtagcloud.js';

class App extends React.Component {
    render () {
        let data = [
                 { countryName: 'Australia', technologyRating: 35, url: 'test' },
                 { countryName: 'United States', technologyRating: 60 },
                 { countryName: 'Germany', technologyRating: 55 },
                 { countryName: 'Brasil', technologyRating: 20 },
                 { countryName: 'United Kingdom', technologyRating: 50 },
                 { countryName: 'Japan', technologyRating: 80 }
        ];
        let source =
        {
            localdata: data,
            datatype: 'array',
            datafields: [
                { name: 'countryName' },
                { name: 'technologyRating' }
            ]
        };
        let dataAdapter = new $.jqx.dataAdapter(source, {});
        let tagRenderer = (record, minValue, range) => {
            let el = document.createElement('span');
            el.innerText = record.countryName;

            let img = document.createElement('img');
            img.setAttribute('style', 'width: auto; height: auto; vertical-align: middle;');
            img.src = '../../jqwidgets/styles/images/close.png';

            img.addEventListener('click', () => {
                let parentContainer = event.target.parentNode.parentNode.parentNode.parentNode;
                let siblings = parentContainer.childNodes;
                let id = null;
                for (let i = 0; i < siblings.length; i += 1) {
                    let currentElement = siblings[i].getElementsByTagName('span')[0];
                    if (currentElement == event.target.parentNode) {
                        id = i;
                    }
                }

                this.refs.tagCloud.removeAt(id);
                event.preventDefault();
                event.stopPropagation();
            });

            el.appendChild(img);
            return el;
        };
        return (
            <JqxTagCloud ref='tagCloud'
                tagRenderer={tagRenderer}
                width={600} source={dataAdapter}
                displayMember={'countryName'} valueMember={'technologyRating'}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
