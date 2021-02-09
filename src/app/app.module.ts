import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HighchartsChartModule } from "highcharts-angular";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { HealthStatusComponent } from "./components/reports/health-status/health-status.component";
import { SparklineComponent } from "./components/reports/shared/sparkline/sparkline.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HighchartsChartModule, NgbModule],
  declarations: [AppComponent, HealthStatusComponent, SparklineComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
