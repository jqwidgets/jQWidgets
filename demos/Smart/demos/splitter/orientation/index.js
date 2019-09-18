window.onload = function () {
    const splitter = document.querySelector('smart-splitter'),
        script = document.createElement('script'),
        contentHolder = document.getElementById('contentHolder'),
        progressHolder = document.getElementById('progressHolder');



    const tabs = document.getElementById('tabs'),
        initialized = [true, false, false],
        mapCoordinates = [{ lat: 40.7590403, long: -74.0392705 }, { lat: 22.257983, long: 114.1696828 }, { lat: -8.409518, long: 115.188919 }];

    tabs.addEventListener('change', function (event) {
        const index = event.detail.index,
            contentHolder = document.getElementById('tabsContentHolder');

        if (index === 0) {
            contentHolder.innerHTML = '<div id="map-canvas-0"></div>'; //New York
        }
        else if (index === 1) {
            contentHolder.innerHTML = '<div id="map-canvas-1"></div>'; //Hong Kong
        }
        else {
            contentHolder.innerHTML = '<div id="map-canvas-2"></div>'; //Bali
        }

        new google.maps.Map(document.getElementById('map-canvas-' + index), {
            center: new google.maps.LatLng(mapCoordinates[index].lat, mapCoordinates[index].long),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

    });

    contentHolder.innerHTML = document.getElementById('waterText').innerHTML;

    document.getElementById('chooser').addEventListener('change', function (event) {

        if (event.detail.label.toLowerCase() === 'water') {
            contentHolder.innerHTML = document.getElementById('waterText').innerHTML;
            progressHolder.value = 71;
        }
        else if (event.detail.label.toLowerCase() === 'soil') {
            contentHolder.innerHTML = document.getElementById('soilText').innerHTML;
            progressHolder.value = 29;
        }
        else {
            contentHolder.innerHTML = document.getElementById('airText').innerHTML;
            progressHolder.value = 100;
        }
    });

    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDLNo8WFhrz_4zuLdl423WX9h5Kh0SedHQ&callback=initializeMaps';
    document.body.appendChild(script);
}