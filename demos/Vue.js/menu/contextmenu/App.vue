<template>
    <div @contextmenu="contextmenuMenu($event)"
         @mousedown="mousedown($event)"
         style="vertical-align: middle; text-align: center; background: #eee; height: 400px; width: 400px;">
        <JqxMenu ref="jqxMenu"
                 :mode="'popup'"
                 :autoOpenPopup="false"
                 :width="120"
                 :height="140">
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
                <li>
                    <a href="#">Contact Us</a>
                    <ul>
                        <li><a href="#">Enquiry Form</a></li>
                        <li><a href="#">Map &amp; Driving Directions</a></li>
                        <li><a href="#">Your Feedback</a></li>
                    </ul>
                </li>
            </ul>
        </JqxMenu>
        <span style="font-size: 14px; position: relative; top: 180px; font-family: Verdana Arial;">
            Right-Click here to Open the Menu
        </span>
    </div>
</template>
<script>
    import JqxMenu from "jqwidgets-scripts/jqwidgets-vue/vue_jqxmenu.vue";

    export default {
        components: {
            JqxMenu
        },
        methods: {
            isRightClick: function (event) {
                let rightclick;
                if (!event) event = window.event;
                if (event.which) rightclick = (event.which == 3);
                else if (event.button) rightclick = (event.button == 2);
                return rightclick;
            },
            contextmenuMenu: function (e) {
                e.preventDefault();
            },
            mousedown: function (event) {
                let rightClick = this.isRightClick(event) || jqx.mobile.isTouchDevice();
                if (rightClick) {
                    this.$refs.jqxMenu.open(parseInt(event.clientX), parseInt(event.clientY));
                    return false;
                }
            }
        }
    }
</script>