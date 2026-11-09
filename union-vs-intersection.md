
# Combining Union (`|`) and Intersection (`&`) Types in TypeScript

Let LMS has two types of users:

1. Students
2. Instructors

Both users share common information, but each has different additional properties.

We will combine `&` (Intersection) and `|` (Union) to handle this situation.



## Union (`|`) means OR : 
A value can be one type OR another type.

```
type ID = number | string;

// As number
let userId: ID = 101; 

// As String
userId = "USER-101"; 
```

## Intersection (`&`) means AND : 
A value must satisfy both types.

```
type Person = {
    name: string;
};

type Employee = {
    employeeId: number;
};

type EmployeeDetails = Person & Employee;

// Combine both 
const employee: EmployeeDetails = {
    name: "Rahim",
    employeeId: 101
};
```

Here, `EmployeeDetails` requires both `name` and `employeeId`.

