<template>
<div>
    <table>
        <tr>
          <td>Top</td>
          <td>Top Left</td>
          <td>Top Right</td>
        </tr>
        <tr>
          <td>
            <JqxButton :width="120" :height="50" :imgSrc="'../images/twitter.png'" :imgPosition="'top'"></JqxButton>
          </td>
          <td>
            <JqxButton :width="120" :height="50" :imgSrc="'../images/twitter.png'" :imgPosition="'topLeft'"></JqxButton>
          </td>
          <td>
            <JqxButton :width="120" :height="50" :imgSrc="'../images/twitter.png'" :imgPosition="'topRight'"></JqxButton>
          </td>
        </tr>
    </table>
    <table>
        <tr>
          <td>Center</td>
          <td>Left</td>
          <td>Right</td>
        </tr>
        <tr>
          <td>
            <JqxButton :width="120" :height="50" :imgSrc="'../images/twitter.png'" :imgPosition="'center'"></JqxButton>
          </td>
          <td>
            <JqxButton :width="120" :height="50" :imgSrc="'../images/twitter.png'" :imgPosition="'left'"></JqxButton>
          </td>
          <td>
            <JqxButton :width="120" :height="50" :imgSrc="'../images/twitter.png'" :imgPosition="'right'"></JqxButton>
          </td>
        </tr>
    </table>
    <table>
        <tr>
          <td>Bottom</td>
          <td>Bottom Left</td>
          <td>Bottom Right</td>
        </tr>
        <tr>
          <td>
            <JqxButton :width="120" :height="50" :imgSrc="'../images/twitter.png'" :imgPosition="'bottom'"></JqxButton>
          </td>
          <td>
            <JqxButton :width="120" :height="50" :imgSrc="'../images/twitter.png'" :imgPosition="'bottomLeft'"></JqxButton>
          </td>
          <td>
            <JqxButton :width="120" :height="50" :imgSrc="'../images/twitter.png'" :imgPosition="'bottomRight'"></JqxButton>
          </td>
        </tr>
    </table>
</div>
</template>

    <script>
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';

    export default {
        components: {
            JqxButton
        }
    }
</script>

<style>   
</style>