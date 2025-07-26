#!/usr/bin/python3

def safe_print_integer(value):
    """Print an integer with "{:d}".format().

    Args:
        value (int): The integer to print.

    Returns:
        True if the value is an integer and printed successfully, 
        otherwise False.
    """
    try:
        print("{:d}".format(value))
        return True
    except (TypeError, ValueError):
        return False
