<template>
    <div style="height:100%; width:100%;">

        <JqxResponsivePanel ref="myResponsivePanel"
                            @collapse="responsivePanelOnCollapse($event)"
                            :width="'30%'"
                            :height="'80%'"
                            :collapseBreakpoint="700"
                            :autoClose="false"
                            :animationType="'none'">

            <JqxTree :width="'100%'" :height="'100%'">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li>
                        About Us
                        <ul>
                            <li><a href="#">History</a></li>
                            <li><a href="#">Our Vision</a></li>
                            <li>
                                <a href="#">The Team</a>
                                <ul>
                                    <li><a href="#">Brigita</a></li>
                                    <li><a href="#">John</a></li>
                                    <li><a href="#">Michael</a></li>
                                    <li><a href="#">Peter</a></li>
                                    <li><a href="#">Sarah</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Clients</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </li>
                    <li>
                        Services
                        <ul>
                            <li><a href="#">Product Development</a></li>
                            <li><a href="#">Delivery</a></li>
                            <li><a href="#">Shop Online</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Training &amp; Consulting</a></li>
                        </ul>
                    </li>
                    <li>
                        Products
                        <ul>
                            <li>
                                <a href="#">New</a>
                                <ul>
                                    <li><a href="#">Corporate Use</a></li>
                                    <li><a href="#">Private Use</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Used</a>
                                <ul>
                                    <li><a href="#">Corporate Use</a></li>
                                    <li><a href="#">Private Use</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Featured</a></li>
                            <li><a href="#">Top Rated</a></li>
                            <li><a href="#">Prices</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Careers</a></li>
                    <li>
                        <a href="#">Contact Us</a>
                        <ul>
                            <li><a href="#">Enquiry Form</a></li>
                            <li><a href="#">Map &amp; Driving Directions</a></li>
                            <li><a href="#">Your Feedback</a></li>
                        </ul>
                    </li>
                </ul>
            </JqxTree>
        </JqxResponsivePanel>

        <JqxPanel ref="myPanel" :width="'65%'" :height="'80%'">

            <h4 style="text-align: center;">About Us</h4>
            <p style="line-height: 1.5;">
                <span style="float: left; font-size: 3.26em; line-height: 0.5; margin-top: 0.2em;">S</span><strong>
                    tark
                    Industries
                </strong> is a multinational conglomerate with facilities in over
                thirty different countries on all seven continents. The President and CEO of Stark
                Industries is billionaire industrialist Anthony "Tony" Stark.
            </p>
            <p>
                The company&#39;s origins date back to the mid-19 century when Isaac Stark, Sr. began
                developing new electrical and engineering technology that helped to redefine innovative
                security measures for the industrial age.
            </p>
            <p>
                With growing prosperity, Stark Industries (then known as Stark Enterprises) was
                quickly propelled into the modern era as a major global industrial superpower, due
                in no small measure to Isaac Stark, Sr.&#39;s direct descendant Howard Stark. Under
                Howard Stark&#39;s leadership, Stark Industries became the world leader in the development
                of munitions with its corporate office located on Long Island, New York. Stark Industries
                quickly branched out into other scientific fields including aeronautics, robotics,
                micro-technology and fringe science. With increasing expansion, the company soon
                became known as Stark Industries. When Howard Stark passed away, his sole heir Tony
                Stark inherited all of his father&#39;s business assets and took full control of Stark
                Industries.
            </p>
        </JqxPanel>
    </div>
</template>

<script>
    import JqxPanel from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue';
    import JqxTree from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtree.vue';
    import JqxResponsivePanel from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxresponsivepanel.vue';

    export default {
        components: {
            JqxPanel,
            JqxTree,
            JqxResponsivePanel
        },
        methods: {
            responsivePanelOnCollapse: function (event) {
                if (event.args.element) {
                    return;
                }
                this.$refs.myResponsivePanel.$el.style.display = 'block';
            }
        }
    }
</script>

<style>
    .jqx-responsive-panel, .jqx-panel {
        float: left;
    }

    .jqx-tree {
        border: none !important;
    }

    body, html {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }
</style>