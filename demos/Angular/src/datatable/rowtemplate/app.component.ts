import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None

})

export class AppComponent {
    @ViewChild('productNumber', { static: false }) productNumber: ElementRef;

    itemsInCart: number = 0;

    data = [
        {
            laptops:
            [
                { img: './../../../images/l-13.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3720QM', price: 2999, display: 15.4, hdd: '512GB SSD', model: 'Apple MacBook Pro' },
                { img: './../../../images/l-14.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3667U', price: 1299, display: 13.3, hdd: '256GB SSD', model: 'Apple MacBook Air' },
                { img: './../../../images/l-15.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3632QM', price: 2199, display: 15.4, hdd: '256GB SSD', model: 'Asus ZenBook UX51VZ' }
            ]
        },
        {
            laptops:
            [
                { img: './../../../images/l-16.jpg', ram: '4GB DD3', cpu: 'Intel Core i5-3317U', price: 1899, display: 13.3, hdd: '128GB SSD', model: 'ASUS TAICHI31-CX009H' },
                { img: './../../../images/l-17.jpg', ram: '4GB DD3', cpu: 'Intel Core i7-3517U', price: 1799, display: 13.3, hdd: '628GB', model: 'Asus TX300CA-C4024H' },
                { img: './../../../images/l-18.gif', ram: '16GB DD3', cpu: 'Intel Core i7-3820QM', price: 2499, display: 15.6, hdd: '1TB', model: 'Lenovo ThinkPad T530' }
            ]
        },
        {
            laptops:
            [
                { img: './../../../images/l-19.jpg', ram: '8GB DD3', cpu: 'Intel Core i5-3210M', price: 1499, display: 15.6, hdd: '750GB', model: 'Samsung Series 7 Chronos' },
                { img: './../../../images/l-20.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3720QM', price: 1499, display: 17.3, hdd: '256GB SSD', model: 'HP EliteBook 8770w' },
                { img: './../../../images/l-21.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3517U', price: 1499, display: 14.0, hdd: '512GB', model: 'Dell XPS 14' }
            ]
        },
        {
            laptops:
            [
                { img: './../../../images/l-22.jpg', ram: '32GB DD3', cpu: 'Intel Core i7-4800MQ', price: 3499, display: 17.3, hdd: '750GB', model: 'Dell Alienware 17' },
                { img: './../../../images/l-23.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3537U', price: 1699, display: 15.6, hdd: '1TB', model: 'Acer Aspire R7-571G' },
                { img: './../../../images/l-24.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-4500U', price: 1599, display: 15.6, hdd: '256GB SSD', model: 'Acer Aspire V5-573G' }
            ]
        },
        {
            laptops:
            [
                { img: './../../../images/l-25.jpg', ram: '32GB DD3', cpu: 'Intel Core i7-4700MQ', price: 2199, display: 17.3, hdd: '1TB', model: 'Toshiba Qosmio X70-A-114' },
                { img: './../../../images/l-26.gif', ram: '4GB DD3', cpu: 'Intel Core i7-3667U', price: 2699, display: 14.0, hdd: '256GB SSD', model: 'Lenovo Thinkpad X1 Carbon' },
                { img: './../../../images/l-27.jpg', ram: '8GB DD3', cpu: 'Intel Core i5-3317U ', price: 1699, display: 12.5, hdd: '128GB SSD', model: 'Dell XPS Duo 12' }
            ]
        },
        {
            laptops:
            [
                { img: './../../../images/l-28.png', ram: '8GB DD3', cpu: 'Intel Core i7-3537U', price: 1799, display: 12.5, hdd: '256GB SSD', model: 'Lenovo ThinkPad Twist S230u' },
                { img: './../../../images/l-29.jpg', ram: '4GB DD3', cpu: 'Intel Core i5-3317U ', price: 1299, display: 11.6, hdd: '128GB SSD', model: 'Sony Vaio Duo' },
                { img: './../../../images/l-30.jpg', ram: '4GB DD3', cpu: 'Intel Core i5-3230M', price: 999, display: 15.5, hdd: '256GB SSD', model: 'Sony VAIO' }
            ]
        }
    ];

    source: any =
    {
        localData: this.data,
        dataType: 'array'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    rendered = (): void => {

        let buttons = document.getElementsByClassName('buy');

        jqwidgets.createInstance('.buy', 'jqxButton', { value: 'Buy', width: 80 });

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                this.itemsInCart++;
                this.productNumber.nativeElement.innerHTML = `${this.itemsInCart} products`;
            });
        }

    };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

  columns: any[] =
  [
      {
          text: 'Products', align: 'left', dataField: 'model',
          cellsRenderer: (row: number, column: string, value: any, rowData: any): string => {
              const laptops = rowData.laptops;
              let container = '';
              for (let i = 0; i < laptops.length; i++) {
                  let item = '<div style="float: left; width: 33%; height: 265px;">';
                  const image = '<img class="center" width=160 height=120 style="display: block;" src="' + laptops[i].img + '"/>';
                  let info = '<div class="center" style="display: inline-block;">';
                  info += '<div><i>' + laptops[i].model + '</i></div>';
                  info += '<div>Price: $' + laptops[i].price + '</div>';
                  info += '<div>RAM: ' + laptops[i].ram + '</div>';
                  info += '<div>HDD: ' + laptops[i].hdd + '</div>';
                  info += '<div>CPU: ' + laptops[i].cpu + '</div>';
                  info += '<div>Display: ' + laptops[i].display + '</div>';
                  info += '</div>';
                  const button = '<div class="buy center" ></div>';
                  item += image;
                  item += info;
                  item += button;
                  item += '</div>';
                  container += item;
              }

              return container;
          }
      }
  ];

}