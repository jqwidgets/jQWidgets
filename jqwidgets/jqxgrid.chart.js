/* tslint:disable */
/* eslint-disable */
(function ($) {
    $.extend($.jqx._jqxGrid.prototype, {
	   _getChartDataFields: function(data) {
			var that = this;
			var record = data[0];
			var stringOnly = true,
				xAxisDataField,
				series = [];

			for (var dataField in record) {
				if (dataField === '$' || dataField === 'uid' || dataField === 'boundindex' || dataField === 'uniqueid' || dataField === 'visibleindex') {
					continue;
				}

				var dataType = that.source._source.dataFields.find(gridField => gridField.name === dataField).type;

				if (dataType === 'string') {
					var index = that.columns.records.findIndex(col => col.datafield === dataField);

					if (index === 0) {
						xAxisDataField = dataField;
					}
				}
				else {
					stringOnly = false;
					series.push({ dataField: dataField, displayText: dataField });
				}
			}

			return { xAxisDataField: xAxisDataField, series: series, stringOnly: stringOnly };
		},

		createChart: function(type, dataSource) {
			var that = this;
			var gridSelection = that.getselection(),
				selectedRows = gridSelection.rows,
				selectedCells = gridSelection.cells,
				chartElement = document.createElement('div'),
				chartData = [],
				seriesGroup = {};
			var rowsToPlot = [],
				columnsToPlot = [],
				series;

			if (selectedCells && selectedCells.length > 1) {
				selectedCells.forEach(cell => {
					if (rowsToPlot.indexOf(cell.rowindex) === -1) {
						rowsToPlot.push(cell.rowindex);
					}

					if (columnsToPlot.indexOf(cell.datafield) === -1) {
						columnsToPlot.push(cell.datafield);
					}
				});
			}

			if (selectedRows.length === 0 && selectedCells.length === 0) {
				var dataSource = that.source.records;
			}
			
			if (dataSource) {
				chartData = chartData.concat(dataSource);
			}
			else {
				var dataSource = that.source.records;
				
				for (var i = 0; i < dataSource.length; i++) {
					var record = {};

					if (selectedRows.length > 0) {
						if (selectedRows.indexOf(i) === -1) {
							continue;
						}	
					}
					else if (selectedCells.length > 0) {
						if (selectedCells.length > 1) {
							if (rowsToPlot.indexOf(i) === -1) {
								continue;
							}

							columnsToPlot.forEach(dataField => {
								record[dataField] = dataSource[i][dataField];
							});
							chartData.push(record);
							continue;
						}
					}

					that.columns.records.forEach(col => record[col.datafield] = dataSource[i][col.datafield]);
					chartData.push(record);
				}
			}

			var chartDataFields = that._getChartDataFields(chartData);

			if (chartDataFields.stringOnly) {
				if (that.showheader) {
					var chartIcon = that.element.querySelector('#' + type);

					that.toolbar[0].firstElementChild.classList.add('warning');

					if (chartIcon) {
						chartIcon.classList.add('warning');
					}

					setTimeout(function () {
						that.toolbar[0].firstElementChild.classList.remove('warning');

						if (chartIcon) {
							chartIcon.classList.remove('warning');
						}
					}, 1000);
				}

				return;
			}

			series = chartDataFields.series;
			
			var chart = {};
			
			chart.title = '';
			chart.description = '';
			chart.showLegend = true;
			chart.showBorderLine = false;
			chart.padding = { left: 5, top: 10, right: 5, bottom: 5 };
			chart.source = chartData;
			chart.xAxis =
				{
					dataField: chartDataFields.xAxisDataField,
					gridLines: {
						visible: true
					}
				};
			chart.valueAxis =
				{
					displayValueAxis: true,
					description: that.charting.description,
					axisSize: 'auto',
					formatSettings: that.charting.formatSettings
				};
			chart.colorScheme = that.charting.colorScheme;
			chart.seriesGroups = [seriesGroup];

			seriesGroup.formatSettings = that.charting.formatSettings;
			seriesGroup.series = series;

			if (type === 'line') {
				series.forEach(function (serie) {
					serie.symbolSize = 8;
					serie.symbolType = 'square';
				});
			}
			else if (type === 'pie') {
				var pieDataField = series[0].dataField;

				delete seriesGroup.formatSettings;
				seriesGroup.formatFunction = function (value, index) {
					if (isNaN(value)) {
						if (typeof value === 'object') {
							return index;
						}

						return value;
					}

					return value;
				};
				seriesGroup.showLabels = true;
				series.length = 0;
				series.push({
					dataField: pieDataField,
					displayText: chartDataFields.xAxisDataField,
					initialAngle: 0
				});
			}
			else if (type === 'bar') {
				type = 'column';
				seriesGroup.orientation = 'horizontal';
				chart.xAxis.textRotationAngle = 90;
				chart.valueAxis.textRotationAngle = 30;
				chart.valueAxis.flip = true;
			}
			else if (type === 'area') {
				var opacity = 1;

				for (var i = 0; i < series.length; i++) {
					series[i].opacity = opacity;
					opacity -= 0.2;
					opacity = Math.max(0.3, opacity);
				}
			}

			seriesGroup.type = type;

			if (that.charting.ready) {
				that.charting.ready(chart);
			}

			if (that.charting.appendTo) {
				var container = that.charting.appendTo === 'string' ? document.querySelector(that.charting.appendTo) : that.charting.appendTo;

				if (container) {
					var chartInstance = new jqxChart(chartElement, chart);	
					container.appendChild(chartElement);	
				}
			}
			else {				
				that._openChartDialog(chartElement, type, chart);
			}
		},

		_openChartDialog: function(chart, chartType, settings) {
			var that = this;

			if (!that.charting.dialog.enabled) {
				return false;
			}

			var dialogElement =  document.createElement('div');
			
			dialogElement.innerHTML = '<div>' + that.charting.dialog.header + '</div><div style="overflow:hidden;"></div>';
			
			var chartLabel = chartType.substring(0, 1).toUpperCase() + chartType.substring(1);
		
			chart.style.width = '100%';
			chart.style.height = '100%';

			var dialog = new jqxWindow(dialogElement, {
				width: that.charting.dialog.width,
				height: that.charting.dialog.height,
				position: that.charting.dialog.position,
				isModal: true
			});

			dialog.open();

			setTimeout(function () {
				dialogElement.querySelector('.jqx-widget-content').appendChild(chart);
				var chartInstance = new jqxChart(chart, settings);	
			}, 100);
			
			dialog.on('close', function() {
				dialog.destroy();
			});
	    },
	
	});
})(jqxBaseFramework);
