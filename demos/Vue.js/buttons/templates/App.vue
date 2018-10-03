<template>
  <div>
    <JqxButton :width="80" style="float: left">Default</JqxButton>
    <JqxButton :template="'primary'" :width="80" style="float: left; margin-left: 4px">Primary</JqxButton>
    <JqxButton :template="'info'"    :width="80" style="float: left; margin-left: 4px">Info</JqxButton>
    <JqxButton :template="'success'" :width="80" style="float: left; margin-left: 4px">Success</JqxButton>
    <JqxButton :template="'warning'" :width="80" style="float: left; margin-left: 4px">Warning</JqxButton>
    <JqxButton :template="'danger'"  :width="80" style="float: left; margin-left: 4px">Danger</JqxButton>
    <JqxButton :template="'inverse'" :width="80" style="float: left; margin-left: 4px">Inverse</JqxButton>
    <JqxButton :template="'link'"    :width="80" style="float: left">Link</JqxButton>
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