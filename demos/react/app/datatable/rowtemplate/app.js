import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {

    }
    render() {
        let data = [
            {
                laptops:
                [
                    { img: '../../images/l-13.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3720QM', price: 2999, display: 15.4, hdd: '512GB SSD', model: 'Apple MacBook Pro' },
                    { img: '../../images/l-14.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3667U', price: 1299, display: 13.3, hdd: '256GB SSD', model: 'Apple MacBook Air' },
                    { img: '../../images/l-15.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3632QM', price: 2199, display: 15.4, hdd: '256GB SSD', model: 'Asus ZenBook UX51VZ' }
                ]
            },
            {
                laptops:
                [
                    { img: '../../images/l-16.jpg', ram: '4GB DD3', cpu: 'Intel Core i5-3317U', price: 1899, display: 13.3, hdd: '128GB SSD', model: 'ASUS TAICHI31-CX009H' },
                    { img: '../../images/l-17.jpg', ram: '4GB DD3', cpu: 'Intel Core i7-3517U', price: 1799, display: 13.3, hdd: '628GB', model: 'Asus TX300CA-C4024H' },
                    { img: '../../images/l-18.gif', ram: '16GB DD3', cpu: 'Intel Core i7-3820QM', price: 2499, display: 15.6, hdd: '1TB', model: 'Lenovo ThinkPad T530' }
                ]
            },
            {
                laptops:
                [
                    { img: '../../images/l-19.jpg', ram: '8GB DD3', cpu: 'Intel Core i5-3210M', price: 1499, display: 15.6, hdd: '750GB', model: 'Samsung Series 7 Chronos' },
                    { img: '../../images/l-20.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3720QM', price: 1499, display: 17.3, hdd: '256GB SSD', model: 'HP EliteBook 8770w' },
                    { img: '../../images/l-21.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3517U', price: 1499, display: 14.0, hdd: '512GB', model: 'Dell XPS 14' }
                ]
            },
            {
                laptops:
                [
                    { img: '../../images/l-22.jpg', ram: '32GB DD3', cpu: 'Intel Core i7-4800MQ', price: 3499, display: 17.3, hdd: '750GB', model: 'Dell Alienware 17' },
                    { img: '../../images/l-23.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3537U', price: 1699, display: 15.6, hdd: '1TB', model: 'Acer Aspire R7-571G' },
                    { img: '../../images/l-24.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-4500U', price: 1599, display: 15.6, hdd: '256GB SSD', model: 'Acer Aspire V5-573G' }
                ]
            },
            {
                laptops:
                [
                    { img: '../../images/l-25.jpg', ram: '32GB DD3', cpu: 'Intel Core i7-4700MQ', price: 2199, display: 17.3, hdd: '1TB', model: 'Toshiba Qosmio X70-A-114' },
                    { img: '../../images/l-26.gif', ram: '4GB DD3', cpu: 'Intel Core i7-3667U', price: 2699, display: 14.0, hdd: '256GB SSD', model: 'Lenovo Thinkpad X1 Carbon' },
                    { img: '../../images/l-27.jpg', ram: '8GB DD3', cpu: 'Intel Core i5-3317U ', price: 1699, display: 12.5, hdd: '128GB SSD', model: 'Dell XPS Duo 12' }
                ]
            },
            {
                laptops:
                [
                    { img: '../../images/l-28.png', ram: '8GB DD3', cpu: 'Intel Core i7-3537U', price: 1799, display: 12.5, hdd: '256GB SSD', model: 'Lenovo ThinkPad Twist S230u' },
                    { img: '../../images/l-29.jpg', ram: '4GB DD3', cpu: 'Intel Core i5-3317U ', price: 1299, display: 11.6, hdd: '128GB SSD', model: 'Sony Vaio Duo' },
                    { img: '../../images/l-30.jpg', ram: '4GB DD3', cpu: 'Intel Core i5-3230M', price: 999, display: 15.5, hdd: '256GB SSD', model: 'Sony VAIO' }
                ]
            }
        ];
        let source =
            {
                localData: data,
                dataType: 'array'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let itemsInCart = 0;

        let rendered = () => {
            let buttons = document.getElementsByClassName('buy');

            for (let i = 0; i < buttons.length; i++)
            {
                ReactDOM.render(<JqxButton value='Buy' width={80} />, buttons[i]);

                buttons[i].addEventListener('click', () => {
                    itemsInCart++;
                    document.getElementById('productNumber').innerHTML = itemsInCart + ' products';
                }, true)
            }
        };

        let columns =
            [
                {
                    text: 'Products', align: 'left', dataField: 'model',
                    // row - row's index.
                    // column - column's data field.
                    // value - cell's value.
                    // rowData - rendered row's object.
                    cellsRenderer: (row, column, value, rowData) => {
                        let laptops = rowData.laptops;
                        let container = '<div>';
                        for (let i = 0; i < laptops.length; i++) {
                            let laptop = laptops[i];
                            let item = '<div style="float: left; width: 210px; overflow: hidden; white-space: nowrap; height: 265px;">';
                            let image = '<div style="margin: 5px; margin-bottom: 3px;">';
                            let imgurl = laptop.img;
                            let img = '<img width=160 height=120 style="display: block;" src="' + imgurl + '"/>';
                            image += img;
                            image += '</div>';
                            let info = '<div style="margin: 5px; margin-left: 10px; margin-bottom: 3px;">';
                            info += '<div><i>' + laptop.model + '</i></div>';
                            info += '<div>Price: $' + laptop.price + '</div>';
                            info += '<div>RAM: ' + laptop.ram + '</div>';
                            info += '<div>HDD: ' + laptop.hdd + '</div>';
                            info += '<div>CPU: ' + laptop.cpu + '</div>';
                            info += '<div>Display: ' + laptop.display + '</div>';
                            info += '</div>';
                            let buy = '<div class="buy" style="margin: 5px; left: -40px; position: relative; margin-left: 50%; margin-bottom: 3px;"></div>';
                            item += image;
                            item += info;
                            item += buy;
                            item += '</div>';
                            container += item;
                        }
                        container += '</div>';
                        return container;
                    }
                }
            ];

        return (
            <div>
                <div className='cart-top'>
                    <p id='productNumber'>0 products</p>
                </div>
                <div>
                    <div>
                        <div className='tag-title'>
                            <h4>Welcome to our online shop!</h4>
                            <span className='tag-title-info'></span>
                        </div>
                    </div>
                </div>
                <br />
                <JqxDataTable
                    width={640} source={dataAdapter} altRows={true} pageSize={2}
                    pageable={true} sortable={true} columns={columns} pagerButtonsCount={5}
                    enableHover={false} selectionMode={'none'} rendered={rendered}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
