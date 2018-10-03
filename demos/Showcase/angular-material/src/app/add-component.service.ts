import { Injectable } from '@angular/core';

import { BillingService } from './billing.service';
import { FitnessService } from './fitness.service';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})

export class AddComponentService {
  constructor(private billing: BillingService, private fitness: FitnessService, private employee: EmployeeService) {
  }

  /**
   * 
   * @param selectorID ID name of the jqxValidator container (<form/>)
   * @param theme theme for the jqxDataTable (Default theme)
   */
  public createBillingForm(selectorID, theme?: string) {
    this.billing.createBillingForm(selectorID, theme);
  };

  /**
   * 
   * @param selectorID ID name of the jqxChart container
   */
  public createChart(selectorID: string) {
    this.fitness.createChart(selectorID);
  };

  /**
   * 
   * @param selectorID ID name of the jqxDataTable container
   * @param theme theme for the jqxDataTable (Default theme)
   */
  public createDatatable(selectorID: string, theme?: string) {
    this.employee.createDatatable(selectorID, theme);
  };
}
