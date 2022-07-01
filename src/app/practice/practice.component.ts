import { Component, OnInit } from '@angular/core';

type Point = {
  x: number,
  y: number 
}

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.sass']
})
export class PracticeComponent implements OnInit {

  currentClasses: Record<string, boolean> = {};
  currentStyles: Record<string, string> = {};
  currentItem = { name: '', feature: 'bright' };
  items: any[] = [
    {id: 0, value : 'First'},
    {id: 1, value : 'Second'},
    {id: 2, value : 'Third'},
    {id: 3, value : 'Forth'},
  ]
  hero = { id:0, name: 'Thor' };
  heroes: any[] = [
    { id: 0, name: 'Thor' },
    { id: 1, name: 'Odin' },
    { id: 2, name: 'Loki' },
  ];

  canSave = true;
  isUnchanged = false;
  isSpecial = true;
  color = '';
  unlessCondition = false;

  constructor() { }
  
  setCurrentClasses(): void {
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial
    }
  }

  setCurrentStyles(): void {
    this.canSave = !this.canSave;
    this.isUnchanged = !this.isUnchanged;
    this.isSpecial = !this.isSpecial;
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': this.isUnchanged ? 'normal' : 'bold',
      'font-size': this.isSpecial ? '24px' : '12px'
    }
  }

  trackByItems(index: number, item: any): number { return item.id; }

  // Leetcode Question 462/2323

  minMoves2(nums: number[]): number {
    let moves = 0;
    let sum = nums.reduce((previousValue, nextValue) => previousValue + nextValue, 0);
    let targetNumber = sum / nums.length;
    
    nums.forEach(num => {
        if (num > targetNumber) {
            moves += num - targetNumber;
        } else if (num < targetNumber) {
            moves += targetNumber - num;
        }
    })    
    
    return moves;
  };

// Typescript practice - https://www.typescriptlang.org/docs/handbook/2/basic-types.html

// The Basics

private greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`)
}


ngOnInit(): void {
  let today = new Date();  
  this.greet('Nemanja', today);
  this.printCoord({x: 5, y: 8});
  this.printId(15);
  this.printId("15");
  this.welcomePeople(["Ip Man, Jackie Chan, Shakira, Jennifer Lopez"]);
}

private printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

private printId (id: number | string) {
  console.log("Your ID is: " + id);  
}

private welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("Hello " + x.join(" and "));
  } else {
    console.log("Welcome lone traveler" + x);
  }
}

// Some comment
}
