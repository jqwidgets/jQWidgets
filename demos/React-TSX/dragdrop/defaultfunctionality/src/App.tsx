import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import './App.css';

import JqxDragDrop from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdragdrop';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();
    private theme: any = jqx.theme;
    private cartItems: any[] = [];
    private totalPrice: number = 0;
    private onCart: boolean = false;

    constructor(props: {}) {
        super(props);
        this.gridOnCellClick = this.gridOnCellClick.bind(this);
        this.addItem = this.addItem.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
        this.addGridRow = this.addGridRow.bind(this);
        this.updateGridRow = this.updateGridRow.bind(this);
        this.removeGridRow = this.removeGridRow.bind(this);
        this.getItemIndex = this.getItemIndex.bind(this);
        this.gridOnCellClick = this.gridOnCellClick.bind(this);

        this.state = {
            columns: [
                { text: 'Item', datafield: 'name', width: 120 },
                { text: 'Count', datafield: 'count', width: 50 },
                { text: 'Remove', datafield: 'remove', width: 60 }
            ]
        }
    }

    public componentDidMount() {
        this.productsRendering();
        this.addClasses();
    }

    public render() {

        return (
            <div id="shop" className="draggable-demo-shop jqx-rc-all">
                <div id="catalog" className="draggable-demo-catalog jqx-rc-all" />
                <div className="draggable-demo-cart-wrapper jqx-rc-all">
                    <div className="draggable-demo-title jqx-rc-t">Shopping Cart</div>
                    <div id="cart" className="draggable-demo-cart jqx-rc-all">
                        <JqxGrid theme={'material-purple'} ref={this.myGrid} onCellclick={this.gridOnCellClick}
                            width={230} height={335} columns={this.state.columns}
                            selectionmode={'none'} keyboardnavigation={false} />
                    </div>
                    <div className="draggable-demo-total">Total: <strong><span id="total">$ 0</span></strong></div>
                </div>
                <div style={{ clear: 'both' }} />
            </div>
        );
    }

    private addClasses() {
        const catalog = document.getElementsByClassName('draggable-demo-catalog');
        Array.prototype.forEach.call(catalog, (catalogItem: HTMLDivElement) => {
            catalogItem.className += 'jqx-scrollbar-state-normal-' + this.theme;
        });

        const title = document.getElementsByClassName('draggable-demo-title');
        Array.prototype.forEach.call(title, (titleItem: HTMLDivElement) => {
            titleItem.className += 'jqx-expander-header-' + this.theme;
            titleItem.className += 'jqx-expander-header-expanded-' + this.theme;
        });

        const total = document.getElementsByClassName('draggable-demo-catalog');
        Array.prototype.forEach.call(total, (totalItem: HTMLDivElement) => {
            totalItem.className += 'jqx-expander-header-' + this.theme;
            totalItem.className += 'jqx-expander-header-expanded-' + this.theme;
        });

        if (this.theme === 'shinyblack') {
            const shop = document.getElementsByClassName('draggable-demo-shop');
            Array.prototype.forEach.call(shop, (shopItem: HTMLDivElement) => {
                shopItem.style.backgroundColor = '#555';
            });

            const product = document.getElementsByClassName('draggable-demo-product');
            Array.prototype.forEach.call(product, (productItem: HTMLDivElement) => {
                productItem.style.backgroundColor = '#999';
            });
        }
    }

    private productsRendering() {
        const products: any = {
            'Cool Story T-shirt': {
                pic: 'cool-story-bro.png',
                price: 20
            },
            'Dodgers T-shirt': {
                pic: '2-sided-dodgers-bankrupt-t-shirt-ash.png',
                price: 21
            },
            'Don\'t care T-shirt': {
                pic: 'honey-badger-don-t-care.png',
                price: 19
            },
            'Guitar T-shirt': {
                pic: 'scott-pilgrim-red-rock-band.png',
                price: 24
            },
            'Loading T-shirt': {
                pic: 'brown-loading-bar-computer-geek.png',
                price: 25
            },
            'Lucky T-shirt': {
                pic: 'bright-green-gettin-lucky-in-kentucky.png',
                price: 18
            },
            'Misfits T-shirt': {
                pic: 'misfits-sf-giants-white.png',
                price: 21
            },
            'Retro Rock T-shirt': {
                pic: 'black-retro-rock-band-guitar-controller.png',
                price: 15
            },
            'The beard T-shirt': {
                pic: 'fear-the-beard.png',
                price: 17
            }
        };

        const catalog = document.getElementById('catalog');
        let product: any;
        let left = 0;
        let top = 0;
        let counter = 0;

        for (const name of Object.keys(products)) {

            if (counter !== 0 && counter % 3 === 0) {
                top += 147;
                left = 0;
            }

            const element = document.createElement('div');
            const id = counter;

            product = products[name];

            catalog!.appendChild(element);

            const style = { left: `${left}px`, top: `${top}px` };

            const widget = React.createRef<JqxDragDrop>();       

            const dropTargetEnterHandler = (event: any) => {
                if (event.args) {
                    event.args.target[0].style.border = '2px solid #000';
                }
                this.onCart = true;
                widget!.current!.setOptions({ dropAction: 'none' });
            };

            const dropTargetLeave = (event: any) => {
                if (event.args) {
                    event.args.target[0].style.border = '2px solid #aaa';
                }
                this.onCart = false;
                widget!.current!.setOptions({ dropAction: 'default' });
            };

            const dragEndHandler = (event: any) => {
                const cartElement = document.getElementById('cart');
                cartElement!.style.border = '2px dashed #aaa';
                if (this.onCart) {
                    const price = product.price;
                    this.addItem({ price, name });
                    this.onCart = false;
                }
            };

            const dragStartHandler = () => {
                const cartElement = document.getElementById('cart');
                cartElement!.style.border = '2px solid #aaa';
            };
            
            const target = [document.querySelector('#cart')];
            ReactDOM.render(
                <JqxDragDrop  ref={widget} className={`draggable-demo-product jqx-rc-all dragDrop${id}`} style={style}
                    onDropTargetEnter={dropTargetEnterHandler} onDropTargetLeave={dropTargetLeave}
                    onDragEnd={dragEndHandler} onDragStart={dragStartHandler}
                    dropTarget={target} revert={true}>
                    <div className={`jqx-rc-t draggable-demo-product-header jqx-widget-header-${this.theme} jqx-fill-state-normal-${this.theme}`}>
                        <div className="draggable-demo-product-header-label">{name}</div>
                    </div>
                    <div className={`jqx-fill-state-normal-${this.theme} draggable-demo-product-price`}>
                        Price: <strong>${product.price}</strong>
                    </div>
                    <img src={`https://www.jqwidgets.com/react/images/t-shirts/${product.pic}`} alt={name} className="jqx-rc-b" />
                </JqxDragDrop>,

                element,

                () => {
                    const widgetChilds = document.querySelector(`.dragDrop${id}`)!.children;
                    const child = widgetChilds[1] as HTMLDivElement;
                    element.addEventListener('mouseenter', () => {
                        child.style.opacity = '0.9';
                        child.style.display = 'block';
                    });
                    element.addEventListener('mouseleave', () => {
                        child.style.opacity = '0';
                        child.style.display = 'none';
                    });                   
                }
            );

            left += 127;
            counter += 1;
        }
    }

    private addItem(item: any) {
        const index = this.getItemIndex(item.name);
        const product = item;
        if (index >= 0) {
            const temp = this.cartItems;
            temp[index].count += 1;
            this.cartItems = temp;
            this.updateGridRow(index, this.cartItems[index]);
        } else {
            const id = this.cartItems.length;
            const newItem = {
                count: 1, index: id, name: product.name,
                price: product.price,
                remove: '<div style="text-align: center; cursor: pointer; width: 53px;"' +
                    'id="draggable-demo-row-' + id + '">X</div>'
            };
            const temp = this.cartItems;
            temp.push(newItem)
            this.cartItems = temp;
            this.addGridRow(newItem);
        }
        this.updatePrice(item.price);
    }
    private updatePrice(price: any) {
        this.totalPrice = this.totalPrice + parseInt(price, 10)
        document.getElementById('total')!.innerHTML = '$ ' + this.totalPrice;
    };

    private addGridRow(row: any) {
        this.myGrid.current!.addrow(null, row);
    };

    private updateGridRow(id: number, row: any) {
        const rowID = this.myGrid.current!.getrowid(id);
        this.myGrid.current!.updaterow(rowID, row);
    };

    private removeGridRow(id: any) {
        const rowID = this.myGrid.current!.getrowid(id);
        this.myGrid.current!.deleterow(rowID);
    };

    private getItemIndex(name: any): number {
        const items = this.cartItems;
        for (let i = 0; i < items.length; i += 1) {
            if (items[i].name === name) {
                return i;
            }
        }
        return -1;
    }

    private gridOnCellClick(event: any): void {
        const index = event.args.rowindex;
        if (event.args.datafield === 'remove') {
            const item = this.cartItems[index];
            if (!item) {
                return;
            }
            if (item.count > 1) {
                item.count -= 1;
                this.updateGridRow(index, item);
            }
            else {
                const temp = this.cartItems;
                temp.splice(index, 1);
                this.cartItems = temp;
                this.removeGridRow(index);
            }
            this.updatePrice(-item.price);
        }
    }
}

export default App;