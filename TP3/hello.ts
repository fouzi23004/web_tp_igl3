//exercice 1

console.log("Hello Typescript!");

//exercice 2

//1.

let Name: string ;
let Age: number ;
let isAdmin: boolean ;

//2.

let scores : number[] ;

//3.

let etudiant : [string, number] ;

//4.

enum Role {
  USER,
  ADMIN,
  SUPERADMIN,
}

let userRole: Role ;

//exercice 3

//1.

let id : number | string ;

//2.

type A = { id : number } ;
type B = { name : string } ;

let ab : A | B ;

//3.

let Status : "pending" | "done" | "cancelled" ;

//4.

let x : unknown = "hello" ;
let strLength1: number = (x as string).length;

//exercice 4

//1.

interface User {
  id: number;
  name: string;
  email?: string;
  readonly isAdmin: boolean;
}

//2.

let user: User = {
  id: 1,
  name: "John",
  email: "john@example.com",
  isAdmin: true,
};

//3.

interface ADMIN extends User {
    permissions: string[];
}

//exercice 5

//1.

function add(a: number, b: number): number {
    return a + b;
}

//2.

function greet(name: string, age?: number): string {
    if (age) {
        return `Hello, my name is ${name} and I am ${age} years old.`;
    }
    return `Hello, my name is ${name}.`;
}

//3.

function power(base: number, exp: number = 2): number {
    return base ** exp;
}

//4.

function sum (a:number|string, b:number|string): number|string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return a.toString() + b.toString();
}
console.log(sum(1, 2)); // 3
console.log(sum("Hello, ", "world!")); // "Hello, world!"

//exercice 6

//1.

class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    public greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

//2.

class Student extends Person {
    private school: string;
    constructor(name: string, age: number, school: string) {
        super(name, age);
        this.school = school;
    }
}

//3.

abstract class Shape {
    abstract area(): number;
}
class Circle extends Shape {
    private radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    public area(): number {
        return Math.PI * this.radius ** 2;
    }
}
class Triangle extends Shape {
    private base: number;
    private height: number;
    constructor(base: number, height: number) {
        super();
        this.base = base;
        this.height = height;
    }
    public area(): number {
        return 0.5 * this.base * this.height;
    }
}

//4.

interface Drivable {
    drive(): void;
}
class Car implements Drivable {
    public drive(): void {
        console.log("The car is driving.");
    }
}

//exercice 7

//1.

function identity<T>(arg: T): T {
    return arg;
}

//2.

function getFirst<T>(arr: T[]): T{
    return arr[0];
}

//3.

class Repository<T> {
    private items: T[] = [];
    public getAll(): T[] {
        return this.items;
    }
    public add(it: T): void {
        this.items.push(it);
    }
    public remove(x: number): void {
        this.items.splice(x, 1);
    }
}

//4.

interface ApiResponse<T> {
    data: T;
    error?: string;
}
