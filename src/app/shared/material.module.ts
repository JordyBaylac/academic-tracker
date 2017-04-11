import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdTabsModule,
  MdIconModule,
  OverlayContainer,
  MdSidenavModule,
  MdMenuModule,
  MdToolbarModule,
  MdDialogModule,
  MdInputModule
} from '@angular/material';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/**
 * Modules that should be rexported because are the ones used in the application.
 *
 */
const modules = [
  MdTabsModule, MdIconModule, /*BrowserAnimationsModule,*/
  MdSidenavModule, MdButtonModule, MdMenuModule,
  MdToolbarModule, MdDialogModule, MdInputModule
];


/**
 * This is a module who exposes what Modules from Material are used. So we can re export
 * them and there is no need to declare a separate module because we have a SharedModule.
 */
@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { // this is the definition of the Object's properties.

  constructor() {
    new OverlayContainer().themeClass = 'deeppurple-amber';
  }
}
