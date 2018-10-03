import { Component, ViewChild, ElementRef, ViewEncapsulation, AfterContentInit } from '@angular/core';
import { CustomBargaugeComponent } from './innerComponents/customBargaugeComponent/custombargauge.component';
import { ChartCaloriesComponent } from './innerComponents/chartCaloriesComponent/chart.component';
import { ChartNutritionalValuesComponent } from './innerComponents/chartNutritionalValuesComponent/chart.component';
import { GridDailyCaloriesComponent } from './innerComponents/gridDailyCaloriesComponent/grid.component';
import { PieChartComponent } from './innerComponents/chartPieComponent/chart.component';
import { DonutComponent } from './innerComponents/chartDonut/donut.component';
import { GridFoodComponent } from './innerComponents/gridFoodComponent/grid.component';
import { CustomButtonComponent } from './innerComponents/customButton/button.component';
import { DropDownComponent } from './innerComponents/dropDownListComponent/dropdownlist.component';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements AfterContentInit {
	@ViewChild('person') person: ElementRef;
	@ViewChild('bargauge1') bargauge1: CustomBargaugeComponent;
	@ViewChild('bargauge2') bargauge2: CustomBargaugeComponent;
	@ViewChild('bargauge3') bargauge3: CustomBargaugeComponent;
	@ViewChild('bargauge4') bargauge4: CustomBargaugeComponent;
	
	@ViewChild('chartCalories') chartCalories: ChartCaloriesComponent;
	@ViewChild('nutritionalValues') chartNutritional: ChartNutritionalValuesComponent;
	
	@ViewChild('dailyCaloriesGrid') dailyCaloriesGrid: GridDailyCaloriesComponent;
	@ViewChild('pieChart') pieChart: PieChartComponent;
	
	@ViewChild('donutChart') donutChart: DonutComponent;
	@ViewChild('foodGridValues') gridFood: GridFoodComponent;
	@ViewChild('addMeal') addMeal: CustomButtonComponent;
	@ViewChild('dropdownlistFood') dropdownlistFood: DropDownComponent;
			
	constructor(public http: Http) {
		let barGaugeResponse;
        this.http.get('../assets/sampledata/bargaugesprogress.txt')
            .map(res => res.json())
            .subscribe(
				data => barGaugeResponse = data,
				err => console.log(err),
				() => {
					let data = barGaugeResponse.data;
					this.bargauge1.updateBarGaugeContent(data[0].now);
					this.bargauge2.updateBarGaugeContent(data[1].now);
					this.bargauge3.updateBarGaugeContent(data[2].now);
					this.bargauge4.updateBarGaugeContent(data[3].now);
					
					// Add class style to BarGauges
					let bargauge1 = this.bargauge1.barGauge.elementRef.nativeElement;
					bargauge1.firstElementChild.className = bargauge1.firstElementChild.className.concat(" ptiles");
					let bargauge2 = this.bargauge2.barGauge.elementRef.nativeElement;
					bargauge2.firstElementChild.className = bargauge2.firstElementChild.className.concat(" ptiles");
					let bargauge3 = this.bargauge3.barGauge.elementRef.nativeElement;
					bargauge3.firstElementChild.className = bargauge3.firstElementChild.className.concat(" ptiles");
					let bargauge4 = this.bargauge4.barGauge.elementRef.nativeElement;
					bargauge4.firstElementChild.className = bargauge4.firstElementChild.className.concat(" ptiles");
				}
            );	
			
		let chartResponse;
        this.http.get('../assets/sampledata/chartdailycalories.txt')
            .map(res => res.json())
            .subscribe(
				data => chartResponse = data,
				err => console.log(err),
				() => {
					let data = chartResponse.data;
					// Prepare the DataAdapter for the Calories Chart
					let chartSource = {
						datatype: "json",
						datafields: [
							{ name: 'date', type: 'date', format: 'dd/MM/yyyy' },
							{ name: 'intake', type: 'number' },
							{ name: 'burn', type: 'number' },
							{ name: 'set', type: 'bool' }
						],
						localdata: data
					};					
					let chartDataAdapter: any = new jqx.dataAdapter(chartSource);
					this.chartCalories.setDataAdapter(chartDataAdapter);
				}
            );
			
		let nutritionalValuesResponse;
		this.http.get('../assets/sampledata/chartcalories.txt')
            .map(res => res.json())
            .subscribe(
				data => nutritionalValuesResponse = data,
				err => console.log(err),
				() => {
					let data = nutritionalValuesResponse.data;
					// Prepare the DataAdapter for the Nutritional Values Chart
					let nutritionalSource = {
						datatype: "json",
						datafields: [
							{ name: 'Date', type: 'date', format: 'dd/MM/yyyy' },
							{ name: 'fat' },
							{ name: 'carb' },
							{ name: 'protein' }
						],
						localdata: data
					};					
					let nutritionalDataAdapter: any = new jqx.dataAdapter(nutritionalSource);					
					this.chartNutritional.setDataAdapter(nutritionalDataAdapter);					
				}
            );
			
		let gridDailyCaloriesResponse;
		this.http.get('../assets/sampledata/griddailycalories.txt')
            .map(res => res.json())
            .subscribe(
				data => gridDailyCaloriesResponse = data,
				err => console.log(err),
				() => {
					let data = gridDailyCaloriesResponse.data;
					// Prepare the DataAdapter for the Grid
					let dailyCaloriesSource = {
						datatype: "json",
						datafields: [
							{ name: 'date', type: 'date', format: 'dd/MM/yyyy' },
							{ name: 'intake', type: 'number' },
							{ name: 'burn', type: 'number' },
							{ name: 'set', type: 'bool' }
						],
						localdata: data
					};
					let dailyCaloriesDataAdapter: any = new jqx.dataAdapter(dailyCaloriesSource, {
						beforeLoadComplete: function (records)
						{
							let data = new Array();
							for (let i = 0; i < records.length; i++)
							{
								let dateBalance = records[i];
								let set = true;
								// Check calories are more than 2000 cal.
								set = dateBalance.intake >= 2000 ? true : false;
								dateBalance.set = set;
								data.push(dateBalance);
							}
							
							return data;
						}
					});
					this.dailyCaloriesGrid.setDataAdapter(dailyCaloriesDataAdapter);					
				}
            );		
			
		let gridFoodResponse;
		this.http.get('../assets/sampledata/gridfoodsvalues.txt')
            .map(res => res.json())
            .subscribe(
				data => gridFoodResponse = data,
				err => console.log(err),
				() => {
					let data = gridFoodResponse.data;
					// Prepare the DataAdapter for the Grid
					let foodSource = {
						datatype: "json",
						datafields: [
							{ name: 'time', type: 'date', format: 'HH:mm' },
							{ name: 'food', type: 'string' },
							{ name: 'fat', type: 'number' },
							{ name: 'carb', type: 'number' },
							{ name: 'protein', type: 'number' },
							{ name: 'calories', type: 'number' }
						],
						localdata: data
					};					
					let dataAdapterFoodGrid: any = new jqx.dataAdapter(foodSource);
					
					this.gridFood.setDataAdapter(dataAdapterFoodGrid);					
				}
            );
			
		let dropdownlistFoodResponse;
		this.http.get('../assets/sampledata/dropdownfoods.txt')
            .map(res => res.json())
            .subscribe(
				data => dropdownlistFoodResponse = data,
				err => console.log(err),
				() => {
					let data = dropdownlistFoodResponse.data;
					// Prepare the DataAdapter for the Grid
					let foodListSource = {
						datatype: "json",
						datafields: [
							{ name: 'food', type: 'string' },
							{ name: 'fat', type: 'number' },
							{ name: 'carb', type: 'number' },
							{ name: 'protein', type: 'number' },
							{ name: 'calories', type: 'number' }
						],
						localdata: data
					};
					let dataAdapterFoodList: any = new jqx.dataAdapter(foodListSource);
					
					this.dropdownlistFood.setDataAdapter(dataAdapterFoodList);					
				}
            );
	}
	
	ngAfterContentInit() {
		this.generatePersonalInfo('Janet', 'Leverling', 165, 24, this.Gender.female);
	}
		
	Gender = {
		male: 0,
		female: 1
	};
	
	generatePersonalInfo(firstname: string, lastname: string, height: number, age: number, type: any): void {
		let name = firstname + ' ' + lastname;

        let personContent = this.person.nativeElement;
		personContent.className = 'person';
        let picture = document.createElement('div');
        picture.className = 'personpicture';

        let personInfo = document.createElement('div');
        personInfo.className = 'personinfo';

        let personName = document.createElement('div');
        personName.className = 'fullname';
        personName.innerText = name;

        let personalCharacteristics = document.createElement('div');
        personalCharacteristics.innerText = age + ' years / ' + height + ' cm';
        personInfo.appendChild(personName);
        personInfo.appendChild(personalCharacteristics);

        personContent.appendChild(personInfo);
        personContent.appendChild(picture);
	};	
		
	getDataIntakeBurn(array: any[]): any[] {
        let length = array.length;
        // Prevent the Chart from empty visualization.
        let totalIntake = 0.01;
        let totalBurn = 0.01;
        let total = {};
        let totalCalories = [];
        for (let i = 0; i < length; i++)
        {
            if (array[i].set)
            {
                totalIntake += array[i].intake;
                totalBurn += array[i].burn;
            }
        }

        totalCalories.push({ calories: totalIntake, type: 'intake' });
        totalCalories.push({ calories: totalBurn, type: 'burn' });
        return totalCalories;
    };
	
	// Initial calories data 
	dailyCalories = [{ calories: 0.1, type: 'intake' }, { calories: 0.1, type: 'burn' }];
	
	stopAnimation: boolean = true;
	calculateDailyCalories(event: any): void {
		let dailyCalories = this.getDataIntakeBurn(event.rows);
        if (this.stopAnimation)
        {
			this.pieChart.enableAnimations(false);
        }

		this.pieChart.updateData(dailyCalories);
        this.stopAnimation = false;		
	};	
	
	gridReady(): void {
		let rows = this.dailyCaloriesGrid.getBoundRows();
		this.dailyCalories = this.getDataIntakeBurn(rows);
		this.pieChart.updateData(this.dailyCalories);
	};
	
	gridFoodReady(): void {
		this.updateDonut();
	};	
		
	removeFood(event: any): void {
		this.updateDonut();
		this.updateBargaugeCalories();
	};
	
	updateDonut(): void {
		let fats = this.gridFood.getFats();
		let carbs = this.gridFood.getCarbs();
		let proteins = this.gridFood.getProteins();		
		let donutData = [
			{ "name": "Fat", "value": fats || 0.1 },
			{ "name": "Carb", "value": carbs || 0.1 },
			{ "name": "Protein", "value": proteins || 0.1 }
		];
		
		this.donutChart.updateData(donutData);
	}
	
	updateBargaugeCalories(): void {
		let totalCalories = this.gridFood.getCalories();
		if (!totalCalories) totalCalories = 0;
		
		this.bargauge1.updateBarGaugeContent(totalCalories);				
	}
	
	selectedFoodInfo: any;
	
	selectedFood(event: any): void {
		if(event) {
			this.addMeal.disabled(false);
			this.selectedFoodInfo = event.itemInfo;
		}
    };
	
	clickAddMeal(): void {
		this.selectedFoodInfo.time = new Date();		
		this.gridFood.addrow(this.selectedFoodInfo);
		this.updateDonut();
		this.updateBargaugeCalories();
	};
}