import { platformBrowser }    from '@angular/platform-browser';
import { enableProdMode }     from '@angular/core';
import { AppModuleNgFactory } from '../../../temp/app/form/label_position/app.module.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);