#!/usr/bin/python3

if __name__ == "__main__":
    """Perform basic arithmetic operations."""
    from calculator_1 import add, sub, mul, div
    import sys

    if len(sys.argv) != 4:
        print("Usage: ./100-my_calculator.py <a> <operator> <b>")
        sys.exit(1)

    operator = sys.argv[2]
    a, b = map(int, (sys.argv[1], sys.argv[3]))
    operations = {"+": add, "-": sub, "*": mul, "/": div}

    if operator not in operations:
        print("Unknown operator. Available operators: +, -, * and /")
        sys.exit(1)

    result = operations[operator](a, b)
    print(f"{a} {operator} {b} = {result}")
