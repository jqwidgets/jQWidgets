import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxRibbon, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxribbon';

function App() {
    const myRibbon = React.useRef<JqxRibbon>(null);
    const content = React.useRef<HTMLDivElement>(null);

    const onChange = React.useCallback((event: any) => {
        const checked = event.args.checked;
        myRibbon.current!.setOptions({ mode: checked ? "popup" : "default" });
    }, []);

    const records = React.useCallback(() => {
        const data: any[] = [
            {
                laptops: [
                    { img: 'https://www.jqwidgets.com/react/images/l-16.jpg', ram: '4GB DD3', cpu: 'Intel Core i5-3317U', price: 1899, display: 13.3, hdd: '128GB SSD', model: 'ASUS TAICHI31-CX009H' },
                    { img: 'https://www.jqwidgets.com/react/images/l-17.jpg', ram: '4GB DD3', cpu: 'Intel Core i7-3517U', price: 1799, display: 13.3, hdd: '628GB', model: 'Asus TX300CA-C4024H' },
                    { img: 'https://www.jqwidgets.com/react/images/l-26.gif', ram: '4GB DD3', cpu: 'Intel Core i7-3667U', price: 2699, display: 14.0, hdd: '256GB SSD', model: 'Lenovo Thinkpad X1 Carbon' },
                    { img: 'https://www.jqwidgets.com/react/images/l-29.jpg', ram: '4GB DD3', cpu: 'Intel Core i5-3317U ', price: 1299, display: 11.6, hdd: '128GB SSD', model: 'Sony Vaio Duo' },
                    { img: 'https://www.jqwidgets.com/react/images/l-30.jpg', ram: '4GB DD3', cpu: 'Intel Core i5-3230M', price: 999, display: 15.5, hdd: '256GB SSD', model: 'Sony VAIO' },
                    { img: 'https://www.jqwidgets.com/react/images/l-13.jpg', ram: '4GB DD3', cpu: 'Intel Core i7-3720QM', price: 2999, display: 15.4, hdd: '512GB SSD', model: 'Apple MacBook Pro' }
                ]
            },
            {
                laptops: [
                    { img: 'https://www.jqwidgets.com/react/images/l-14.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3667U', price: 1299, display: 13.3, hdd: '256GB SSD', model: 'Apple MacBook Air' },
                    { img: 'https://www.jqwidgets.com/react/images/l-15.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3632QM', price: 2199, display: 15.4, hdd: '256GB SSD', model: 'Asus ZenBook UX51VZ' },
                    { img: 'https://www.jqwidgets.com/react/images/l-19.jpg', ram: '8GB DD3', cpu: 'Intel Core i5-3210M', price: 1499, display: 15.6, hdd: '750GB', model: 'Samsung Series 7 Chronos' },
                    { img: 'https://www.jqwidgets.com/react/images/l-20.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3720QM', price: 1499, display: 17.3, hdd: '256GB SSD', model: 'HP EliteBook 8770w' },
                    { img: 'https://www.jqwidgets.com/react/images/l-21.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3517U', price: 1499, display: 14.0, hdd: '512GB', model: 'Dell XPS 14' },
                    { img: 'https://www.jqwidgets.com/react/images/l-23.jpg', ram: '8GB DD3', cpu: 'Intel Core i7-3537U', price: 1699, display: 15.6, hdd: '1TB', model: 'Acer Aspire R7-571G' },
                ]
            },
            {
                laptops: [
                    { img: 'https://www.jqwidgets.com/react/images/l-27.jpg', ram: '16GB DD3', cpu: 'Intel Core i5-3317U ', price: 1699, display: 12.5, hdd: '128GB SSD', model: 'Dell XPS Duo 12' },
                    { img: 'https://www.jqwidgets.com/react/images/l-24.jpg', ram: '16GB DD3', cpu: 'Intel Core i7-4500U', price: 1599, display: 15.6, hdd: '256GB SSD', model: 'Acer Aspire V5-573G' },
                    { img: 'https://www.jqwidgets.com/react/images/l-28.png', ram: '16GB DD3', cpu: 'Intel Core i7-3537U', price: 1799, display: 12.5, hdd: '256GB SSD', model: 'Lenovo ThinkPad Twist S230u' },
                    { img: 'https://www.jqwidgets.com/react/images/l-25.jpg', ram: '32GB DD3', cpu: 'Intel Core i7-4700MQ', price: 2199, display: 17.3, hdd: '1TB', model: 'Toshiba Qosmio X70-A-114' },
                    { img: 'https://www.jqwidgets.com/react/images/l-18.gif', ram: '16GB DD3', cpu: 'Intel Core i7-3820QM', price: 2499, display: 15.6, hdd: '1TB', model: 'Lenovo ThinkPad T530' },
                    { img: 'https://www.jqwidgets.com/react/images/l-22.jpg', ram: '32GB DD3', cpu: 'Intel Core i7-4800MQ', price: 3499, display: 17.3, hdd: '750GB', model: 'Dell Alienware 17' }
                ]
            }
        ];

        const source: any = {
            dataType: 'array',
            localData: data
        };

        const dataAdapter: any = new jqx.dataAdapter(source);
        dataAdapter.dataBind();
        return dataAdapter.records;
    }, []);

    const generateContent = React.useCallback(() => {
        const recs = records();
        let ribbonHTML = '';
        for (let j = 0; j < recs.length; j++) {
            const rowData = recs[j];
            const laptops = rowData.laptops;
            let container = '<div style="padding-left: 15px;">';
            for (let i = 0; i < laptops.length; i++) {
                const laptop = laptops[i];
                let item = '<div style="float: left; width: 220px; overflow: hidden; white-space: nowrap; height: 275px;">';
                let image = '<div style="margin: 5px; margin-bottom: 3px;">';
                const imgurl = laptop.img;
                const img = '<img width=160 height=120 style="display: block;" src="' + imgurl + '"/>';
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
                const buy = '<div class="buy" id="buy' + j + i + '" #buy style="margin: 5px; left: -40px; position: relative; margin-left: 50%; margin-bottom: 3px;">Buy</div>';
                item += image;
                item += info;
                item += buy;
                item += '</div>';
                container += item;
            }
            container += '</div>';
            ribbonHTML += container;
        }
        return ribbonHTML;
    }, [records]);

    React.useEffect