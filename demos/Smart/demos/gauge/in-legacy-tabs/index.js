$(document).ready(function () {
    $('#smartTabs').smartTabs({
        width: 350, height: 350,
        initTabContent: function (tab) {
            switch (tab) {
                case 0:
                    const gauge1 = document.createElement('smart-gauge');
                    gauge1.min = -1000;
                    gauge1.max = 1000;

                    document.getElementById('gauge1Container').appendChild(gauge1);
                    break;
                case 1:
                    const gauge2 = document.createElement('smart-gauge');
                    gauge2.analogDisplayType = 'line';
                    gauge2.digitalDisplay = true;
                    gauge2.value = 80;

                    document.getElementById('gauge2Container').appendChild(gauge2);
                    break;
            }
        }
    });
});