import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DataService } from './services/data.service';
import { Componente } from './interfaces/Componente';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl: MenuController,
    private dataService : DataService
  ) {
    this.initializeApp();
  }

  componentes: Observable<Componente[]>;
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.componentes = this.dataService.getMenuOpts();
    });
  }  

  cerrarMenu() {
    this.menuCtrl.close();
  }
}
