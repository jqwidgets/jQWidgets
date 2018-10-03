<template>
    <JqxTabs
        :width="getWidth" :height="400" :initTabContent="initTabContent">
        <ul style='margin-left: 20px;'>
            <li>Map</li>
            <li>Information</li>
        </ul>
        <div>
            <div ref="map" style="width: 100%; height: 100%;"></div>
        </div>
        <div>
            The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of
            Cheops) is the oldest and largest of the three pyramids in the Giza Necropolis bordering
            what is now El Giza, Egypt. It is the oldest of the Seven Wonders of the Ancient
            World, and the only one to remain largely intact.
        </div>
    </JqxTabs>
</template>

<script>
    import JqxTabs from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtabs.vue';

    export default {
        components: {
            JqxTabs
        },     
        data: function () {
            return {
                getWidth: '90%'
            }
        },
        methods: {
            initTabContent: function (tab) {
                if (tab === 0) {
                    google.maps.event.addDomListener(window, 'load', this.initialize);
                }
            },
            initialize: function () {
                const directionsService = new google.maps.DirectionsService;
                const directionsDisplay = new google.maps.DirectionsRenderer;
                const map = new google.maps.Map(this.$refs.map, {
                    zoom: 17,
                    center: { lat: 29.979234, lng: 31.134202 },
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });
                directionsDisplay.setMap(map);
            } 
        }
    }
</script>