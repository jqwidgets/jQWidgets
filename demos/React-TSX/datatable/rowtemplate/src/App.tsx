import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import './App.css';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

class App extends React.PureComponent<{}, IDataTableProps> {

    private productNumber = React.createRef<HTMLParagraphElement>();
    private itemsInCart: number = 0;

    constructor(props: {}) {
        super(props);

        const data: any[] = [
            {
                laptops:
                    [
                        { img: 'https://www.jqwidgets.com/react/images/l-13.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3720QM', price: 2999, display: 15.4, hdd: '512GB SSD', model: 'Apple MacBook Pro' },
                        { img: 'https://www.jqwidgets.com/react/images/l-14.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3667U', price: 1299, display: 13.3, hdd: '256GB SSD', model: 'Apple MacBook Air' },
                        { img: 'https://www.jqwidgets.com/react/images/l-15.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3632QM', price: 2199, display: 15.4, hdd: '256GB SSD', model: 'Asus ZenBook UX51VZ' }
                    ]
            },
            {
                laptops:
                    [
                        { img: 'https://www.jqwidgets.com/react/images/l-16.jpg', ram: '4GB DD3', cpu: 'Intel Core i5-3317U', price: 1899, display: 13.3, hdd: '128GB SSD', model: 'ASUS TAICHI31-CX009H' },
                        { img: 'https://www.jqwidgets.com/react/images/l-17.jpg', ram: '4GB DD3', cpu: 'Intel Core i7-3517U', price: 1799, display: 13.3, hdd: '628GB', model: 'Asus TX300CA-C4024H' },
                        { img: 'https://www.jqwidgets.com/react/images/l-18.gif', ram: '16GB DD3', cpu: 'Intel Core i7-3820QM', price: 2499, display: 15.6, hdd: '1TB', model: 'Lenovo ThinkPad T530' }
                    ]
            },
            {
                laptops:
                    [
                        { img: 'https://www.jqwidgets.com/react/images/l-19.jpg', ram: '8GB DD3', cpu: 'Intel Core i5-3210M', price: 1499, display: 15.6, hdd: '750GB', model: 'Samsung Series 7 Chronos' },
                        { img: 'https://www.jqwidgets.com/react/images/l-20.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3720QM', price: 1499, display: 17.3, hdd: '256GB SSD', model: 'HP EliteBook 8770w' },
                        { img: 'https://www.jqwidgets.com/react/images/l-21.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3517U', price: 1499, display: 14.0, hdd: '512GB', model: 'Dell XPS 14' }
                    ]
            },
            {
                laptops:
                    [
                        { img: 'https://www.jqwidgets.com/react/images/l-22.jpg', ram: '32GB DD3', cpu: 'Intel Core i7-4800MQ', price: 3499, display: 17.3, hdd: '750GB', model: 'Dell Alienware 17' },
                        { img: 'https://www.jqwidgets.com/react/images/l-23.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3537U', price: 1699, display: 15.6, hdd: '1TB', model: 'Acer Aspire R7-571G' },
                        { img: 'https://www.jqwidgets.com/react/images/l-24.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-4500U', price: 1599, display: 15.6, hdd: '256GB SSD', model: 'Acer Aspire V5-573G' }
                    ]
            },
            {
                laptops:
                    [
                        { img: 'https://www.jqwidgets.com/react/images/l-25.jpg', ram: '32GB DD3', cpu: 'Intel Core i7-4700MQ', price: 2199, display: 17.3, hdd: '1TB', model: 'Toshiba Qosmio X70-A-114' },
                        { img: 'https://www.jqwidgets.com/react/images/l-26.gif', ram: '4GB DD3', cpu: 'Intel Core i7-3667U', price: 2699, display: 14.0, hdd: '256GB SSD', model: 'Lenovo Thinkpad X1 Carbon' },
                        { img: 'https://www.jqwidgets.com/react/images/l-27.jpg', ram: '8GB DD3', cpu: 'Intel Core i5-3317U ', price: 1699, display: 12.5, hdd: '128GB SSD', model: 'Dell XPS Duo 12' }
                    ]
            },
            {
                laptops:
                    [
                        { img: 'https://www.jqwidgets.com/react/images/l-28.png', ram: '8GB DD3', cpu: 'Intel Core i7-3537U', price: 1799, display: 12.5, hdd: '256GB SSD', model: 'Lenovo ThinkPad Twist S230u' },
                        { img: 'https://www.jqwidgets.com/react/images/l-29.jpg', ram: '4GB DD3', cpu: 'Intel Core i5-3317U ', price: 1299, display: 11.6, hdd: '128GB SSD', model: 'Sony Vaio Duo' },
                        { img: 'https://www.jqwidgets.com/react/images/l-30.jpg', ram: '4GB DD3', cpu: 'Intel Core i5-3230M', price: 999, display: 15.5, hdd: '256GB SSD', model: 'Sony VAIO' }
                    ]
            }
        ];
         
        const source = {
            dataType: 'array',
            localData: data
        };

        const rendered = (): void => {
            const clickHandler = () => {
                this.itemsInCart++;
                this.productNumber.current!.innerHTML = `${this.itemsInCart} products`;
            };
            const buyElements = document.getElementsByClassName('buy');
            Array.prototype.forEach.call(buyElements, (element: HTMLDivElement) => {
                ReactDOM.render(<JqxButton onClick={clickHandler} width={80} value={'Buy'} />, element);
            });
            
        }

        this.state = {
            columns: [
                {
                    align: 'left',
                    cellsRenderer: (row: number, column: string, value: any, rowData: any): string => {
                        const laptops = rowData.laptops;
                        let container = '';
                        for (const laptop of laptops) {
                            let item = '<div style="float: left; width: 33%; height: 265px;">';
                            const image = '<img class="center" width=160 height=120 style="display: block;" src="' + laptop.img + '"/>';
                            let info = '<div class="center" style="display: inline-block;">';
                            info += '<div><i>' + laptop.model + '</i></div>';
                            info += '<div>Price: $' + laptop.price + '</div>';
                            info += '<div>RAM: ' + laptop.ram + '</div>';
                            info += '<div>HDD: ' + laptop.hdd + '</div>';
                            info += '<div>CPU: ' + laptop.cpu + '</div>';
                            info += '<div>Display: ' + laptop.display + '</div>';
                            info += '</div>';
                            const button = '<div class="buy center" ></div>';
                            item += image;
                            item += info;
                            item += button;
                            item += '</div>';
                            container += item;
                        }

                        return container;
                    },
                    dataField: 'model',
                    text: 'Products',
                }
            ],
            rendered,
            source: new jqx.dataAdapter(source)
        };
    }


    public render() {
        return (
            <div>
                <div className="cart-top">
                    <p ref={this.productNumber}>0 products</p>
            </div>
            <div>
                <div>
                    <div className="tag-title">
                        <h4>Welcome to our online shop!</h4>
                        <span className="tag-title-info" />
                    </div>
                </div>
            </div>
            <br />
                <JqxDataTable theme={'material-purple'}
                    // @ts-ignore 
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    rendered={this.state.rendered} altRows={true} pageable={true} sortable={true} pageSize={2}
                    enableHover={true} pagerButtonsCount={3} selectionMode={'none'} />
            </div>
        );
    }
}

export default App;