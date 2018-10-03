<template>
  <div>
    <table>
        <tr>
          <td>
            <JqxButton :width="120" :height="50" :textPosition="'topLeft'">Top Left</JqxButton>
          </td>
          <td>
            <JqxButton :width="120" :height="50" :textPosition="'top'">Top</JqxButton>
          </td>
          <td>
            <JqxButton :width="120" :height="50" :textPosition="'topRight'">Top Right</JqxButton>
          </td>
        </tr>
    </table>
    <table>
      <tr>
        <td>
          <JqxButton :width="120" :height="50" :textPosition="'left'">Left</JqxButton>
        </td>
        <td>
          <JqxButton :width="120" :height="50" :textPosition="'center'">Center</JqxButton>
        </td>
        <td>
          <JqxButton :width="120" :height="50" :textPosition="'right'">Right</JqxButton>
        </td>
      </tr>
    </table>
    <table>
      <tr>
        <td>
          <JqxButton :width="120" :height="50" :textPosition="'bottomLeft'">Bottom Left</JqxButton>
        </td>
        <td>
          <JqxButton :width="120" :height="50" :textPosition="'bottom'">Bottom</JqxButton>
        </td>
        <td>
          <JqxButton :width="120" :height="50" :textPosition="'bottomRight'">Bottom Left</JqxButton>
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