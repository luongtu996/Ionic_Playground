import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  
  birthday: Date = new Date();
  customYearsValues = [1991,2000,2009,2010,2020];
  customPickerOptions = {
    buttons: [
      {text:"Hola", handler:(event) =>{
        console.log(event);        
      }},
      {text:"Mundo"}]
  }
  constructor() { }

  ngOnInit() {
  }
  cambioFecha(event){
    console.log(event);
    console.log(new Date(event.detail.value));
  }

}
