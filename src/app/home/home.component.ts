import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  value: boolean = false;
  users: any;
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getusers().subscribe(data => {
      this.users = data;
      console.log(data);
      
    })
  }

  firstClick() {
    // this.data.data()
    // this.aa = this.data.getusers()
    // this.value = !this.value;
    
  }
}
