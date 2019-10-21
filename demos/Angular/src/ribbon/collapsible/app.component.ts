import { Component, ViewChild, AfterViewInit, ViewEncapsulation, ElementRef } from '@angular/core';

import { jqxRibbonComponent } from 'jqwidgets-ng/jqxribbon';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxRibbon', { static: false }) jqxRibbon: jqxRibbonComponent;
    @ViewChild('content', { static: false }) content: ElementRef;

    ngAfterViewInit() {
        this.content.nativeElement.innerHTML = this.generateContent();
        let itemsInCart = 0;
        let allBuyButtons = document.getElementsByClassName('buy');

        for (let i = 0; i < allBuyButtons.length; i++) {
            let currentButton = allBuyButtons[i];
            let currentID = currentButton.id;

            let currentBuyButton: jqwidgets.jqxButton = jqwidgets.createInstance('#' + currentID, 'jqxButton', {});

            currentBuyButton.addEventHandler('click', function () {
                itemsInCart += 1;
                document.getElementsByClassName('cart-top')[0].innerHTML = '<p>' + itemsInCart + ' products</p>';
            });
        }

        this.jqxRibbon.createComponent();
    }

    generateContent(): string {
        let records = this.records();
        let ribbonHTML = '';
        for (let j = 0; j < records.length; j++) {
            let rowData = records[j];
            let laptops = rowData.laptops;
            let container = '<div style="padding-left: 15px;">';
            for (let i = 0; i < laptops.length; i++) {
                let laptop = laptops[i];
                let item = '<div style="float: left; width: 220px; overflow: hidden; white-space: nowrap; height: 275px;">';
                let image = '<div style="margin: 5px; margin-bottom: 3px;">';
                let imgurl = laptop.img;
                let img = '<img width=160 height=120 style="display: block;" src="' + imgurl + '"/>';
                image += img;
                image += '</div>';
                let info = '<div style="margin: 5px; margin-left: 20px; margin-bottom: 3px;">';
                info += '<div><i>' + laptop.model + '</i></div>';
                info += '<div>Price: $' + laptop.price + '</div>';
                info += '<div>RAM: ' + laptop.ram + '</div>';
                info += '<div>HDD: ' + laptop.hdd + '</div>';
                info += '<div>CPU: ' + laptop.cpu + '</div>';
                info += '<div>Display: ' + laptop.display + '</div>';
                info += '</div>';
                let buy = '<div class="buy" id="buy' + j + i + '" #buy style="margin: 5px; left: -40px; position: relative; margin-left: 50%; margin-bottom: 3px;">Buy</div>';

                item += image;
                item += info;
                item += buy;
                item += '</div>';
                container += item;
            }

            container += '</div>';
            ribbonHTML += container;
        };

        return ribbonHTML;
    };

    data: any[] = [
        {
            laptops:
            [
                { img: './../../../images/l-16.jpg', ram: '4GB DD3', cpu: 'Intel Core i5-3317U', price: 1899, display: 13.3, hdd: '128GB SSD', model: 'ASUS TAICHI31-CX009H' },
                { img: './../../../images/l-17.jpg', ram: '4GB DD3', cpu: 'Intel Core i7-3517U', price: 1799, display: 13.3, hdd: '628GB', model: 'Asus TX300CA-C4024H' },
                { img: './../../../images/l-26.gif', ram: '4GB DD3', cpu: 'Intel Core i7-3667U', price: 2699, display: 14.0, hdd: '256GB SSD', model: 'Lenovo Thinkpad X1 Carbon' },
                { img: './../../../images/l-29.jpg', ram: '4GB DD3', cpu: 'Intel Core i5-3317U ', price: 1299, display: 11.6, hdd: '128GB SSD', model: 'Sony Vaio Duo' },
                { img: './../../../images/l-30.jpg', ram: '4GB DD3', cpu: 'Intel Core i5-3230M', price: 999, display: 15.5, hdd: '256GB SSD', model: 'Sony VAIO' },
                { img: './../../../images/l-13.jpg', ram: '4GB DD3', cpu: 'Intel Core i7-3720QM', price: 2999, display: 15.4, hdd: '512GB SSD', model: 'Apple MacBook Pro' }
            ]
        },
        {
            laptops:
            [
                { img: './../../../images/l-14.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3667U', price: 1299, display: 13.3, hdd: '256GB SSD', model: 'Apple MacBook Air' },
                { img: './../../../images/l-15.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3632QM', price: 2199, display: 15.4, hdd: '256GB SSD', model: 'Asus ZenBook UX51VZ' },
                { img: './../../../images/l-19.jpg', ram: '8GB DD3', cpu: 'Intel Core i5-3210M', price: 1499, display: 15.6, hdd: '750GB', model: 'Samsung Series 7 Chronos' },
                { img: './../../../images/l-20.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3720QM', price: 1499, display: 17.3, hdd: '256GB SSD', model: 'HP EliteBook 8770w' },
                { img: './../../../images/l-21.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3517U', price: 1499, display: 14.0, hdd: '512GB', model: 'Dell XPS 14' },
                { img: './../../../images/l-23.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3537U', price: 1699, display: 15.6, hdd: '1TB', model: 'Acer Aspire R7-571G' },
            ]
        },
        {
            laptops:
            [
                { img: './../../../images/l-27.jpg', ram: '16GB DD3', cpu: 'Intel Core i5-3317U ', price: 1699, display: 12.5, hdd: '128GB SSD', model: 'Dell XPS Duo 12' },
                { img: './../../../images/l-24.jpg', ram: '16GB DD3', cpu: 'Intel Core i7-4500U', price: 1599, display: 15.6, hdd: '256GB SSD', model: 'Acer Aspire V5-573G' },
                { img: './../../../images/l-28.png', ram: '16GB DD3', cpu: 'Intel Core i7-3537U', price: 1799, display: 12.5, hdd: '256GB SSD', model: 'Lenovo ThinkPad Twist S230u' },
                { img: './../../../images/l-25.jpg', ram: '32GB DD3', cpu: 'Intel Core i7-4700MQ', price: 2199, display: 17.3, hdd: '1TB', model: 'Toshiba Qosmio X70-A-114' },
                { img: './../../../images/l-18.gif', ram: '16GB DD3', cpu: 'Intel Core i7-3820QM', price: 2499, display: 15.6, hdd: '1TB', model: 'Lenovo ThinkPad T530' },
                { img: './../../../images/l-22.jpg', ram: '32GB DD3', cpu: 'Intel Core i7-4800MQ', price: 3499, display: 17.3, hdd: '750GB', model: 'Dell Alienware 17' }
            ]
        }
    ];

    source: any =
    {
        localData: this.data,
        dataType: 'array'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    records(): any {
        this.dataAdapter.dataBind();
        return this.dataAdapter.records;
    };

    change(event: any): void {
        let checked = event.args.checked;
        this.jqxRibbon.mode(checked ? "popup" : "default");
    };
}