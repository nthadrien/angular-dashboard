import { ApplicationConfig, provideZoneChangeDetection , Injectable } from '@angular/core';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { TitleStrategy, provideRouter } from '@angular/router';
import { routes , TemplatePageTitleStrategy } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideCharts(withDefaultRegisterables()),
    provideHttpClient(),
    provideRouter(routes),
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
    provideCharts(withDefaultRegisterables()),
  ],
};
