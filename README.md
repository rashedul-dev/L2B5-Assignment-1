# Union and Intersection Types — With Examples

## Union Types

A **union type** means a value can be one of several types. The following example shows this clearly:

```ts
let car: string | number | object;

car = "BMW";
car = 321;
car = {
  name: "BMW",
  number: 9890,
};
```

In this example, the variable `car` can hold a string, a number, or an object.

---

## Intersection Types

An **intersection type** allows you to combine multiple types into one. This means a value must satisfy all the included types.

```ts
type Car = {
  name: string;
};

type Owner = {
  isOwner: boolean;
};

type CarOwner = Car & Owner;

const person: CarOwner = {
  name: "Rashedul",
  isOwner: true,
};
```

Here, the `CarOwner` type is a combination of both `Car` and `Owner`.

---

# What is the Use of Enums in TypeScript?

Enums are a way to define a set of named constants. The main purpose of an enum is to create a human-readable set of constant values that represent either numbers or strings.

---

# Examples of Numeric and String Enums

## Numaric Enum

Let’s say you’re building a game where you need to perform actions based on whether the user has pressed the up, down, left, or right arrow key.

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function keyPresser(keyPressed: Direction) {
  if (keyPressed === Direction.Up) {
    return Direction.Up;
  }
  if (keyPressed === Direction.Down) {
    return Direction.Down;
  }
  if (keyPressed === Direction.Left) {
    return Direction.Left;
  }
  if (keyPressed === Direction.Right) {
    return Direction.Right;
  }
}

console.log(keyPresser(Direction.Down)); // 1
```

---

## String Enum

This is similar to the previous example, but now you have a set of colors to choose from. Using an enum, you can easily see which colors are available and perform actions based on the selection.

```ts
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

function pickColor(color: Color) {
  if (color === Color.Red) {
    return `Color Chosen: ${Color.Red}`;
  }
  if (color === Color.Green) {
    return `Color Chosen: ${Color.Green}`;
  }
  if (color === Color.Blue) {
    return `Color Chosen: ${Color.Blue}`;
  }
}

console.log(pickColor(Color.Blue)); // Color Chosen: BLUE
```
