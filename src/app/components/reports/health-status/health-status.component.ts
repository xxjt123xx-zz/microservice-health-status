import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-health-status",
  templateUrl: "./health-status.component.html",
})
export class HealthStatusComponent implements OnInit {


  checks: any;
  prodChecks: any;
  testChecks: any;
  devChecks: any;

  constructor() { }

  ngOnInit(): void {
    this.checks = [
      {
        env: "prod",
        checks: [
          { name: "Service 1 - Good", icon: "fa fa-check-circle", status: "Good", plots: [1, 2, 3, 4, 5] },
          { name: "Test2", icon: "fa fa-info-circle", status: "Info", plots: [ 651 , 501 , 100 , 308 , 149 ] },
          { name: "Test3", icon: "fa fa-exclamation-triangle", status: "Warning", plots: [ 219 , 513 , 497 , 610 , 112 ] },
          { name: "Test4", icon: "fa fa-times-circle", status: "Critical", plots: [ 321 , 634 , 104 , 997 , 208 ] },
          { name: "Service 1 - Good", icon: "fa fa-check-circle", status: "Good", plots: [ 219 , 513 , 497 , 610 , 112 ] },
          { name: "Test2", icon: "fa fa-info-circle", status: "Info", plots: [ 121 , 264 , 634 , 398 , 518 ] } ,
        ],
      },
      {
        env: "test",
        checks: [
          { name: "Service 1 - Good", status: "Good" },
          { name: "Test2", status: "Info" },
          { name: "Test3", status: "Warning" },
          { name: "Service 2 - Good", status: "Good" },
          { name: "Test4", status: "Critical" },
        ],
      },
      {
        env: "dev",
        checks: [
          { name: "Service 1 - Good", status: "Good" },
          { name: "Test2", status: "Info" },
          { name: "Test3", status: "Warning" },
          { name: "Test4", status: "Critical" },
          { name: "Test5", status: "Critical" },
        ],
      },
    ];

    this.prodChecks = this.checks.find((f) => f.env === "prod")?.checks;
    this.testChecks = this.checks.find((f) => f.env === "test")?.checks;
    this.devChecks = this.checks.find((f) => f.env === "dev")?.checks;
  }
}
