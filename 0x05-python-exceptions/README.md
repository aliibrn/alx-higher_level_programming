# Python - Exceptions

This project focuses on understanding and handling errors and exceptions in Python using `try` and `except` blocks. It introduces various techniques to manage exceptions effectively, ensuring robust and error-free code.

---

## Function Prototypes :floppy_disk:

Below are the prototypes for the functions implemented in this project:

| File                             | Prototype                                               |
| -------------------------------- | ------------------------------------------------------- |
| `0-safe_print_list.py`           | `def safe_print_list(my_list=[], x=0):`                 |
| `1-safe_print_integer.py`        | `def safe_print_integer(value):`                        |
| `2-safe_print_list_integers.py`  | `def safe_print_list_integers(my_list=[], x=0):`        |
| `3-safe_print_division.py`       | `def safe_print_division(a, b):`                        |
| `4-list_division.py`             | `def list_division(my_list_1, my_list_2, list_length):` |
| `5-raise_exception.py`           | `def raise_exception():`                                |
| `6-raise_exception_msg.py`       | `def raise_exception_msg(message=""):`                  |
| `100-safe_print_integer_err.py`  | `def safe_print_integer_err(value):`                    |
| `101-safe_function.py`           | `def safe_function(fct, *args):`                        |
| `102-magic_calculation.py`       | `def magic_calculation(a, b):`                          |
| `103-python.c`                   | <ul><li>`void print_python_list(PyObject *p);`</li><li>`void print_python_bytes(PyObject *p);`</li><li>`void print_python_float(PyObject *p);`</li></ul> |

---

## Tasks :page_with_curl:

### **0. Safe list printing**
- **File:** [0-safe_print_list.py](./0-safe_print_list.py)
- **Description:** Prints `x` elements of a list on the same line, followed by a new line.
- **Key Points:**
  - `x` can exceed the length of `my_list`.
  - Returns the actual number of elements printed.
  - Does not use `len()` or import modules.

---

### **1. Safe printing of an integer**
- **File:** [1-safe_print_integer.py](./1-safe_print_integer.py)
- **Description:** Prints an integer using `"{:d}".format()`.
- **Key Points:**
  - Accepts any type for `value`.
  - Returns `True` if `value` is an integer; otherwise, `False`.
  - Does not use `type()` or import modules.

---

### **2. Print and count integers**
- **File:** [2-safe_print_list_integers.py](./2-safe_print_list_integers.py)
- **Description:** Prints the first `x` integers from a list on the same line, followed by a new line.
- **Key Points:**
  - `my_list` can contain any type.
  - Returns the actual number of integers printed.
  - Does not use `len()` or import modules.

---

### **3. Integers division with debug**
- **File:** [3-safe_print_division.py](./3-safe_print_division.py)
- **Description:** Divides two integers and prints the result using `finally`.
- **Key Points:**
  - Returns the division result or `None` if an error occurs.
  - Does not import modules.

---

### **4. Divide a list**
- **File:** [4-list_division.py](./4-list_division.py)
- **Description:** Divides elements of two lists element by element.
- **Key Points:**
  - Returns a new list of length `list_length` containing the results.
  - Handles errors like `wrong type`, `division by 0`, and `out of range`.
  - Does not import modules.

---

### **5. Raise exception**
- **File:** [5-raise_exception.py](./5-raise_exception.py)
- **Description:** Raises a type exception.
- **Key Points:**
  - Does not import modules.

---

### **6. Raise a message**
- **File:** [6-raise_exception_msg.py](./6-raise_exception_msg.py)
- **Description:** Raises a name exception with a custom message.
- **Key Points:**
  - Does not import modules.

---

### **7. Safe integer print with error message**
- **File:** [100-safe_print_integer_err.py](./100-safe_print_integer_err.py)
- **Description:** Prints an integer with type-checking and handles errors.
- **Key Points:**
  - Returns `True` if successful; otherwise, prints an error to `stderr` and returns `False`.
  - Does not import modules.

---

### **8. Safe function**
- **File:** [101-safe_function.py](./101-safe_function.py)
- **Description:** Executes a function safely.
- **Key Points:**
  - Returns the function result or `None` if an error occurs.
  - Prints errors to `stderr`.

---

### **9. ByteCode -> Python #4**
- **File:** [102-magic_calculation.py](./102-magic_calculation.py)
- **Description:** Implements a Python function matching a specific bytecode.

---

### **10. CPython #2: PyFloatObject**
- **File:** [103-python.c](./103-python.c)
- **Description:** C functions that print basic information about Python lists, bytes, and float objects.

---

This README provides a comprehensive overview of the project, detailing each task and its corresponding implementation.
