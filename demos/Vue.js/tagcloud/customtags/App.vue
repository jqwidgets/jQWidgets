<template>
    <JqxTagCloud ref="myTagCloud"
        :width="600" :source="dataAdapter" :tagRenderer="tagRenderer"
        :displayMember="'countryName'" :valueMember="'technologyRating'">
    </JqxTagCloud>
</template>

<script>
    import JqxTagCloud from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtagcloud.vue';

    export default {
        components: {
            JqxTagCloud
        },
        beforeCreate: function () {
            const unemploymentRate =
                [
                    { countryName: 'Australia', technologyRating: 35, url: 'test' },
                    { countryName: 'United States', technologyRating: 60 },
                    { countryName: 'Germany', technologyRating: 55 },
                    { countryName: 'Brasil', technologyRating: 20 },
                    { countryName: 'United Kingdom', technologyRating: 50 },
                    { countryName: 'Japan', technologyRating: 80 }
                ];

            const source =
                {
                    localdata: unemploymentRate,
                    datatype: 'array',
                    datafields: [
                        { name: 'countryName' },
                        { name: 'technologyRating' }
                    ]
                };

            this.dataAdapter = new jqx.dataAdapter(source);
        },
        methods: {
            tagRenderer: function (record, minValue, range) {
                const el = document.createElement('span');
                el.innerText = record.countryName;

                const img = document.createElement('img');
                img.setAttribute('style', 'width: 20px; height: 20px; margin-right: 10px; margin-left: 3px;');
                img.src = '../../../images/cut-26.png';

                img.addEventListener('click', (event) => {
                    const liElements = this.$refs.myTagCloud.$el.querySelectorAll('li');

                    for (let i = 0; i < liElements.length; i++) {
                        if (liElements[i].innerText === (event.target).parentElement.innerText) {
                            this.$refs.myTagCloud.removeAt(i);
                        }
                    }

                    event.preventDefault();
                    event.stopPropagation();
                });

                el.appendChild(img);
                return el;
            }
        }
    }
</script>