<template>
    <div id="container">
        <JqxTooltip 
            :position="'mouse'" :name="'movieTooltip'"
            :content="'<b>Title:</b> <i>The Amazing Spider-man</i><br /><b>Year:</b> 2012'">
            <img src='../../../images/The_Amazng_Spider_Man.jpeg' />
        </JqxTooltip>
        <JqxTooltip 
            :position="'mouse'" :name="'movieTooltip'"
            :content="'<b>Title:</b> <i>The Avengers</i><br /><b>Year:</b> 2012'">
            <img src='../../../images/The_Avengers.jpg' />
        </JqxTooltip>
        <JqxTooltip 
            :position="'mouse'" :name="'movieTooltip'"
            :content="'<b>Title:</b> <i>The Dark Knight Rises</i> <br /><b>Year:</b> 2012'">
            <img src='../../../images/The_Dark_Knight_Rises.jpg' />
        </JqxTooltip>
        <JqxTooltip 
            :position="'mouse'" :name="'movieTooltip'"
            :content="'<b>Title:</b> <i>Harry Potter and the Deathly Hallows - Part 1</i><br /><b>Year:</b> 2010'">
            <img src='../../../images/Harry_Potter_7_Part_1.jpg' />
        </JqxTooltip>
        <JqxTooltip 
            :position="'mouse'" :name="'movieTooltip'"
            :content="'<b>Title:</b> <i>Harry Potter and the Deathly Hallows - Part 2</i><br /><b>Year:</b> 2011'">
            <img src='../../../images/Harry_Potter_7_Part_2.jpg' />
        </JqxTooltip>
        <JqxTooltip 
            :position="'mouse'" :name="'movieTooltip'"
            :content="'<b>Title:</b> <i>Inception</i><br /><b>Year:</b> 2010'">
            <img src='../../../images/Inception.jpg' />
        </JqxTooltip>
        <JqxTooltip 
            :position="'mouse'" :name="'movieTooltip'"
            :content="'<b>Title:</b> <i>Star Trek</i><br /><b>Year:</b> 2009 '">
            <img src='../../../images/Star_Trek.jpg' />
        </JqxTooltip>
        <JqxTooltip 
            :position="'mouse'" :name="'movieTooltip'"
            :content="'<b>Title:</b> <i>Star Wars</i> Episode III: <i>Revenge of the Sith</i><br /><b>Year:</b> 2005'">
            <img src='../../../images/Star_Wars_Episode_III.jpg' />
        </JqxTooltip>
        <JqxTooltip 
            :position="'mouse'" :name="'movieTooltip'"
            :content="'<b>Title:</b> <i>Thor</i><br /><b>Year:</b> 2011'">
            <img src='../../../images/Thor.jpg' />
        </JqxTooltip>
    </div>
</template>

<script>
    import JqxTooltip from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtooltip.vue';

    export default {
        components: {
            JqxTooltip
        }
    }
</script>

<style>
    #container {
        width: 400px;
    }
    #container div {
        margin: 8px 8px 0 8px;
        float: left;
        height: 162px;
    }
</style>