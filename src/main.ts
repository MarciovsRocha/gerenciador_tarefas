import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

/* 
 * alterada codificação do arquivo para UTF-8 
 * dev.marcio.rocha@gmail.com 29/01/2023
 */