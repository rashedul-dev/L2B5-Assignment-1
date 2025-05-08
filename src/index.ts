{
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
      const convertedToLowerCase: string = input.toLowerCase();
      return convertedToLowerCase;
    } else {
      const convertedToUpperCase: string = input.toUpperCase();
      return convertedToUpperCase;
    }
  }

  formatString("Hello"); // Output: "HELLO"
  formatString("Hello", true); // Output: "HELLO"
  formatString("Hello", false); // Output: "hello"

  function filterByRating(
    items: {
      title: string;
      rating: number;
    }[]
  ): {
    title: string;
    rating: number;
  }[] {
    return items.filter((item) => item.rating >= 4);
  }

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  filterByRating(books);
  // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    //   return arrays.flat();
    return ([] as T[]).concat(...arrays);
  }

  concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
  concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]

  class Vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
    getInfo() {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }

  class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
    getModel(): string {
      return `Model: ${this.model}`;
    }
  }

  const myCar = new Car("Toyota", 2020, "Corolla");
  const ourCar = new Car("BMW", 2025, "M4");
  myCar.getInfo(); // Output: "Make: Toyota, Year: 2020"
  myCar.getModel(); // Output: "Model: Corolla"
}
