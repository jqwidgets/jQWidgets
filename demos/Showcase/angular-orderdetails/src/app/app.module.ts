import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';
import { jqxKanbanComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxkanban';

import { CustomersComponent } from './innerComponents/customersComponent/customers.component';
import { OrdersComponent } from './innerComponents/ordersComponent/orders.component';
import { ProductsComponent } from './innerComponents/productsComponent/products.component';
import { StaffComponent } from './innerComponents/staffComponent/staff.component';
import { TasksComponent } from './innerComponents/tasksComponent/tasks.component';

import { jqxMaskedInputComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxmaskedinput';
import { jqxInputComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxinput';

import { ItemsEnumeration } from './items.enum';

import { DashboardModule } from './innerComponents/dashboardComponent/dashboard.module';
import { ReportsModule } from './innerComponents/reportsComponent/reports.module';

import { RoutingModule, appRoutingProviders } from './routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent, 
        jqxGridComponent,
        jqxKanbanComponent,
        CustomersComponent,
        OrdersComponent,
        ProductsComponent,
        StaffComponent,
        TasksComponent
	],
	imports: [
        BrowserModule, RoutingModule, HttpModule, DashboardModule, ReportsModule
	],
    providers: [appRoutingProviders],
	bootstrap: [AppComponent]
})
export class AppModule { }
