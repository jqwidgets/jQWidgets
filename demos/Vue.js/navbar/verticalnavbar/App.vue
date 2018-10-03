<template>
    <JqxNavBar :orientation="'vertical'"
               :height="120"
               :selectedItem="0">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
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
</style>
