import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;

    ngAfterViewInit(): void {
        this.productsRendering();
        this.addClasses();
    }

    theme: any = jqx.theme;
    cartItems: any[] = [];
    totalPrice: number = 0;
    onCart: boolean = false;

    gridColumns: any[] = [
        { text: 'Item', dataField: 'name', width: 120 },
        { text: 'Count', dataField: 'count', width: 50 },
        { text: 'Remove', dataField: 'remove', width: 60 }
    ]

    addClasses() {
        let catalog = document.getElementsByClassName('draggable-demo-catalog');
        for (let i = 0; i < catalog.length; i++) {
            catalog[i].className += 'jqx-scrollbar-state-normal-' + this.theme;
        }

        let title = document.getElementsByClassName('draggable-demo-title');
        for (let i = 0; i < title.length; i++) {
            title[i].className += 'jqx-expander-header-' + this.theme;
            title[i].className += 'jqx-expander-header-expanded-' + this.theme;
        }

        let total = document.getElementsByClassName('draggable-demo-catalog');
        for (let i = 0; i < total.length; i++) {
            total[i].className += 'jqx-expander-header-' + this.theme;
            total[i].className += 'jqx-expander-header-expanded-' + this.theme;
        }

        if (this.theme === 'shinyblack') {
            let shop = document.getElementsByClassName('draggable-demo-shop');
            for (let i = 0; i < shop.length; i++) {
                (<HTMLElement>shop[i]).style.backgroundColor = '#555';
            }

            let product = document.getElementsByClassName('draggable-demo-product');
            for (let i = 0; i < product.length; i++) {
                (<HTMLElement>product[i]).style.backgroundColor = '#999';
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

            if (counter !== 0 && counter % 3 === 0) {
                top += 147;
                left = 0;
            }

            let element = document.createElement('div');
            element.classList.add('draggable-demo-product', 'jqx-rc-all', `${counter}DragDrop`);
            element.style.cssText = `left: ${left}px; top: ${top}px`;

            product = products[name];

            element.innerHTML =
                `<div class="jqx-rc-t draggable-demo-product-header jqx-widget-header-${this.theme} jqx-fill-state-normal-${this.theme}">
                      <div class="draggable-demo-product-header-label">${name}</div>
                 </div>
                 <div class="jqx-fill-state-normal-${this.theme} draggable-demo-product-price">
                      Price: <strong>$${product.price}</strong>
                 </div>
                 <img src="./../../../images/t-shirts/${product.pic}" alt=${name} class="jqx-rc-b" />`

            catalog.appendChild(element) 

            let widget: jqwidgets.jqxDragDrop = jqwidgets.createInstance(`.${counter}DragDrop`, 'jqxDragDrop', { dropTarget: $('#cart'), revert: true });

            left += 127;
            counter += 1;

            let widgetChilds = widget.getInstance().element.children;
            widget.addEventHandler('mouseenter', () => {
                $(widgetChilds[1]).fadeTo(100, 0.9);
            });
            widget.addEventHandler('mouseleave', () => {
                $(widgetChilds[1]).fadeTo(100, 0);
            });
            widget.addEventHandler('dropTargetEnter', (event: any) => {
                event.args.target[0].style.border = '2px solid #000';
                this.onCart = true;
                widget.dropAction = 'none';
            });
            widget.addEventHandler('dropTargetLeave', (event: any) => {
                event.args.target[0].style.border = '2px solid #aaa';
                this.onCart = false;
                widget.dropAction ='default';
            });
            widget.addEventHandler('dragEnd', (event: any) => {
                let cartElement = document.getElementById('cart');
                cartElement.style.border = '2px dashed #aaa';
                if (this.onCart) {
                    let price = (<HTMLElement>widgetChilds[1]).innerText.substr(8, 11);
                    let name = (<HTMLImageElement>widgetChilds[2]).alt;
                    this.addItem({ price: price, name: name });
                    this.onCart = false;
                }
            });
            widget.addEventHandler('dragStart', () => {
                let cartElement = document.getElementById('cart');
                cartElement.style.border = '2px solid #aaa';
            });
        }
    }
    addItem(item) {
        let index = this.getItemIndex(item.name);
        let product = item;
        if (index >= 0) {
            let temp = this.cartItems;
            temp[index].count += 1;
            this.cartItems = temp;
            this.updateGridRow(index, this.cartItems[index]);
        } else {
            let id = this.cartItems.length;
            let item = {
                name: product.name,
                count: 1,
                price: product.price,
                index: id,
                remove: '<div style="text-align: center; cursor: pointer; width: 53px;"' +
                'id="draggable-demo-row-' + id + '">X</div>'
            };
            let temp = this.cartItems;
            temp.push(item)
            this.cartItems = temp;
            this.addGridRow(item);
        }
        this.updatePrice(item.price);
    }
    updatePrice(price) {
        this.totalPrice = this.totalPrice + parseInt(price)
        document.getElementById('total').innerHTML = '$ ' + this.totalPrice;
    };
    addGridRow(row) {
        this.myGrid.addrow(null, row);
    };
    updateGridRow(id, row) {
        let rowID = this.myGrid.getrowid(id);
        this.myGrid.updaterow(rowID, row);
    };
    removeGridRow(id) {
        let rowID = this.myGrid.getrowid(id);
        this.myGrid.deleterow(rowID);
    };
    getItemIndex(name) {
        let items = this.cartItems;
        for (let i = 0; i < items.length; i += 1) {
            if (items[i].name === name) {
                return i;
            }
        }
        return -1;
    }

    gridOnCellClick(event: any): void {
        let index = event.args.rowindex;
        if (event.args.datafield == 'remove') {
            let item = this.cartItems[index];
            if (!item) return;
            if (item.count > 1) {
                item.count -= 1;
                this.updateGridRow(index, item);
            }
            else {
                let temp = this.cartItems;
                temp.splice(index, 1);
                this.cartItems = temp;
                this.removeGridRow(index);
            }
            this.updatePrice(-item.price);
        }
    }
}
