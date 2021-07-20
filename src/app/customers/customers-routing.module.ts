import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CustomersComponent } from "./customers.component";

const routes: Routes = [
  { path: "app/customers", component: CustomersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
