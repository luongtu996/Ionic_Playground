import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {
  data: any[] = new Array(7);
  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() { }
  onClick(value: number) {
    this.popoverCtrl.dismiss({ item: value });
  }
}
