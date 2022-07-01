import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from '../mocks/mock.heroes';
import { Hero } from '../models/hero';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private logger: LoggerService) { }

  getHeroes(): Observable<Hero[]> {
    this.logger.log('Getting heroes ...');
    return of(HEROES);
  }
}

// 2 tehnicka intervijua

// Algoritmi u data strukturi
// Leadcode 
// Drugi intervju je design discussion
// Poslednji intervju je sa menadzerom