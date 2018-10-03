<template>
    <div id="shop" class="draggable-demo-shop jqx-rc-all">
        <div id="catalog" class="draggable-demo-catalog jqx-rc-all"></div>
        <div class="draggable-demo-cart-wrapper jqx-rc-all">
            <div class="draggable-demo-title jqx-rc-t">Shopping Cart</div>
            <div id="cart" class="draggable-demo-cart jqx-rc-all">

                <JqxGrid ref="myGrid" @cellclick="gridOnCellClick($event)"
                         :width="230" :height="335" :columns="gridColumns"
                         :selectionmode="'none'" :keyboardnavigation="false">
                </JqxGrid>

            </div>
            <div class="draggable-demo-total">Total: <strong><span id="total">$ 0</span></strong></div>
        </div>
        <div style="clear: both"></div>
    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxDragDrop from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdragdrop.vue";

    export default {
        components: {
            JqxGrid
        },
        data: function () {
            return {
                gridColumns: [
                    { text: 'Item', dataField: 'name', width: 120 },
                    { text: 'Count', dataField: 'count', width: 50 },
                    { text: 'Remove', dataField: 'remove', width: 60 }
                ]
            }
        },
        beforeCreate: function () {
            this.theme = jqx.theme;
            this.cartItems = [];
            this.totalPrice = 0;
            this.onCart = false;
        },
        mounted: function () {
            this.productsRendering();
            this.addClasses();
        },
        methods: {
            updatePrice: function(price) {
                this.totalPrice = this.totalPrice + parseInt(price)
                document.getElementById('total').innerHTML = '$ ' + this.totalPrice;
            },
            addGridRow: function(row) {
                this.$refs.myGrid.addrow(null, row);
            },
            updateGridRow: function (id, row) {
                let rowID = this.$refs.myGrid.getrowid(id);
                this.$refs.myGrid.updaterow(rowID, row);
            },
            getItemIndex: function(name) {
                let items = this.cartItems;
                for (let i = 0; i < items.length; i += 1) {
                    if (items[i].name === name) {
                        return i;
                    }
                }
                return -1;
            },
            addItem: function (item) {
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
            },
            addClasses: function () {
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
                        shop[i].style.backgroundColor = '#555';
                    }

                    let product = document.getElementsByClassName('draggable-demo-product');
                    for (let i = 0; i < product.length; i++) {
                        product[i].style.backgroundColor = '#999';
                    }
                }
            },
            productsRendering: function () {
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
                      <img src="../../../images/t-shirts/${product.pic}" alt=${name} class="jqx-rc-b" />`

                    catalog.appendChild(element)

                    let widget = jqwidgets.createInstance(`.${counter}DragDrop`, 'jqxDragDrop', { dropTarget: $('#cart'), revert: true });

                    left += 127;
                    counter += 1;

                    let widgetChilds = widget.getInstance().element.children;
                    widget.addEventHandler('mouseenter', () => {
                        $(widgetChilds[1]).fadeTo(100, 0.9);
                    });
                    widget.addEventHandler('mouseleave', () => {
                        $(widgetChilds[1]).fadeTo(100, 0);
                    });
                    widget.addEventHandler('dropTargetEnter', (event) => {
                        event.args.target[0].style.border = '2px solid #000';
                        this.onCart = true;
                        widget.dropAction = 'none';
                    });
                    widget.addEventHandler('dropTargetLeave', (event) => {
                        event.args.target[0].style.border = '2px solid #aaa';
                        this.onCart = false;
                        widget.dropAction = 'default';
                    });
                    widget.addEventHandler('dragEnd', (event) => {
                        let cartElement = document.getElementById('cart');
                        cartElement.style.border = '2px dashed #aaa';
                        if (this.onCart) {
                            let price = (widgetChilds[1]).innerText.substr(8, 11);
                            let name = (widgetChilds[2]).alt;
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
        }
    };
</script>

<style>
    .draggable-demo-cart {
        border: 2px dashed #aaa;
        padding: 5px;
        width: 232px;
        margin: auto;
    }

    .draggable-demo-shop {
        border: 1px solid #666;
        width: 665px;
        padding: 5px;
    }

    .draggable-demo-catalog {
        position: relative;
        width: 397px;
        border: 1px solid #bbb;
        height: 457px;
        float: left;
    }

    .draggable-demo-product-image {
        width: 150px;
    }

    .draggable-demo-product {
        padding: 5px;
        border: 1px solid #888;
        width: 115px;
        height: 135px;
        background-color: #fff;
        position: absolute;
        margin: 5px;
    }

    .draggable-demo-product img {
        width: 113px;
        border: 1px solid #aaa;
        border-top-width: 0px;
        outline-width: 15px;
    }

    .draggable-demo-product-header {
        border: 1px solid #888;
        height: 20px;
        border-bottom-width: 0px;
        font-size: 13px;
        position: relative;
        text-align: center;
    }

    .draggable-demo-product-header-label {
        margin-top: 3px;
    }

    .draggable-demo-product-price {
        position: absolute;
        top: 124px;
        left: 6px;
        width: 113px;
        text-align: center;
        font-family: Verdana;
        font-size: 11px;
        display: none;
        height: 16px;
        border-top: 1px solid #888;
        border-bottom: 1px solid #fff;
    }

    .draggable-demo-title {
        font-size: 23px;
        font-family: Verdana;
        text-align: center;
        padding: 7px;
        margin: 5px;
        font-weight: bold;
        border: 1px solid #aaa;
    }

    .draggable-demo-cart-wrapper {
        float: right;
        border: 1px solid #aaa;
        height: 457px;
        width: 260px;
    }

    .draggable-demo-total {
        font-size: 17px;
        font-family: Verdana;
        margin: 6px;
        margin-top: 7px;
        padding: 7px;
    }
</style>