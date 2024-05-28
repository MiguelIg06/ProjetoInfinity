import { Component } from '@angular/core';
import { RefreshService } from './refresh.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private refreshService: RefreshService) {}

  public handleRefresh() {
    setTimeout(() => {
      // Sua lógica de atualização aqui
      console.log('Refresh complete');
      this.refreshService.triggerRefresh(); // Disparando o evento de atualização
    }, 2000);
  }
}
