import { Component } from '@angular/core';
import { IonRefresher, NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nav: NavController) {
    
  } 
  proxpage2(){
     this.nav.navigateForward('page2');
  }

  handleRefresh(event: CustomEvent) {
    setTimeout(() => {
      event.detail.complete(); 
    }, 2000);
  }
}
