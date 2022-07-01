import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { UnlessDirective } from './directives/unless/unless.directive';
import { ServiceWorkersComponent } from './service-workers/service-workers.component';
import { ServiceWorkerCommunicationComponent } from './service-workers/service-worker-communication/service-worker-communication.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ServiceWorkerNotificationsComponent } from './service-workers/service-worker-notifications/service-worker-notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    HighlightDirective,
    UnlessDirective,
    ServiceWorkersComponent,
    ServiceWorkerCommunicationComponent,
    ServiceWorkerNotificationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
