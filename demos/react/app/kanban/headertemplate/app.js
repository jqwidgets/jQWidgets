import React from 'react';
import ReactDOM from 'react-dom';

import JqxKanban from '../../../jqwidgets-react/react_jqxkanban.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myKanban.on('itemAttrClicked', (event) => {
            let args = event.args;
            if (args.attribute == 'template') {
                this.refs.myKanban.removeItem(args.item.id);
            }
        });

        let itemIndex = 0;
        this.refs.myKanban.on('columnAttrClicked', (event) => {
            let args = event.args;
            if (args.attribute == 'button') {
                args.cancelToggle = true;
                if (!args.column.collapsed) {
                    let colors = ['#f19b60', '#5dc3f0', '#6bbd49', '#dddddd'];
                    this.refs.myKanban.addItem({
                        status: args.column.dataField,
                        text: '<div id="newItem' + itemIndex + '"/>',
                        tags: 'new task',
                        color: colors[Math.floor(Math.random() * 4)],
                        resourceId: Math.floor(Math.random() * 4)
                    });

                    let container = document.getElementById('newItem' + itemIndex);

                    let myInput = ReactDOM.render(
                        <JqxInput
                            width={'96%'} height={20} placeHolder={'(No Title)'}
                        />, container);

                    container.addEventListener('keydown', (event) => {
                        if (event.keyCode == 13) {
                            const element = <span>{myInput.val()}</span>;
                            ReactDOM.render(element, container);
                        }
                    }, true);

                    myInput.focus();
                    itemIndex++;
                }
            }
        });
    }
    render() {
        let fields = [
            { name: 'id', type: 'string' },
            { name: 'status', map: 'state', type: 'string' },
            { name: 'text', map: 'label', type: 'string' },
            { name: 'tags', type: 'string' },
            { name: 'color', map: 'hex', type: 'string' },
            { name: 'resourceId', type: 'number' }
        ];

        let source =
            {
                localData: [
                    { id: '1161', state: 'new', label: 'Make a new Dashboard', tags: 'dashboard', hex: '#36c7d0', resourceId: 3 },
                    { id: '1645', state: 'work', label: 'Prepare new release', tags: 'release', hex: '#ff7878', resourceId: 1 },
                    { id: '9213', state: 'new', label: 'One item added to the cart', tags: 'cart', hex: '#96c443', resourceId: 3 },
                    { id: '6546', state: 'done', label: 'Edit Item Price', tags: 'price, edit', hex: '#ff7878', resourceId: 4 },
                    { id: '9034', state: 'new', label: 'Login 404 issue', tags: 'issue, login', hex: '#96c443' }
                ],
                dataType: 'array',
                dataFields: fields
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let resourcesAdapterFunc = () => {
            let resourcesSource =
                {
                    localData: [
                        { id: 0, name: 'No name', image: '../../jqwidgets/styles/images/common.png', common: true },
                        { id: 1, name: 'Andrew Fuller', image: '../../images/andrew.png' },
                        { id: 2, name: 'Janet Leverling', image: '../../images/janet.png' },
                        { id: 3, name: 'Steven Buchanan', image: '../../images/steven.png' },
                        { id: 4, name: 'Nancy Davolio', image: '../../images/nancy.png' },
                        { id: 5, name: 'Michael Buchanan', image: '../../images/Michael.png' },
                        { id: 6, name: 'Margaret Buchanan', image: '../../images/margaret.png' },
                        { id: 7, name: 'Robert Buchanan', image: '../../images/robert.png' },
                        { id: 8, name: 'Laura Buchanan', image: '../../images/Laura.png' },
                        { id: 9, name: 'Laura Buchanan', image: '../../images/Anne.png' }
                    ],
                    dataType: 'array',
                    dataFields: [
                        { name: 'id', type: 'number' },
                        { name: 'name', type: 'string' },
                        { name: 'image', type: 'string' },
                        { name: 'common', type: 'boolean' }
                    ]
                };
            let resourcesDataAdapter = new $.jqx.dataAdapter(resourcesSource);
            return resourcesDataAdapter;
        }
        let getIconClassName = () => {
            switch (theme) {
                case 'darkblue':
                case 'black':
                case 'shinyblack':
                case 'ui-le-frog':
                case 'metrodark':
                case 'orange':
                case 'darkblue':
                case 'highcontrast':
                case 'ui-sunny':
                case 'ui-darkness':
                    return 'jqx-icon-plus-alt-white ';
            }
            return 'jqx-icon-plus-alt';
        }

        let template =
            '<div class="jqx-kanban-item" id="">'
            + '<div class="jqx-kanban-item-color-status"></div>'
            + '<div style="display: none;" class="jqx-kanban-item-avatar"></div>'
            + '<div class="jqx-icon jqx-icon-close jqx-kanban-item-template-content jqx-kanban-template-icon"></div>'
            + '<div class="jqx-kanban-item-text"></div>'
            + '<div style="display: none;" class="jqx-kanban-item-footer"></div>'
            + '</div>';

        let columns =
            [
                { text: 'Backlog', iconClassName: getIconClassName(), dataField: 'new', maxItems: 4 },
                { text: 'In Progress', iconClassName: getIconClassName(), dataField: 'work', maxItems: 2 },
                { text: 'Done', iconClassName: getIconClassName(), dataField: 'done', maxItems: 5 }
            ];

        let itemRenderer = (element, item, resource) => {
            element[0].getElementsByClassName('jqx-kanban-item-color-status')[0].innerHTML = '<span style="line-height: 23px; margin-left: 5px;">' + resource.name + '</span>';
            element[0].getElementsByClassName('jqx-kanban-item-text')[0].style.background = item.color;
        };

        let columnRenderer = (element, collapsedElement, column) => {
            setTimeout(() => {
                let columnItems = this.refs.myKanban.getColumnItems(column.dataField).length;
                // update header's status.
                element.find('.jqx-kanban-column-header-status').html(' (' + columnItems + '/' + column.maxItems + ')');
                // update collapsed header's status.
                collapsedElement.find('.jqx-kanban-column-header-status').html(' (' + columnItems + '/' + column.maxItems + ')');
            });
        };

        return (
            <JqxKanban ref='myKanban'
                template={template} height={600} resources={resourcesAdapterFunc()}
                source={dataAdapter} columns={columns}
                columnRenderer={columnRenderer} itemRenderer={itemRenderer}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));