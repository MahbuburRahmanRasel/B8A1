
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



2. An interface can be declared multiple times with the same name. TypeScript automatically combines them.TypeScript does not allow duplicate type alias declarations.


    ```
    interface User {
        name: string;
    }

    interface User {
        email: string;
    }

    interface User {
        age: number;
    }

    const user: User = {
        name: "Rahim",
        email: "rahim@gmail.com",
        age: 25
    };
    
    ```

    3. Union can not use directly in `Interface` but in `Type` can 
   
   ```
   type UserID = number | string;

    let id: UserID;

    id = 101;
    id = "USER-101";
   ```


## When Should use Type and Interface  

`Interface` should use in object structure , Class contracts, Declaration merging and `Type` should use in Union types, Primitive aliases	,Tuple types, Intersection types. 	

	