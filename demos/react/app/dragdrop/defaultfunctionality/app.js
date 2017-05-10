import React from 'react';
import ReactDOM from 'react-dom';

import JqxDragDrop from '../../../jqwidgets-react/react_jqxdragdrop.js';
import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: $.jqx.theme,
            cartItems: [],
            totalPrice: 0,
            onCart: false
        }
    }
    componentDidMount() {
        this.productsRendering();
        this.addClasses();

        this.refs.myGrid.on('cellclick', (event) => {
            let index = event.args.rowindex;
            if (event.args.datafield == 'remove') {
                let item = this.state.cartItems[index];
                if (!item) return;
                if (item.count > 1) {
                    item.count -= 1;
                    this.updateGridRow(index, item);
                }
                else {
                    let temp = this.state.cartItems;
                    temp.splice(index, 1);
                    this.setState({
                        cartItems: temp
                    });
                    this.removeGridRow(index);
                }
                this.updatePrice(-item.price);
            }
        });
    }
    addClasses() {
        let catalog = document.getElementsByClassName('draggable-demo-catalog');
        for (let i = 0; i < catalog.length; i++) {
            catalog.className += 'jqx-scrollbar-state-normal-' + this.state.theme;
        }

        let title = document.getElementsByClassName('draggable-demo-title');
        for (let i = 0; i < title.length; i++) {
            title.className += 'jqx-expander-header-' + this.state.theme;
            title.className += 'jqx-expander-header-expanded-' + this.state.theme;
        }

        let total = document.getElementsByClassName('draggable-demo-catalog');
        for (let i = 0; i < total.length; i++) {
            total.className += 'jqx-expander-header-' + this.state.theme;
            total.className += 'jqx-expander-header-expanded-' + this.state.theme;
        }

        if (this.state.theme === 'shinyblack') {
            let shop = document.getElementsByClassName('draggable-demo-shop');
            for (let i = 0; i < shop.length; i++) {
                shop.style.backgroundColor = '#555';
            }

            let product = document.getElementsByClassName('draggable-demo-product');
            for (let i = 0; i < product.length; i++) {
                product.style.backgroundColor = '#999';
            }
        }
    }
    productsRendering() {
        let products = {
            'Retro Rock T-shirt': {
                pic: 'black-retro-rock-band-guitar-controller.png',
                price: 15
            },
            'Lucky T-shirt': {
                pic: 'bright-green-gettin-lucky-in-kentucky.png',
                price: 18
            },
            'Loading T-shirt': {
                pic: 'brown-loading-bar-computer-geek.png',
                price: 25
            },
            'Cool Story T-shirt': {
                pic: 'cool-story-bro.png',
                price: 20
            },
            'The beard T-shirt': {
                pic: 'fear-the-beard.png',
                price: 17
            },
            'Don\'t care T-shirt': {
                pic: 'honey-badger-don-t-care.png',
                price: 19
            },
            'Guitar T-shirt': {
                pic: 'scott-pilgrim-red-rock-band.png',
                price: 24
            },
            'Dodgers T-shirt': {
                pic: '2-sided-dodgers-bankrupt-t-shirt-ash.png',
                price: 21
            },
            'Misfits T-shirt': {
                pic: 'misfits-sf-giants-white.png',
                price: 21
            }
        };
        let catalog = document.getElementById('catalog');
        let image, product, left = 0, top = 0, counter = 0;

        for (let name in products) {
            let element = document.createElement('div');
            catalog.appendChild(element)

            product = products[name];

            if (counter !== 0 && counter % 3 === 0) {
                top += 147;
                left = 0;
            }

            let widget = 'dragDrop' + counter;

            this[widget] = ReactDOM.render(
                <JqxDragDrop className='draggable-demo-product jqx-rc-all' style={{ left: left, top: top }}
                    dropTarget={$('#cart')} revert={true}>
                    <div className={'jqx-rc-t draggable-demo-product-header jqx-widget-header-' + this.state.theme + ' jqx-fill-state-normal-' + this.state.theme + ''}>
                        <div className='draggable-demo-product-header-label'>{name}</div>
                    </div>
                    <div className={'jqx-fill-state-normal-' + this.state.theme + ' draggable-demo-product-price'}>
                        Price: <strong>${product.price}</strong>
                    </div>
                    <img src={'../../images/t-shirts/' + product.pic + ''} alt={name} className='jqx-rc-b' />
                </JqxDragDrop>
                , element);

            left += 127;
            counter += 1;


            let myDragDrop = document.getElementById(this[widget].componentSelector);
            this[widget].on('mouseenter', () => {
                $(myDragDrop.children[1]).fadeTo(100, 0.9);
            });
            this[widget].on('mouseleave', () => {
                $(myDragDrop.children[1]).fadeTo(100, 0);
            });
            this[widget].on('dropTargetEnter', (event) => {
                event.args.target[0].style.border = '2px solid #000';
                this.setState({
                    onCart: true
                });
                this[widget].dropAction('none');
            });
            this[widget].on('dropTargetLeave', (event) => {
                event.args.target[0].style.border = '2px solid #aaa';
                this.setState({
                    onCart: false
                });
                this[widget].dropAction('default');
            });
            this[widget].on('dragEnd', (event) => {
                let cartElement = document.getElementById('cart');
                cartElement.style.border = '2px dashed #aaa';
                if (this.state.onCart) {
                    let price = myDragDrop.children[1].innerText.substr(8, 11);
                    let name = myDragDrop.children[2].alt;
                    this.addItem({ price: price, name: name });
                    this.setState({
                        onCart: false
                    });
                }
            });
            this[widget].on('dragStart', () => {
                let cartElement = document.getElementById('cart');
                cartElement.style.border = '2px solid #aaa';
            });
        }
    }
    addItem(item) {
        let index = this.getItemIndex(item.name);
        let product = item;
        if (index >= 0) {
            let temp = this.state.cartItems;
            temp[index].count += 1;
            this.setState({
                cartItems: temp
            });
            this.updateGridRow(index, this.state.cartItems[index]);
        } else {
            let id = this.state.cartItems.length;
            let item = {
                name: product.name,
                count: 1,
                price: product.price,
                index: id,
                remove: '<div style="text-align: center; cursor: pointer; width: 53px;"' +
                'id="draggable-demo-row-' + id + '">X</div>'
            };
            let temp = this.state.cartItems;
            temp.push(item)
            this.setState({
                cartItems: temp
            });
            this.addGridRow(item);
        }
        this.updatePrice(item.price);
    }
    updatePrice(price) {
        this.setState({
            totalPrice: this.state.totalPrice + parseInt(price)
        })
        document.getElementById('total').innerHTML = '$ ' + this.state.totalPrice;
    };
    addGridRow(row) {
        this.refs.myGrid.addrow(null, row);
    };
    updateGridRow(id, row) {
        let rowID = this.refs.myGrid.getrowid(id);
        this.refs.myGrid.updaterow(rowID, row);
    };
    removeGridRow(id) {
        let rowID = this.refs.myGrid.getrowid(id);
        this.refs.myGrid.deleterow(rowID);
    };
    getItemIndex(name) {
        let items = this.state.cartItems;
        for (let i = 0; i < items.length; i += 1) {
            if (items[i].name === name) {
                return i;
            }
        }
        return -1;
    }
    render() {
        let gridColumns = [
            { text: 'Item', dataField: 'name', width: 120 },
            { text: 'Count', dataField: 'count', width: 50 },
            { text: 'Remove', dataField: 'remove', width: 60 }
        ];
        return (
            <div id='shop' className='draggable-demo-shop jqx-rc-all'>
                <div id='catalog' className='draggable-demo-catalog jqx-rc-all' />
                <div className='draggable-demo-cart-wrapper jqx-rc-all'>
                    <div className='draggable-demo-title jqx-rc-t'>Shopping Cart</div>
                    <div id='cart' className='draggable-demo-cart jqx-rc-all'>
                        <JqxGrid ref='myGrid'
                            width={230} height={335} columns={gridColumns}
                            selectionmode={'none'} keyboardnavigation={false}
                        />
                    </div>
                    <div className='draggable-demo-total'>Total: <strong><span id='total'>$ 0</span></strong></div>
                </div>
                <div style={{ clear: 'both' }} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));