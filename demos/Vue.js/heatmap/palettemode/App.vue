<template>
  <div id="container">
    <JqxHeatMap
      ref="myHeatMap"
      :source="source"
      :xAxis="xAxis"
      :yAxis="yAxis"
      :title="title"
      :legendSettings="legendSettings"
      :paletteSettings="paletteSettings"
    ></JqxHeatMap>

    <div id="palette-mode">
      <label for="jqxdropdownlist">Palette Type:</label>

      <div class="radio-buttons">
        <JqxRadioButton
          @change="onGradientChecked($event)"
          :width="90"
          :height="25"
          :checked="true"
        >Gradient</JqxRadioButton>
        <JqxRadioButton @change="onFixedChecked($event)" :width="90" :height="25">Fixed</JqxRadioButton>
      </div>
    </div>
  </div>
</template>

<script>
import JqxHeatMap from "jqwidgets-scripts/jqwidgets-vue/vue_jqxheatmap.vue";
import JqxRadioButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxradiobutton.vue";

export default {
  components: {
    JqxHeatMap,
    JqxRadioButton
  },
  data: function() {
    return {
      source: [
        [49, 39, 44, 55, 60],
        [53, 38, 26, 48, 33],
        [22, 17, 36, 10, 18],
        [17, 60, 60, 23, 19],
        [47, 47, 38, 60, 10],
        [13, 23, 30, 60, 10],
        [21, 26, 13, 33, 14],
        [53, 21, 45, 29, 60],
        [34, 60, 58, 51, 43],
        [10, 12, 58, 14, 21],
        [55, 58, 12, 22, 49],
        [18, 23, 56, 59, 53]
      ],
      xAxis: {
        labels: [
          "John",
          "Marry",
          "Alba",
          "Steven",
          "Josh",
          "Alica",
          "Robert",
          "Kim",
          "Ann",
          "Paul",
          "Regina",
          "Dorothy"
        ],
        opposedPosition: true
      },
      yAxis: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        opposedPosition: true
      },
      legendSettings: {
        position: "Bottom"
      },
      paletteSettings: {
        palette: [
          { value: 10, color: "#6bbd49" },
          { value: 30, color: "#22aaaa" },
          { value: 60, color: "#53b9e6" }
        ]
      },
      title: "Car sales revenue per employee(in 1000 &euro;)"
    };
  },
  methods: {
    onGradientChecked: function(event) {
      const checked = event.args.checked;
      this.$refs.myHeatMap.setPaletteType("Gradient");
    },
    onFixedChecked: function(event) {
      const checked = event.args.checked;
      this.$refs.myHeatMap.setPaletteType("Fixed");
    }
  }
};
</script>

<style>
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

#container > :first-child {
  width: 100%;
  max-width: 1000px;
}

#palette-mode {
  display: flex;
  align-items: center;
  margin: 50px 100px;
}

.radio-buttons {
  margin-left: 50px;
}

.radio-buttons > :first-child {
  margin-bottom: 10px;
}
</style>