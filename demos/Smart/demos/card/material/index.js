window.onload = function () {
    const charts = document.getElementById('charts'),
       marketing = document.getElementById('marketing'),
       conversion = document.getElementById('conversion'),
       impressions = document.getElementById('impressions'),
       sales = document.getElementById('sales'),
       design = document.getElementById('design'),
       clicks = document.getElementById('clicks');


    charts.dataSource = {
        title: 'Progress',
        image1: '../../images/card-demo-chart-1.png',
        image2: '../../images/card-demo-chart-2.png',
        image3: '../../images/card-demo-chart-3.png'
    };

    charts.contentHandler = function (card) {
        const pager = card.querySelector('smart-pager'),
            slides = card.querySelectorAll('.slide');

        card.querySelector('smart-pager').addEventListener('change', function (event) {
            for (let i = 0; i < slides.length; i++) {
                i === event.detail.index ? slides[i].classList.remove('hidden') : slides[i].classList.add('hidden');
            }
        });
    }

    marketing.dataSource = {
        title: 'Marketing',
        content: '123.4M'
    };

    conversion.dataSource = {
        title: 'Conversion',
        content: '537',
        percentage: '+22',
        image: '../../images/card-demo-chart-4.png'
    };

    impressions.dataSource = {
        title: 'Impressions',
        content: '123.4M',
        percentage: '+12.3',
        image: '../../images/card-demo-chart-5.png'
    };

    sales.dataSource = {
        title: 'Sales',
        content: '345.8M'
    };

    design.dataSource = {
        title: 'Design',
        content: '345.2M'
    };

    clicks.dataSource = {
        title: 'Clicks',
        content: '537'
    };
}