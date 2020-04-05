import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataViewModule } from "primeng/dataview";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { TabViewModule } from "primeng/tabview";
import { AccordionModule } from "primeng/accordion";
import { PanelModule } from "primeng/panel";
import { DropdownModule } from "primeng";
// import { AngularFontAwesomeModule } from "angular-font-awesome";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { GameService } from "./gameservice";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DataViewModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollPanelModule,
    TabViewModule,
    AccordionModule,
    PanelModule
    // AngularFontAwesomeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule {}
