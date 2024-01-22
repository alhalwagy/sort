"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
//Sort Arrays of Numbers
const numbersCollection = new NumbersCollection_1.NumbersCollection([10000, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
//Sort Strings
const charactersCollection = new CharactersCollection_1.CharactersCollection('Ahmed');
charactersCollection.sort();
console.log(charactersCollection.data);
//Sort LinkedList
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(5);
linkedList.add(800);
linkedList.add(500);
linkedList.add(10000000);
linkedList.add(158);
linkedList.add(1248);
linkedList.sort();
linkedList.print();
