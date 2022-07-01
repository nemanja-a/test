import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticeComponent } from './practice/practice.component';
import { ServiceWorkerCommunicationComponent } from './service-workers/service-worker-communication/service-worker-communication.component';
import { ServiceWorkerNotificationsComponent } from './service-workers/service-worker-notifications/service-worker-notifications.component';
import { ServiceWorkersComponent } from './service-workers/service-workers.component';

const routes: Routes = [
  { path: '', component: PracticeComponent },
  { path: 'service-workers', component: ServiceWorkersComponent, children: [
    { path: 'communication', component: ServiceWorkerCommunicationComponent },
    { path: 'notifications', component: ServiceWorkerNotificationsComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
