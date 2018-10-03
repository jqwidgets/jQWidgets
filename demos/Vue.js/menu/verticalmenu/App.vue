<template>
    <div style="width: 110px;">
        <JqxMenu :mode="'vertical'"
                 :width="120">
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
        </JqxMenu>
    </div>
</template>
<script>
    import JqxMenu from "jqwidgets-scripts/jqwidgets-vue/vue_jqxmenu.vue"

    export default {
        components: {
            JqxMenu
        }
    }
</script>

<style>
</style>
