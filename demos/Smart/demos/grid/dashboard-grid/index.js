window.onload = function () {
    const dashboard = document.getElementById('dashboard'),
        expandBtn = document.getElementById('expandBtn'),
        collapseBtn = document.getElementById('collapseBtn');

    dashboard.hideBar(0);
    expandBtn.addEventListener('click', () => {
        dashboard.update(0, { size: 240 });
        dashboard.setAttribute('expanded', '');
        document.querySelector('.company-logo-holder img').style.display = 'block';

        let menuTitles = document.querySelectorAll('.menu-title');
        for (let i = 0; i < menuTitles.length; i++) {
            menuTitles[i].style.display = 'block';
        }
    });
    collapseBtn.addEventListener('click', () => {
        dashboard.update(0, { size: 70 });
        dashboard.removeAttribute('expanded');
        document.querySelector('.company-logo-holder img').style.display = 'none';

        let menuTitles = document.querySelectorAll('.menu-title');
        for (let i = 0; i < menuTitles.length; i++) {
            menuTitles[i].style.display = 'none';
        }
    });
}

Smart('#grid', class {
    get properties() {
        return {
            rowHeight: 60,
            dataSource: new Smart.DataAdapter(
                {
                    dataSource: [
                        {
                            'title': 'Fix mdm encryption cert',
                            'author': 'Nancy',
                            'buildNum': 10397,
                            'status': 'in-progress',
                            'branch': 'master',
                            'date': new Date()
                        },
                        {
                            'title': 'Add mc cert - use rotatable secret for every iteration',
                            'author': 'Andrew',
                            'buildNum': 10396,
                            'status': 'testing',
                            'branch': 'develop',
                            'date': new Date(new Date() - 86400000)
                        },
                        {
                            'title': 'Cleanup auth handlers. Use handlers from the service',
                            'author': 'Laura',
                            'buildNum': 10395,
                            'status': 'done',
                            'branch': 'master',
                            'date': new Date(new Date() - 2 * 86400000 + 3600000 + 600000 + 10000)
                        },
                        {
                            'title': 'Make kusto and admin app optional',
                            'author': 'Anne',
                            'buildNum': 10394,
                            'status': 'warning',
                            'branch': 'feature/2-factor-auth',
                            'date': new Date(new Date() - 4 * 86400000 + 3600000 + 700000 + 20000)
                        },
                        {
                            'title': '[Streaming][Bug] Closing stream before injecting',
                            'author': 'Nancy',
                            'buildNum': 10392,
                            'status': 'done',
                            'branch': 'master',
                            'date': new Date(new Date() - 5 * 86400000 + 3600000 + 900000 + 40000)
                        },
                        {
                            'title': 'Fix deployment arm param',
                            'author': 'Andrew',
                            'buildNum': 10391,
                            'status': 'done',
                            'branch': 'master',
                            'date': new Date(new Date() - 6 * 86400000 + 3600000 + 200000 + 20000)
                        },
                        {
                            'title': '[Streaming] Handling oversized payload by finder',
                            'author': 'Andrew',
                            'buildNum': 10390,
                            'status': 'done',
                            'branch': 'feature/some-feature',
                            'date': new Date(new Date() - 7 * 86400000 + 3600000 + 300000 + 40000)
                        },
                        {
                            'title': 'Fixing RDP bug',
                            'author': 'Andrew',
                            'buildNum': 10389,
                            'status': 'error',
                            'branch': 'master',
                            'date': new Date(new Date() - 9 * 86400000 + 3600000 + 100000 + 10000)
                        },
                        {
                            'title': 'Fix KV URL resolution',
                            'author': 'Laura',
                            'buildNum': 10388,
                            'status': 'done',
                            'branch': 'hotfix/view-perf',
                            'date': new Date(new Date() - 10 * 86400000 + 3600000 + 200000 + 20000)
                        },
                        {
                            'title': 'Fix debug console output when running unit tests',
                            'author': 'Anne',
                            'buildNum': 10387,
                            'status': 'done',
                            'branch': 'master',
                            'date': new Date(new Date() - 19 * 86400000)
                        },
                        {
                            'title': 'Fix mdn encryption cert',
                            'author': 'Nancy',
                            'buildNum': 10386,
                            'status': 'in-progress',
                            'branch': 'master',
                            'date': new Date(new Date() - 25 * 86400000)
                        },
                        {
                            'title': 'KV URL resolution implementation',
                            'author': 'Andrew',
                            'buildNum': 10385,
                            'status': 'error',
                            'branch': 'master',
                            'date': new Date(new Date() - 30 * 86400000)
                        },
                        {
                            'title': 'RDP implementation',
                            'author': 'Laura',
                            'buildNum': 10384,
                            'status': 'warning',
                            'branch': 'master',
                            'date': new Date(new Date() - 37 * 86400000)
                        },
                        {
                            'title': 'RDP implementation',
                            'author': 'Laura',
                            'buildNum': 10383,
                            'status': 'testing',
                            'branch': 'master',
                            'date': new Date(new Date() - 40 * 86400000)
                        },
                        {
                            'title': '[Streaming][Bug] Stream bugfixes',
                            'author': 'Nancy',
                            'buildNum': 10382,
                            'status': 'done',
                            'branch': 'master',
                            'date': new Date(new Date() - 50 * 86400000)
                        }
                    ],
                    dataFields:
                        [
                            'author: string',
                            'title: string',
                            'buildNum: string',
                            'status: string',
                            'branch: string',
                            'date: string'
                        ]
                }),
            columns: [
                {
                    label: 'Commit', dataField: 'Photo', width: '5%', cellsVerticalAlign: 'middle', verticalAlign: 'middle', align: 'center', cellsAlign: 'center', allowHide: false, formatFunction(settings) {
                        settings.template = '<img style="width: 32px" class="logo" src="../../images/phonebook/' + settings.row.data.author + '.png"/>';
                    }
                },
                {
                    label: '', dataField: 'author', width: '45%', formatFunction(settings) {
                        settings.template = '<span class="commit-title">' + settings.row.data.title + '</span><span class="author-name">' + settings.row.data.author + '</span>';
                    }
                },
                {
                    label: '', icon: 'fa-thumb-tack', width: '5%', showIcon: true, cellsAlign: 'right', align: 'right', formatFunction(settings) {
                        settings.template = '<span class="custom-icon fa-thumb-tack rotate45deg"></span>';
                    }
                },
                {
                    label: 'Build #', dataField: 'buildNum', width: '10%', formatFunction(settings) {
                        if (settings.row.data.status === 'in-progress') {
                            settings.template = '<div class="normal-circle"></div>' + settings.row.data.buildNum;
                        }
                        else if (settings.row.data.status === 'done') {
                            settings.template = '<div class="custom-icon fa-check-circle"></div>' + settings.row.data.buildNum;
                        }
                        else if (settings.row.data.status === 'warning') {
                            settings.template = '<div class="custom-icon fa-exclamation-circle"></div>' + settings.row.data.buildNum;
                        }
                        else if (settings.row.data.status === 'error') {
                            settings.template = '<div class="custom-icon fa-times-circle"></div>' + settings.row.data.buildNum;
                        }
                        else if (settings.row.data.status === 'testing') {
                            settings.template = '<div class="dashed-circle"></div>' + settings.row.data.buildNum;
                        }
                        else {
                            settings.template = settings.row.data.buildNum;
                        }
                    }
                },
                { label: 'Branch', width: '20%', cellsAlign: 'center', align: 'center', dataField: 'branch' },
                {
                    label: 'Date/Time', dataField: 'date', width: '15%', align: 'right', cellsAlign: 'right', formatFunction(settings) {
                        const isToday = (someDate) => {
                            const today = new Date();
                            return someDate.getDate() === today.getDate() &&
                                someDate.getMonth() === today.getMonth() &&
                                someDate.getFullYear() === today.getFullYear()
                        }

                        const calculateDaysDifference = (someDate) => {
                            return Math.round((new Date() - someDate) / (1000 * 60 * 60 * 24));
                        }

                        let commitDate = new Date(settings.row.data.date);
                        if (isToday(commitDate)) {
                            settings.template = commitDate.getHours() + ':' + commitDate.getMinutes();
                        }
                        else if (calculateDaysDifference(commitDate) <= 6) {
                            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                            settings.template = days[commitDate.getDay()] + ', ' + commitDate.getHours() + ':' + commitDate.getMinutes();
                        }
                        else {
                            let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                            settings.template = commitDate.getDate() + ' ' + months[commitDate.getMonth()] + ', ' + commitDate.getHours() + ':' + commitDate.getMinutes();
                        }
                    }
                }
            ]
        }
    }
});
