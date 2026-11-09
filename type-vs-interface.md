
## Core Differences between Type and Interface 

1. `Type` can not use `extends` for child under parents which `interface` can . `Type` use `&` for combining two types 
   
   ```
   // For Interface
    interface Person {
    name: string;
    }
    
    interface Employee extends Person {
    employeeId: number;
    }
    
    const employee: Employee = {
    name: "Rahim",
    employeeId: 101
    };

    //For Type
    type Person = {
    name: string;
    };

    type Employee = Person & {
    employeeId: number;
    };

    const employee: Employee = {
    name: "Rahim",
    employeeId: 101
    };
```
