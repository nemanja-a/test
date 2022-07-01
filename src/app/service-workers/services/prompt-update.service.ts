import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PromptUpdateService {
  // constructor(update: SwUpdate) {
  //   update.versionUpdates.subscribe(event => {
  //     if (promptUser(event)) {
  //       updates.activatedUpdate().then(() => document.location.reload()))
  //     }
  //   })
  //  }
}
