import { Component, OnInit } from '@angular/core';
import { IonRefresher, NavController } from '@ionic/angular';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor() {  }

handleRefresh(event: CustomEvent) {
    setTimeout(() => {
      event.detail.complete(); 
    }, 2000);
  }
  ngOnInit() {
  }

}
