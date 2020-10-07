import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  public data = [
    {
      color:"primary",
      selected: false
    },
    {
      color:"secondary",
      selected: false
    },
    {
      color:"danger",
      selected: false
    },
    {
      color:"success",
      selected: true
    },
    {
      color:"light",
      selected: false
    },
    {
      color:"dark",
      selected: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  onClick(item:any) {
    console.log(item);    
  }

  verData(){
    console.log(this.data);
    
  }

}
