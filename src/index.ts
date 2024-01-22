import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

//Sort Arrays of Numbers
const numbersCollection = new NumbersCollection([10000, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

//Sort Strings
const charactersCollection = new CharactersCollection('Ahmed');
charactersCollection.sort();
console.log(charactersCollection.data);

//Sort LinkedList
const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(800);
linkedList.add(500);
linkedList.add(10000000);
linkedList.add(158);
linkedList.add(1248);
linkedList.sort();
linkedList.print();
