<template>
    <div style="width: 80%;">
        NavBar with 2 Items. Each item is with 50% width.
        <br />
        <JqxNavBar :height="40" :selectedItem="0">
            <ul>
                <li>1</li>
                <li>2</li>
            </ul>
        </JqxNavBar>
        <br />
        NavBar with 3 Items. Each item is with 33.33% width.
        <br />
        <JqxNavBar :height="40" :selectedItem="0">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </JqxNavBar>
        <br />
        NavBar with 4 Items. Each item is with 25% width.
        <br />
        <JqxNavBar :height="40" :selectedItem="0">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </JqxNavBar>
        <br />
        NavBar with 5 Items. Each item is with 20% width.
        <br />
        <JqxNavBar :height="40" :selectedItem="0">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </JqxNavBar>
        <br />
        NavBar with more than 5 Items. Items are displayed in 2 columns and each item is with 50% width.
        <br />
        <JqxNavBar :height="160" :selectedItem="0">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
            </ul>
        </JqxNavBar>
        <br />
        NavBar with "columns" set to ["30%", "50%", "20%"].
        <br />
        <JqxNavBar :height="40" :selectedItem="0" :columns="['30%', '50%', '20%']">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </JqxNavBar>
    </div>
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
