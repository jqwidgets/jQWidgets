import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './innerComponents/dashboardComponent/dashboard.component';
import { OrdersComponent } from './innerComponents/ordersComponent/orders.component';
import { ProductsComponent } from './innerComponents/productsComponent/products.component';
import { CustomersComponent } from './innerComponents/customersComponent/customers.component';
import { StaffComponent } from './innerComponents/staffComponent/staff.component';
import { TasksComponent } from './innerComponents/tasksComponent/tasks.component';
import { ReportsComponent } from './innerComponents/reportsComponent/reports.component';

const appRoutes: Routes = [

    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'orders',
        component: OrdersComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'customers',
        component: CustomersComponent
    },
    {
        path: 'staff',
        component: StaffComponent
    },
    {
        path: 'tasks',
        component: TasksComponent
    },
    {
        path: 'reports',
        component: ReportsComponent
    }
];

export const RoutingModule = RouterModule.forRoot(appRoutes, {
    useHash: true
});


export const appRoutingProviders: any[] = [
];
