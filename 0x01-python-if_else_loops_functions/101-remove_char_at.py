#!/usr/bin/python3
"""Remove the character at position n from a string."""
def remove_char_at(str, n):
    if n < 0:
        return (str)
    return (str[:n] + str[n+1:])
