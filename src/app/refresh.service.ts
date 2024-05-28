// refresh.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  constructor() { }

  triggerRefresh(): Promise<void> {
    // Simular uma operação de atualização assíncrona
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        console.log('Refresh complete');
        resolve();
      }, 2000); // Tempo de espera simulado de 2 segundos
    });
  }
}
