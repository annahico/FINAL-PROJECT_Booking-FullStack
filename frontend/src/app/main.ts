import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from '../app/app.component'; // Asegúrate de que la ruta sea correcta
import { environment } from '../environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapComponent(AppComponent) // Usa bootstrapComponent para componentes standalones
  .catch(err => console.error(err));
