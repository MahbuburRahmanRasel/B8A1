function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier !== undefined) {
    return value * multiplier;
  }
  return value * 2; 
}

function processInput(input: string | number | boolean): string {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return (input * 10).toString();
  } else {
    return input ? "Active" : "Inactive";
  }
}

type Coordinate = readonly [number, number, string];

function formatCoordinate(cordinate: Coordinate): string {
  const [latitude, longitude, locationName] = cordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    (course) => course.students > minStudents && course.isPublished,
  );
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails = (): string => {
    return `Employee Name: ${this.name}, Base Salary: ${this.baseSalary}`;
  };
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }
  getRoleInfo = (): string => {
    return `Manager of ${this.department} : ${this.name}`;
  };
}

async function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve("Access Granted");
      } else {
        reject("Access Denied: Must be 18 or older");
      }
    }, 1000);
  });
}

