import { ApplicationConfig, EnvironmentProviders, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { NbDialogConfig, NbDialogModule, NbSidebarModule, NbThemeModule, NbToastrModule } from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";

import { routes } from './app.routes';


const provideNebular = (): EnvironmentProviders[] => [importProvidersFrom(NbThemeModule.forRoot({ name: 'cosmic' })), importProvidersFrom(NbEvaIconsModule), importProvidersFrom(NbDialogModule.forRoot()), importProvidersFrom(NbSidebarModule.forRoot()), importProvidersFrom(NbToastrModule.forRoot()), importProvidersFrom(NbDialogConfig)]



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), ...provideNebular()]
};
