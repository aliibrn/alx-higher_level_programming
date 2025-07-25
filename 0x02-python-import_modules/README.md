# Python - Import & Modules

Welcome to the **Python - Import & Modules** project! This project is all about understanding how to organize and reuse code effectively in Python. You'll learn how to import functions, create modules, and use command-line arguments to make your programs more dynamic and versatile. Let's dive into the tasks and explore what each one teaches us!

---

## Tasks Overview :page_with_curl:

### **0. Import a Simple Function from a Simple File**
**File:** [0-add.py](./0-add.py)  
**Purpose:** Learn the basics of importing a function from another file and using it in your program.  
**Description:** This script imports the function `add(a, b)` from [add_0.py](./add_0.py) and demonstrates its usage by adding two numbers (`1` and `2`).  
**Output Example:**  
```
1 + 2 = 3
```

---

### **1. My First Toolbox!**
**File:** [1-calculation.py](./1-calculation.py)  
**Purpose:** Explore how to import multiple functions from a module and perform various operations.  
**Description:** This script imports arithmetic functions (addition, subtraction, multiplication, and division) from [calculator_1.py](./1-calculator.py) and applies them to the numbers `10` and `5`.  
**Output Example:**  
```
10 + 5 = 15
10 - 5 = 5
10 * 5 = 50
10 / 5 = 2.0
```

---

### **2. How to Make a Script Dynamic!**
**File:** [2-args.py](./2-args.py)  
**Purpose:** Understand how to handle command-line arguments in Python.  
**Description:** This script prints the number of arguments passed to it and lists them in order. It dynamically adapts to the number of arguments provided.  
**Output Example:**  
```
3 arguments:
1: first_argument
2: second_argument
3: third_argument
```

---

### **3. Infinite Addition**
**File:** [3-infinite_add.py](./3-infinite_add.py)  
**Purpose:** Practice summing an arbitrary number of command-line arguments.  
**Description:** This script takes any number of arguments, adds them together, and prints the result.  
**Output Example:**  
```
Result: 15
```

---

### **4. Who Are You?**
**File:** [4-hidden_discovery.py](./4-hidden_discovery.py)  
**Purpose:** Learn how to inspect the contents of a module using the `dir()` function.  
**Description:** This script lists all the names defined in the compiled module `hidden_4.pyc`, excluding those that start with `__`.  
**Output Example:**  
```
my_function
another_function
```

---

### **5. Everything Can Be Imported**
**File:** [5-variable_load.py](./5-variable_load.py)  
**Purpose:** Understand how to import variables from another file.  
**Description:** This script imports the variable `a` from [variable_load_5.py](./variable_load_5.py) and prints its value.  
**Output Example:**  
```
42
```

---

### **6. Build My Own Calculator!**
**File:** [100-my_calculator.py](./100-my_calculator.py)  
**Purpose:** Combine everything learned so far to create a command-line calculator.  
**Description:** This script imports arithmetic functions from [calculator_1.py](./calculator_1.py) and performs operations based on user input. It validates the input and handles errors gracefully.  
**Usage Example:**  
```
./100-my_calculator.py 10 + 5
Output: 10 + 5 = 15
```

---

### **7. Easy Print**
**File:** [101-easy_print.py](./101-easy_print.py)  
**Purpose:** Explore creative ways to print output without using common functions like `print`.  
**Description:** This script prints `#pythoniscool` to the standard output without using `print`, `eval`, `open`, or `sys`.  
**Output Example:**  
```
#pythoniscool
```

---

### **8. ByteCode -> Python #3**
**File:** [102-magic_calculation.py](./102-magic_calculation.py)  
**Purpose:** Decode and replicate a specific bytecode into Python code.  
**Description:** This script implements a function that matches a given bytecode exactly, showcasing advanced Python skills.  

---

### **9. Fast Alphabet**
**File:** [103-fast_alphabet.py](./103-fast_alphabet.py)  
**Purpose:** Learn how to generate output efficiently without traditional loops or conditionals.  
**Description:** This script prints the uppercase alphabet in a single line of code, using creative Python techniques.  
**Output Example:**  
```
ABCDEFGHIJKLMNOPQRSTUVWXYZ
```

---

This project is a fantastic way to deepen your understanding of Python's modularity and dynamic capabilities. Happy coding!
