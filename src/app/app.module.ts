import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataViewModule } from "primeng/dataview";
import { HttpClientModule } from "@angular/common/http";
import { DropdownModule } from "primeng";

import { AppComponent } from "./app.component";

import { CarService } from "./carservice";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DataViewModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
