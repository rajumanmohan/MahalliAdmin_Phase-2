import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestedproductsComponent } from './suggestedproducts.component';
import { SuggestedproductsRoutingModule } from './suggestedproducts-routing.module';
import { EditsuggestedproductsComponent } from './editsuggestedproducts.component';



@NgModule({
  declarations: [SuggestedproductsComponent, EditsuggestedproductsComponent],
  imports: [
    CommonModule, SuggestedproductsRoutingModule
  ]
})
export class SuggestedproductsModule { }
