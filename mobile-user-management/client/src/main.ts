import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { initConfiguration } from './init';

if (environment.production) {
  enableProdMode();
}

initConfiguration().then( appProperties => {
  function bootstrapApp() {
	console.log('Loading App');
    return platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
  }

  console.log('initConfiguration');
  bootstrapApp();
});

