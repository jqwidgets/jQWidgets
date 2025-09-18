import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';
import JqxDragDrop from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdragdrop';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const myGrid = React.useRef<any>(null);
    const theme = jqx.theme;
    const cartItems = React.useRef<any[]>([]);
    const totalPrice = React.useRef<number>(0);
    const onCart = React.useRef<boolean>(false);

    const columns = React.useMemo(
        () => [
            { text: 'Item', datafield: 'name', width: 120 },
            { text: 'Count', datafield: 'count', width: 50 },
            { text: 'Remove', datafield: 'remove', width: 60 }
        ],
        []
    );

    const addClasses = React.useCallback(() => {
        const catalog = document.getElementsByClassName('draggable-demo-catalog');
        Array.prototype.forEach.call(catalog, (catalogItem: HTMLDivElement) => {
            catalogItem.className += 'jqx-scrollbar-state-normal-' + theme;
        });

        const title = document.getElementsByClassName('draggable-demo-title');
        Array.prototype.forEach.call(title, (titleItem: HTMLDivElement) => {
            titleItem.className += 'jqx-expander-header-' + theme;
            titleItem.className += 'jqx-expander-header-expanded-' + theme;
        });

        const total = document.getElementsByClassName('draggable-demo-catalog');
        Array.prototype.forEach.call(total, (totalItem: HTMLDivElement) => {
            totalItem.className += 'jqx-expander-header-' + theme;
            totalItem.className += 'jqx-expander-header-expanded-' + theme;
        });

        if (theme === 'shinyblack') {
            const shop = document.getElementsByClassName('draggable-demo-shop');
            Array.prototype.forEach.call(shop, (shopItem: HTMLDivElement) => {
                shopItem.style.backgroundColor = '#555';
            });

            const product = document.getElementsByClassName('draggable-demo-product');
            Array.prototype.forEach.call(product, (productItem: HTMLDivElement) => {
                productItem.style.backgroundColor = '#999';
            });
        }
    }, [theme]);

    const getItemIndex = React.useCallback((name: any): number => {
        const items = cartItems.current;
        for (let i = 0; i < items.length; i += 1) {
            if (items[i].name === name) {
                return i;
            }
        }
        return -1;
    }, []);

    const updatePrice = React.useCallback((price: any) => {
        totalPrice.current = totalPrice.current + parseInt(price, 10);
        const totalElem = document.getElementById('total');
        if (totalElem) {
            totalElem.innerHTML = '$ ' + totalPrice.current;
        }
    }, []);

    const addGridRow = React.useCallback((row: any) => {
        if (myGrid.current) {
            myGrid.current.addrow(null, row);
        }
    }, []);

    const updateGridRow = React.useCallback((id: number, row: any) => {
        if (myGrid.current) {
            const rowID = myGrid.current.getrowid(id);
            myGrid.current.updaterow(rowID, row);
        }
    }, []);

    const removeGridRow = React.useCallback((id: any) => {
        if (myGrid.current) {
            const rowID = myGrid.current.getrowid(id);
            myGrid.current.deleterow(rowID);
        }
    }, []);

    const addItem = React.useCallback(
        (item: any) => {
            const index = getItemIndex(item.name);
            const product = item;
            if (index >= 0) {
                const temp = cartItems.current;
                temp[index].count += 1;
                cartItems.current = temp;
                updateGridRow(index, cartItems.current[index]);
            } else {
                const id = cartItems.current.length;
                const newItem = {
                    count: 1,
                    index: id,
                    name: product.name,
                    price: product.price,
                    remove:
                        '<div style="text-align: center; cursor: pointer; width: 53px;"' +
                        'id="draggable-demo-row-' +
                        id +
                        '">X</div>'
                };
                const temp = cartItems.current;
                temp.push(newItem);
                cartItems.current = temp;
                addGridRow(newItem);
            }
            updatePrice(item.price);
        },
        [addGridRow, getItemIndex, updateGridRow, updatePrice]
    );

    const gridOnCellClick = React.useCallback(
        (event: any) => {
            const index = event.args.rowindex;
            if (event.args.datafield === 'remove') {
                const item = cartItems.current[index];
                if (!item) {
                    return;
                }
                if (item.count > 1) {
                    item.count -= 1;
                    updateGridRow(index, item);
                } else {
                    const temp = cartItems.current;
                    temp.splice(index, 1);
                    cartItems.current = temp;
                    removeGridRow(index);
                }
                updatePrice(-item.price);
            }
        },
        [removeGridRow, updateGridRow, updatePrice]
    );

    const productsRendering = React.useCallback(() => {
        const products: any = {
            'Cool Story T-shirt': {
                pic: 'cool-story-bro.png',
                price: 20
            },
            'Dodgers T-shirt': {
                pic: '2-sided-dodgers-bankrupt-t-shirt-ash.png',
                price: 21
            },
            "Don't care T-shirt": {
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
            const product = products[name];

            catalog!.appendChild(element);

            const style = { left: `${left}px`, top: `${top}px` };

            const widget = React.createRef<any>();

            const dropTargetEnterHandler = (event: any) => {
                if (event.args) {
                    event.args.target[0].style.border = '2px solid #000';
                }
                onCart.current = true;
                widget.current!.setOptions({ dropAction: 'none' });
            };

            const dropTargetLeave = (event: any) => {
                if (event.args) {
                    event.args.target[0].style.border = '2px solid #aaa';
                }
                onCart.current = false;
                widget.current!.setOptions({ dropAction: 'default' });
            };

            const dragEndHandler = (event: any) => {
                const cartElement = document.getElementById('cart');
                if (cartElement) {
                    cartElement.style.border = '2px dashed #aaa';
                }
                if (onCart.current) {
                    const price = product.price;
                    addItem({ price, name });
                    onCart.current = false;
                }
            };

            const dragStartHandler = () => {
                const cartElement = document.getElementById('cart');
                if (cartElement) {
                    cartElement.style.border = '2px solid #aaa';
                }
            };

            const target = [document.querySelector('#cart')];

            ReactDOM.render(
                <JqxDragDrop
                    ref={widget}
                    className={`draggable-demo-product jqx-rc-all dragDrop${id}`}
                    style={style}
                    onDropTargetEnter={dropTargetEnterHandler}
                    onDropTargetLeave={dropTargetLeave}
                    onDragEnd={dragEndHandler}
                    onDragStart={dragStartHandler}
                    dropTarget={target}
                    revert={true}
                >
                    <div
                        className={`jqx-rc-t draggable-demo-product-header jqx-widget-header-${theme} jqx-fill-state-normal-${theme}`}
                    >
                        <div className="draggable-demo-product-header