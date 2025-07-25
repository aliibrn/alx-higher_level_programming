/**
 * print_python_list_info - Displays information about a Python list object.
 * @p: A PyObject pointer representing the Python list.
 *
 * Description:
 * This function retrieves and prints details about a Python list object,
 * including its size, the number of allocated elements, and the type of
 * each element in the list. It uses the Python C API to access the list's
 * properties and elements.
 */
#include <Python.h>
#include <object.h>
#include <listobject.h>

void print_python_list_info(PyObject *p)
{
	long int size = PyList_Size(p);
	int i;
	PyListObject *obj = (PyListObject *)p;

	printf("[*] Size of the Python List = %li\n", size);
	printf("[*] Allocated = %li\n", obj->allocated);
	for (i = 0; i < size; i++)
		printf("Element %i: %s\n", i, Py_TYPE(obj->ob_item[i])->tp_name);
}
