<template>
    <div class="jqx-rc-all slider-demo-main">
        <div id="slider-demo-header" class="jqx-rc-t slider-demo-header">
            <div class="slider-demo-header-content">
                Precious Cars
            </div>
        </div>
        <div class="jqx-rc-b slider-demo-content">
            <div class="jqx-rc-all slider-demo-content-inner">
                <div class="jqx-rc-all slider-demo-content-container">
                    <div id="navigationContainer" class="slider-demo-content-navigation">
                        <img src="../../../images/previous.png" class="slider-demo-navigation-item" alt="Previous"
                             title="Previous" id="previousButton" />
                        <img src="../../../images/play.png" class="slider-demo-navigation-item" alt="Play" title="Play"
                             id="playButton" />
                        <img src="../../../images/stop.png" class="slider-demo-navigation-item" alt="Stop" title="Stop"
                             id="stopButton" />
                        <img src="../../../images/next.png" class="slider-demo-navigation-item" alt="Next" title="Next"
                             style="margin-right: 3px" id="nextButton" />
                    </div>
                    <div id="slider-demo-content-0" style="display: block">
                        <div class="slider-demo-content-image-border">
                            <img src="../../../images/mercedes.jpg" alt="Mercedes" />
                        </div>
                        <div class="slider-demo-content-info">
                            <span class="slider-demo-info-header">Brabus Black Baron</span>
                            <div class="slider-demo-info-content">
                                Brabus will show its Black Baron E V12, based on the 2010 Mercedes-Benz E63 AMG,
                                at the 2009 Frankfurt Motor Show next week. Visually, Brabus Black Baron E V12
                                gets a new engine ventilation system, new front quarter panels, an upgraded front
                                bumper, new side skirts, a trunk mounted spoiler, new front quarter panels and awkward
                                looking rear-wheel covers.
                            </div>
                        </div>
                    </div>
                    <div id="slider-demo-content-1" style="display: none">
                        <div class="slider-demo-content-image-border">
                            <img src="../../../images/jaguar.jpg" alt="Jaguar" />
                        </div>
                        <div class="slider-demo-content-info">
                            <span class="slider-demo-info-header">Jaguar XFR</span>
                            <div class="slider-demo-info-content">
                                The Jaguar XF (type (X250) is a mid-size luxury car / sports saloon produced by
                                British car manufacturer Jaguar. The car, which replaced the Jaguar S-Type, was
                                launched at the 2007 Frankfurt Motor Show following the public showing of the C-XF
                                concept in January 2007 at the North American International Auto Show.
                            </div>
                        </div>
                    </div>
                    <div id="slider-demo-content-2" style="display: none">
                        <div class="slider-demo-content-image-border">
                            <img src="../../../images/ferrari.jpg" alt="Ferrari" />
                        </div>
                        <div class="slider-demo-content-info">
                            <span class="slider-demo-info-header">Ferrari Enzo</span>
                            <div class="slider-demo-info-content">
                                The Enzo was designed by Japanese Pininfarina head Ken Okuyama was initially introduced
                                at the 2002 Motor Show in Paris and had a limited number of units priced at $ 659,330.
                                Pininfarina wanted a car the will be entirely different from the usual approach
                                used for its predecessors (GTO, F40 and 50).
                            </div>
                        </div>
                    </div>
                    <div id="slider-demo-content-3" style="display: none">
                        <div class="slider-demo-content-image-border">
                            <img src="../../../images/lamborgini.jpg" alt="Lamborgini" />
                        </div>
                        <div class="slider-demo-content-info">
                            <span class="slider-demo-info-header">Lamborghini Gallardo</span>
                            <div class="slider-demo-info-content">
                                The Lamborghini Gallardo is a sports car built by Lamborghini. The Gallardo is Lamborghini's
                                most-produced model to date, with over 10,000 built in its first seven years of
                                production. The Gallardo offers two choices of transmissions, H-Box and an advanced
                                six-speed electro-hydraulically controlled semi-automatic robotized manual.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slider-demo-slider-container">
                <JqxSlider ref="mySlider"
                    @change="change($event)"
                    :height="250" :width="36" :min="0" :max="3"
                    :orientation="'vertical'" :ticksFrequency="1"           
                    :value="0" :tooltip="false" :mode="'fixed'">                        
                </JqxSlider>
            </div>
        </div>
    </div>
</template>

<script>
    import JqxSlider from "jqwidgets-scripts/jqwidgets-vue/vue_jqxslider.vue";

    export default {
        components: {
            JqxSlider
        },
        data: function () {
            return {
                config:
                {
                    currentSlide: 0, 
                    timeOut: null,     
                    locked: false,
                    contentContainerSelector: 'slider-demo-content-'
                }
            }
        },
        mounted: function () {
            this.init();
        },
        methods: {
            init: function () {
                this.attachEventListeners();
                this.startupConfig();
            },
            attachEventListeners: function () {
                const navigationContainer = document.querySelector('#navigationContainer');
                const nextButton = document.querySelector('#nextButton');
                const previousButton = document.querySelector('#previousButton');
                const playButton = document.querySelector('#playButton');
                const stopButton = document.querySelector('#stopButton');

                navigationContainer.addEventListener('mouseenter', () => {
                    let loop = 0;
                    const interval = setInterval(() => {
                        navigationContainer.style.opacity = String(loop);
                        loop += 0.2;
                        if (loop >= 1) {
                            clearInterval(interval);
                            navigationContainer.style.opacity = String(1);
                        }
                    }, 50);
                });

                navigationContainer.addEventListener('mouseleave', () => {
                    let loop = 1;
                    const interval = setInterval(() => {
                        navigationContainer.style.opacity = String(loop);
                        loop -= 0.2;
                        if (loop <= 0.3) {
                            clearInterval(interval);
                            navigationContainer.style.opacity = String(0.1);
                        }
                    }, 50);
                });

                nextButton.addEventListener('click', () => {
                    this.$refs.mySlider.incrementValue();
                });

                previousButton.addEventListener('click', () => {
                    this.$refs.mySlider.decrementValue();
                });

                playButton.addEventListener('click', () => {
                    if (!this.config.timeOut) {
                        this.startSlideShow();
                    }
                });

                stopButton.addEventListener('click', () => {
                    this.stopSlideShow();
                });
            },
            startupConfig: function () {
                const navigationContainer = document.querySelector('#navigationContainer');
                navigationContainer.style.opacity = String(0.1);
            },
            startSlideShow : function () {
                this.config.timeOut = setTimeout(() => {
                    this.startSlideShow();
                    const slider = this.$refs.mySlider;
                    const currentValue = slider.value,
                        max = slider.max,
                        min = slider.min;
                    if (currentValue < max) {
                        slider.incrementValue();
                    } else {
                        slider.setValue(min);
                    }
                }, 2000);
            },
            stopSlideShow : function () {
                clearTimeout(this.config.timeOut);
                this.config.timeOut = null;
            },
            hideCurrentSlide: function () {
                const selector = '#' + this.config.contentContainerSelector + this.config.currentSlide;
                document.querySelector(selector).style.display = 'none';
            },
            showSlide: function (id) {
                this.hideCurrentSlide();

                const selector = '#' + this.config.contentContainerSelector + id;
                document.querySelector(selector).style.display = 'block';
                document.querySelector(selector).style.opacity = String(0.5);
                setTimeout(_=> { document.querySelector(selector).style.opacity = String(1); }, 100);
                this.config.currentSlide = id;
            },
            change: function (event) {
                this.showSlide(event.args.value);
            }
        }
    }
</script>

<style>
    .slider-demo-navigation-item {
        margin-left: 3px;
        cursor: pointer;
    }

    .slider-demo-info-header {
        font-size: 20px;
        font-family: Impact;
        color: #aaa;
    }

    .slider-demo-info-content {
        padding-top: 5px;
        font-size: 11px;
        width: 210px;
        text-align: left;
        font-family: Verdana, Arial;
    }

    .slider-demo-main {
        width: 665px;
        text-align: center;
        border: 1px solid #ccc;
        height: 376px;
        padding: 3px;
        -moz-border-radius: 10px;
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: #332f2f;
    }

    .slider-demo-header {
        background-image: url(../../../images/slider-demo-header-background.png);
        width: 665px;
        height: 76px;
    }

    .slider-demo-header-content {
        position: relative;
        right: 25px;
        top: 15px;
        color: #eee;
        font-family: Times New Roman, Verdana;
        font-size: 35px;
        text-align: right;
    }

    .slider-demo-content {
        width: 663px;
        height: 300px;
        border: 1px solid #fbfbfb;
        border-top-width: 0px;
        background: #fafafa;
        position: relative;
    }

    .slider-demo-content-inner {
        position: relative;
        width: 550px;
        background-color: #fff;
        height: 250px;
        float: right;
        right: 25px;
        top: 25px;
        border: 1px solid #ccc;
        background-color: #fbfbfb;
    }

    .slider-demo-content-container {
        position: relative;
        left: 9px;
        top: 9px;
        width: 530px;
        background-color: #fff;
        height: 230px;
        border: 1px solid #F5F5F5;
    }

    .slider-demo-content-navigation {
        z-index: 50;
        position: absolute;
        top: 200px;
        left: 200px;
        height: 26px;
        width: 130px;
        background-color: #555;
        -moz-border-radius: 10px;
        -webkit-border-radius: 10px;
        border-radius: 10px;
    }

    .slider-demo-content-image-border {
        background-color: #eee;
        padding: 5px;
        border: 1px solid #ccc;
        width: 231px;
        height: 154px;
        position: relative;
        top: 30px;
        left: 15px;
        float: left;
    }

    .slider-demo-content-info {
        position: relative;
        top: 30px;
        left: 50px;
        float: left;
    }

    .slider-demo-slider-container {
        position: relative;
        top: 25px;
        left: 20px;
        text-align: left;
        float: left;
    }
</style>