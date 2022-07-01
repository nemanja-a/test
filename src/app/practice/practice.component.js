"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PracticeComponent = void 0;
var core_1 = require("@angular/core");
var PracticeComponent = /** @class */ (function () {
    function PracticeComponent() {
        this.currentClasses = {};
        this.currentStyles = {};
        this.currentItem = { name: '', feature: 'bright' };
        this.items = [
            { id: 0, value: 'First' },
            { id: 1, value: 'Second' },
            { id: 2, value: 'Third' },
            { id: 3, value: 'Forth' },
        ];
        this.hero = { id: 0, name: 'Thor' };
        this.heroes = [
            { id: 0, name: 'Thor' },
            { id: 1, name: 'Odin' },
            { id: 2, name: 'Loki' },
        ];
        this.canSave = true;
        this.isUnchanged = false;
        this.isSpecial = true;
        this.color = '';
        this.unlessCondition = false;
    }
    PracticeComponent.prototype.setCurrentClasses = function () {
        this.currentClasses = {
            saveable: this.canSave,
            modified: !this.isUnchanged,
            special: this.isSpecial
        };
    };
    PracticeComponent.prototype.setCurrentStyles = function () {
        this.canSave = !this.canSave;
        this.isUnchanged = !this.isUnchanged;
        this.isSpecial = !this.isSpecial;
        this.currentStyles = {
            'font-style': this.canSave ? 'italic' : 'normal',
            'font-weight': this.isUnchanged ? 'normal' : 'bold',
            'font-size': this.isSpecial ? '24px' : '12px'
        };
    };
    PracticeComponent.prototype.trackByItems = function (index, item) { return item.id; };
    // Leetcode Question 462/2323
    PracticeComponent.prototype.minMoves2 = function (nums) {
        var moves = 0;
        var sum = nums.reduce(function (previousValue, nextValue) { return previousValue + nextValue; }, 0);
        var targetNumber = sum / nums.length;
        nums.forEach(function (num) {
            if (num > targetNumber) {
                moves += num - targetNumber;
            }
            else if (num < targetNumber) {
                moves += targetNumber - num;
            }
        });
        return moves;
    };
    ;
    // Typescript practice - https://www.typescriptlang.org/docs/handbook/2/basic-types.html
    // The Basics
    PracticeComponent.prototype.greet = function (person, date) {
        console.log("Hello ".concat(person, ", today is ").concat(date.toDateString()));
    };
    PracticeComponent.prototype.ngOnInit = function () {
        var today = new Date();
        this.greet('Nemanja', today);
    };
    PracticeComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-practice',
            templateUrl: './practice.component.html',
            styleUrls: ['./practice.component.sass']
        })
    ], PracticeComponent);
    return PracticeComponent;
}());
exports.PracticeComponent = PracticeComponent;
