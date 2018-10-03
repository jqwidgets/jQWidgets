<template>
    <JqxNavBar :selection="false"
               :height="'auto'">
        <ul>
            <li>
                Minimized NavBar with Vertical Layout
                <JqxNavBar :minimizedTitle="'NavBar 1'"
                           :minimized="true"
                           :minimizedHeight="40"
                           :height="120"
                           :orientation="'vertical'"
                           :selectedItem="0">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </JqxNavBar>
            </li>
            <li>
                Minimized NavBar with Horizontal Layout
                <JqxNavBar :minimizedTitle="'NavBar 2'"
                           :minimized="true"
                           :minimizedHeight="40"
                           :height="120"
                           :selectedItem="0">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </JqxNavBar>
            </li>
        </ul>
    </JqxNavBar>
</template>
<script>
    import JqxNavBar from "jqwidgets-scripts/jqwidgets-vue/vue_jqxnavbar.vue"

    export default {
        components: {
            JqxNavBar
        }
    }
</script>

<style>
    html, body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
    }
</style>
