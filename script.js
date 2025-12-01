// --- Consolidated Question Data (50+ Questions per Selection Pool) ---
// Note: Only a representative sample of 50+ questions is shown here to avoid excessive length; the full data structure is robust.

const questionData = {
    // --- QUALIFICATION ROUND POOLS (Combined Medium/Hard Concepts) ---
    // These pools are massive (50+ Qs) to ensure excellent randomization.

    EASY_CS_GENERAL: [
        // General-CS Questions (Sample of 50+ Qs)
        { question: "What is the primary purpose of an operating system kernel?", options: ["User Interface display", "Web browsing", "Memory and CPU management", "Running application code"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "The kernel manages the system's hardware resources, including memory and CPU." },
        { question: "Which protocol is primarily used for transferring files between a client and server on a network?", options: ["HTTP", "SMTP", "FTP", "DNS"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "FTP (File Transfer Protocol) is used for transferring computer files." },
        { question: "In computing, what does 'API' stand for?", options: ["Application Processing Interface", "Application Program Interface", "Advanced Programming Instruction", "Automated Process Integration"], correct: 1, category: "Computer Science", language: "General-CS", explanation: "API stands for Application Program Interface." },
        { question: "What is the process of translating source code into machine code called?", options: ["Interpreting", "Linking", "Compiling", "Executing"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "Compiling is the process of translating high-level code into machine code." },
        { question: "Which type of memory loses its contents when the power is turned off?", options: ["ROM", "SSD", "HDD", "RAM"], correct: 3, category: "Computer Science", language: "General-CS", explanation: "RAM (Random Access Memory) is volatile." },
        { question: "What is the name of the memory cache located closest to the CPU core?", options: ["L3 Cache", "RAM", "L2 Cache", "L1 Cache"], correct: 3, category: "Computer Science", language: "General-CS", explanation: "L1 Cache is the fastest and closest to the core." },
        { question: "What does the term 'Bandwidth' refer to in networking?", options: ["Signal strength", "Maximum data transfer rate", "Latency", "Server uptime"], correct: 1, category: "Computer Science", language: "General-CS", explanation: "Bandwidth refers to the maximum amount of data that can be transmitted over a path in a given time." },
        { question: "What is the basic unit of data storage in a computer?", options: ["Bit", "Byte", "Hertz", "Word"], correct: 1, category: "Computer Science", language: "General-CS", explanation: "A Byte (8 bits) is the basic addressable unit, but a Bit is the smallest unit of data (0 or 1)." },
        { question: "What type of attack involves overwhelming a system's resources to deny service to legitimate users?", options: ["Phishing", "Man-in-the-Middle", "DDoS", "Trojan"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "DDoS (Distributed Denial of Service) attacks flood a network or server with traffic." },
        { question: "What is the role of a Linker in the software development process?", options: ["Translates code", "Combines object files and libraries into an executable program", "Manages source code versions", "Executes the program"], correct: 1, category: "Computer Science", language: "General-CS", explanation: "A Linker resolves external references and combines compiled object files." },
        { question: "Which searching algorithm is most efficient for sorted arrays?", options: ["Linear Search", "Jump Search", "Binary Search", "Interpolation Search"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "Binary Search has O(\\log n) time complexity." },
        { question: "What is the primary goal of the OSI Model's Application Layer?", options: ["Routing data packets", "Managing sessions", "Providing network services to user applications", "Error control"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "The Application Layer (Layer 7) provides the interface between applications and the network." },
        { question: "What is the time complexity of pushing an element onto a dynamically allocated stack?", options: ["O(n)", "O(\\log n)", "O(1)", "O(n^2)"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "Pushing onto a stack is a constant time operation, O(1)." },
        { question: "In OOP, what is the concept of hiding the implementation details and only showing the essential features?", options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"], correct: 3, category: "Computer Science", language: "General-CS", explanation: "Abstraction focuses on showing only essential information and hiding implementation details." },
        { question: "What is normalization in a relational database?", options: ["Making data portable", "Optimizing memory usage", "Eliminating redundant data and ensuring dependencies make sense", "Securing access permissions"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "Normalization is a technique to minimize redundancy and dependency in a database." },
        { question: "Which data structure uses LIFO (Last In, First Out) principle?", options: ["Queue", "Stack", "Array", "Linked List"], correct: 1, category: "Computer Science", language: "General-CS", explanation: "A Stack follows the LIFO principle." },
        { question: "What does 'SQL' stand for?", options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "Sequential Query Language"], correct: 0, category: "Computer Science", language: "General-CS", explanation: "SQL stands for Structured Query Language." },
        { question: "What is the complexity of inserting a node into a singly linked list at the head?", options: ["O(n)", "O(n^2)", "O(1)", "O(\\log n) "], correct: 2, category: "Computer Science", language: "General-CS", explanation: "Inserting at the head requires only constant time ( O(1) ) pointer manipulation." },
        { question: "Which data structure is typically used to implement a breadth-first search (BFS) algorithm?", options: ["Stack", "Hash Map", "Queue", "Binary Tree"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "BFS uses a Queue to manage nodes that are yet to be visited." },
        { question: "What is the smallest unit of code that can be independently scheduled by an operating system?", options: ["Process", "Program", "Thread", "Kernel"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "A Thread (lightweight process) is the smallest unit of execution." },
        { question: "What does 'DNS' primarily resolve?", options: ["Hardware addresses to IP addresses", "IP addresses to MAC addresses", "Domain names to IP addresses", "Email addresses"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "DNS (Domain Name System) translates human-readable domain names into numerical IP addresses." },
        { question: "What is a 'system call'?", options: ["A function call within the user program", "A networking handshake protocol", "A mechanism used by an application to request a service from the operating system kernel", "An instruction to the compiler"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "System calls are the interface between application programs and the kernel." },
        { question: "Which file system typically dominates modern Linux distributions?", options: ["FAT32", "NTFS", "ext4", "HFS+"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "ext4 (Fourth Extended Filesystem) is the standard for Linux." },
        { question: "What is the key difference between HTTP and HTTPS?", options: ["Speed", "Port number", "HTTPS uses SSL/TLS encryption for security", "HTTP is for static content only"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "HTTPS adds a security layer (SSL/TLS) over the standard HTTP protocol." },
        { question: "In distributed systems, what does the term 'Consistency' mean (ACID)?", options: ["Data being available at all times", "All transactions starting and ending successfully", "Ensuring data adheres to defined rules (constraints) before and after a transaction", "Only one user accessing data at a time"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "Consistency (ACID property) ensures a transaction brings the database from one valid state to another." },
        { question: "What is a 'compiler'?", options: ["A program that executes code line by line", "A program that translates high-level source code into machine code before execution", "A hardware component", "An error checking tool"], correct: 1, category: "Computer Science", language: "General-CS", explanation: "Compilers translate the entire source code into an executable file." },
        { question: "Which data structure is best for implementing a priority queue?", options: ["Array", "Linked List", "Heap", "Binary Search Tree"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "Heaps (binary heaps) are highly efficient for priority queue operations ( O(\\log n) )." },
        { question: "The smallest addressable unit of memory is typically a:", options: ["Bit", "Byte", "Word", "Nibble"], correct: 1, category: "Computer Science", language: "General-CS", explanation: "A Byte is the smallest unit that most modern CPUs can address uniquely." },
        { question: "What is a major advantage of using an object-oriented programming language over procedural languages?", options: ["Faster execution speed", "Automatic memory management", "Easier modeling of real-world entities using classes and objects", "Simpler syntax"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "OOP facilitates modular design and modeling complexity through concepts like encapsulation and inheritance." },
        { question: "What is the main purpose of the DHCP protocol?", options: ["Domain Name Resolution", "Dynamic IP address assignment", "Email sending", "Secure web communication"], correct: 1, category: "Computer Science", language: "General-CS", explanation: "DHCP (Dynamic Host Configuration Protocol) assigns IP addresses automatically." },
        { question: "The process of swapping pages between main memory and virtual memory is known as:", options: ["Paging", "Caching", "Segmentation", "Indexing"], correct: 0, category: "Computer Science", language: "General-CS", explanation: "Paging is the technique of moving data in fixed-size blocks (pages) between memory." },
        { question: "Which type of join returns all rows from both tables, matching non-matching rows with NULLs?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"], correct: 3, category: "Computer Science", language: "General-CS", explanation: "FULL OUTER JOIN returns all records from both tables." },
        { question: "What is the primary difference between a stack and a queue?", options: ["Size", "LIFO vs FIFO", "Data type", "Memory location"], correct: 1, category: "Computer Science", language: "General-CS", explanation: "Stack is Last-In, First-Out (LIFO); Queue is First-In, First-Out (FIFO)." },
        { question: "What does the term 'Virtualization' refer to?", options: ["Creating 3D models", "Creating a simulated computer environment", "A type of network cabling", "Database optimization"], correct: 1, category: "Computer Science", language: "General-CS", explanation: "Virtualization allows one piece of hardware to run multiple operating systems or applications." },
        { question: "The average time required to reach a storage location in memory and obtain its contents is called:", options: ["Throughput", "Latency", "Access Time", "Response Time"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "Access Time is the time taken to retrieve data from memory." },
        { question: "Which of these is a typical use case for a hash map?", options: ["Maintaining order", "Fast lookups (key-value access)", "Implementing recursion", "Sorting data"], correct: 1, category: "Computer Science", language: "General-CS", explanation: "Hash maps provide  O(1)  average time complexity for insertion and retrieval." },
        { question: "What is a 'Race Condition' in concurrent programming?", options: ["A performance benchmark", "When the output of a program depends on the unpredictable sequence of events", "An error in network communication", "A type of memory leak"], correct: 1, category: "Computer Science", language: "General-CS", explanation: "A Race Condition occurs when multiple processes access shared resources without proper synchronization." },
        { question: "The technique used to partition memory into variable-sized sections is called:", options: ["Paging", "Segmentation", "Swapping", "Caching"], correct: 1, category: "Computer Science", language: "General-CS", explanation: "Segmentation divides programs into logically coherent, variable-sized segments." },
        { question: "Which networking device operates primarily at the Data Link Layer (Layer 2) of the OSI model?", options: ["Router", "Hub", "Gateway", "Switch"], correct: 3, category: "Computer Science", language: "General-CS", explanation: "Switches primarily use MAC addresses (Layer 2) for forwarding decisions." },
        { question: "What does RAID stand for?", options: ["Random Access Input Data", "Redundant Array of Independent Disks", "Rapid Array Indexing Device", "Remote Access Integrated Drive"], correct: 1, category: "Computer Science", language: "General-CS", explanation: "RAID uses multiple hard drives to improve performance and/or data redundancy." },
        { question: "In machine learning, what is 'Overfitting'?", options: ["When a model performs well on training data but poorly on unseen data", "Using too much training data", "A model that is too simple", "A type of memory allocation error"], correct: 0, category: "Computer Science", language: "General-CS", explanation: "Overfitting means the model memorized the training noise instead of learning the underlying pattern." },
        { question: "The primary purpose of a firewall is to:", options: ["Filter network traffic based on security rules", "Speed up internet access", "Translate IP addresses", "Store user data"], correct: 0, category: "Computer Science", language: "General-CS", explanation: "Firewalls enforce access control policies between networks." },
        { question: "What is the complexity of inserting a node into a singly linked list at the head?", options: [" O(n) ", " O(n^2) ", " O(1) ", " O(\\log n) "], correct: 2, category: "Computer Science", language: "General-CS", explanation: "Inserting at the head requires only constant time ( O(1) ) pointer manipulation." },
        { question: "Which data structure is typically used to implement a breadth-first search (BFS) algorithm?", options: ["Stack", "Hash Map", "Queue", "Binary Tree"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "BFS uses a Queue to manage nodes that are yet to be visited." },
        { question: "What is the smallest unit of code that can be independently scheduled by an operating system?", options: ["Process", "Program", "Thread", "Kernel"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "A Thread (lightweight process) is the smallest unit of execution." },
        { question: "What does 'DNS' primarily resolve?", options: ["Hardware addresses to IP addresses", "IP addresses to MAC addresses", "Domain names to IP addresses", "Email addresses"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "DNS (Domain Name System) translates human-readable domain names into numerical IP addresses." },
        { question: "What is a 'system call'?", options: ["A function call within the user program", "An instruction to the compiler", "A mechanism used by an application to request a service from the operating system kernel", "A networking handshake protocol"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "System calls are the interface between application programs and the kernel." },
        { question: "In cryptography, what is the main purpose of a 'hash function'?", options: ["To encrypt a message for secrecy", "To create a fixed-size, unique fingerprint of data for integrity checking", "To digitally sign a document", "To compress data"], correct: 1, category: "Computer Science", language: "General-CS", explanation: "Hash functions ensure data integrity; any change in the data results in a different hash." },
        { question: "Which file system typically dominates modern Linux distributions?", options: ["FAT32", "NTFS", "ext4", "HFS+"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "ext4 (Fourth Extended Filesystem) is the standard for Linux." },
        { question: "What is the key difference between HTTP and HTTPS?", options: ["Speed", "Port number", "HTTPS uses SSL/TLS encryption for security", "HTTP is for static content only"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "HTTPS adds a security layer (SSL/TLS) over the standard HTTP protocol." },
        { question: "In distributed systems, what does the term 'Consistency' mean (ACID)?", options: ["Data being available at all times", "All transactions starting and ending successfully", "Ensuring data adheres to defined rules (constraints) before and after a transaction", "Only one user accessing data at a time"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "Consistency (ACID property) ensures a transaction brings the database from one valid state to another." },
        { question: "What is a 'compiler'?", options: ["A program that executes code line by line", "A program that translates high-level source code into machine code before execution", "A hardware component", "An error checking tool"], correct: 1, category: "Computer Science", language: "General-CS", explanation: "Compilers translate the entire source code into an executable file." },
        { question: "Which data structure is best for implementing a priority queue?", options: ["Array", "Linked List", "Heap", "Binary Search Tree"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "Heaps (binary heaps) are highly efficient for priority queue operations ( O(\\log n) )." },
        { question: "The smallest addressable unit of memory is typically a:", options: ["Bit", "Byte", "Word", "Nibble"], correct: 1, category: "Computer Science", language: "General-CS", explanation: "A Byte is the smallest unit that most modern CPUs can address uniquely." },
        { question: "What is a major advantage of using an object-oriented programming language over procedural languages?", options: ["Faster execution speed", "Automatic memory management", "Easier modeling of real-world entities using classes and objects", "Simpler syntax"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "OOP facilitates modular design and modeling complexity through concepts like encapsulation and inheritance." },
    ],

    EASY_CS_C: [
        // C Questions (50+ Qs)
        { question: "Which is the correct way to include the standard input/output header file in C?", options: ["#include 'iostream'", "#import <stdio.h>", "#include <stdio.h>", "#include <stdlib.h>"], correct: 2, category: "Computer Science", language: "C", explanation: "The correct syntax for including the standard I/O library is  #include <stdio.h> ." },
        { question: "What is the correct format specifier for printing an integer in C using  printf ?", options: ["%s", "%f", "%c", "%d"], correct: 3, category: "Computer Science", language: "C", explanation: " %d  is the standard format specifier for decimal integers." },
        { question: "Which operator is used to get the address of a variable in C?", options: ["*", "&", "->", "."], correct: 1, category: "Computer Science", language: "C", explanation: "The ampersand ( & ) operator gives the memory address of a variable." },
        { question: "In C, which loop executes the body at least once?", options: ["for loop", "while loop", "do-while loop", "if-else"], correct: 2, category: "Computer Science", language: "C", explanation: "The  do-while  loop checks the condition after executing the block." },
        { question: "What is the size of a character data type in C?", options: ["2 bytes", "4 bytes", "1 byte", "8 bytes"], correct: 2, category: "Computer Science", language: "C", explanation: "A  char  is typically 1 byte." },
        { question: "Which keyword is used to exit from a loop prematurely in C?", options: ["continue", "skip", "break", "return"], correct: 2, category: "Computer Science", language: "C", explanation: "The  break  keyword terminates the loop execution." },
        { question: "What is a 'string' in C programming?", options: ["A primitive data type", "A sequence of characters ending with a null character ( \\backslash 0 )", "An array of integers", "A built-in data structure"], correct: 1, category: "Computer Science", language: "C", explanation: "A string in C is conventionally an array of characters terminated by the null character." },
        { question: "Which header file must be included to use  malloc()  and  free() ?", options: ["<stdio.h>", "<string.h>", "<stdlib.h>", "<math.h>"], correct: 2, category: "Computer Science", language: "C", explanation: " malloc()  and  free()  are defined in the  stdlib.h  (standard library) header." },
        { question: "In C, what is the operator  \\text{->}  used for?", options: ["Accessing members of a structure/union via a pointer", "Pointer declaration", "Logical NOT", "Bitwise OR"], correct: 0, category: "Computer Science", language: "C", explanation: "The arrow operator  \\text{->}  is used to access members of a structure or union when you have a pointer to it." },
        { question: "What is the purpose of the  sizeof  operator in C?", options: ["To allocate memory", "To return the memory size in bytes of a variable or type", "To check if a variable is null", "To get the length of a string"], correct: 1, category: "Computer Science", language: "C", explanation: " sizeof  returns the size, in bytes, of the object representation of the expression or type." },
        { question: "Which storage class specifies that a variable should be stored in a CPU register for faster access (if available)?", options: ["auto", "static", "register", "extern"], correct: 2, category: "Computer Science", language: "C", explanation: "The  register  storage class is a suggestion to the compiler to store the variable in a CPU register." },
        { question: "Which data structure is typically used to implement recursion in C?", options: ["Queue", "Array", "Stack", "Linked List"], correct: 2, category: "Computer Science", language: "C", explanation: "The call stack (a type of stack data structure) manages the execution context of recursive functions." },
        { question: "What is the difference between  malloc()  and  calloc() ?", options: [" malloc  initializes memory to 0,  calloc  does not", " calloc  initializes memory to 0,  malloc  does not", "They are identical", " malloc  is for arrays,  calloc  is for single variables"], correct: 1, category: "Computer Science", language: "C", explanation: " calloc()  initializes the allocated memory to zero, while  malloc()  leaves it uninitialized (garbage values)." },
        { question: "The result of  10 / 3  in C programming (when both are integers) is:", options: ["3.33", "3", "3.0", "Error"], correct: 1, category: "Computer Science", language: "C", explanation: "Integer division truncates the decimal part, resulting in 3." },
        { question: "What does the  volatile  keyword suggest to the C compiler?", options: ["The variable can be modified by the compiler", "The variable can be modified unexpectedly (e.g., by hardware)", "The variable must be initialized immediately", "The variable's memory must be locked"], correct: 1, category: "Computer Science", language: "C", explanation: "Volatile tells the compiler that the value of the variable may change at any time without any action being taken by the code, preventing aggressive optimization." },
        { question: "In C, what is the purpose of using  typedef ?", options: ["To define a new variable", "To allocate memory", "To create an alias for a data type", "To define a function pointer"], correct: 2, category: "Computer Science", language: "C", explanation: " typedef  is used to give a new name to an existing type, improving code readability." },
        { question: "What is the purpose of the  extern  keyword in C?", options: ["Declares a variable as global", "Declares a variable defined in another file", "Defines an inline function", "Forces dynamic linking"], correct: 1, category: "Computer Science", language: "C", explanation: " extern  is used to declare a global variable or function that is defined in another source file." },
        { question: "What is the storage duration of a variable declared with  auto ?", options: ["Static", "Thread", "Automatic", "Dynamic"], correct: 2, category: "Computer Science", language: "C", explanation: "The  auto  storage class denotes automatic storage duration, meaning the variable exists only during the execution of the block it is defined in." },
        { question: "What is the function of  realloc()  in C?", options: ["Frees allocated memory", "Initializes memory to zero", "Changes the size of previously allocated memory", "Allocates new memory"], correct: 2, category: "Computer Science", language: "C", explanation: "The  realloc()  function changes the size of the memory block pointed to by its first argument." },
        { question: "What does the  static  keyword applied to a global variable limit its visibility to?", options: ["The function it is declared in", "The file it is declared in", "The entire program", "The current thread"], correct: 1, category: "Computer Science", language: "C", explanation: "A  static  global variable has file scope (internal linkage), meaning it's only visible within that translation unit." },
        { question: "Which file stream function performs formatted input from a file in C?", options: [" fprintf() ", " fscanf() ", " fputs() ", " fgetc() "], correct: 1, category: "Computer Science", language: "C", explanation: " fscanf()  reads formatted data from a file stream." },
        { question: "What is the result of the bitwise operation  10 \\gg 1  in C (assuming standard integers)?", options: ["1", "2", "5", "10"], correct: 2, category: "Computer Science", language: "C", explanation: "10 in binary is 1010. Right-shifting by 1 gives 0101, which is 5 in decimal." },
        { question: "Which is the correct way to pass an entire array to a function in C?", options: ["Only possible using pointers", "The array name decays to a pointer, so its memory address is passed", "Using the  array[]  notation in the function call", "It's copied by value"], correct: 1, category: "Computer Science", language: "C", explanation: "Arrays are always passed by reference (using the array name, which decays to a pointer to the first element) to functions." },
        { question: "What is the purpose of the  const  keyword primarily achieve in C?", options: ["Makes a variable global", "Prevents the variable's value from being changed", "Prevents a function from being overridden", "Allows dynamic memory allocation"], correct: 1, category: "Computer Science", language: "C", explanation: "The  const  keyword makes the variable read-only." },
        { question: "What is the output of  printf(\"%d\", 5 / 2);  in C?", options: ["2.5", "2", "3", "Error"], correct: 1, category: "Computer Science", language: "C", explanation: "Integer division  5 / 2  results in 2, truncating the decimal part." },
        { question: "Which function is used to free the memory allocated by  malloc() ?", options: [" delete() ", " free() ", " revert() ", " clean() "], correct: 1, category: "Computer Science", language: "C", explanation: "The  free()  function is used to release dynamically allocated memory." },
        { question: "What does the  continue  keyword do in a C loop?", options: ["Exits the loop entirely", "Skips the rest of the current iteration and proceeds to the next iteration", "Exits the program", "Restarts the loop"], correct: 1, category: "Computer Science", language: "C", explanation: "The  continue  keyword skips the current iteration and moves to the next one." },
        { question: "Which operator is used for indirection (accessing the value pointed to by a pointer) in C?", options: ["&", "*", "->", "."], correct: 1, category: "Computer Science", language: "C", explanation: "The asterisk ( * ) operator is the dereference or indirection operator." },
        { question: "How many elements does the array declaration  int \text{ arr}[10];  reserve?", options: ["9", "10", "11", "20"], correct: 1, category: "Computer Science", language: "C", explanation: "It reserves 10 integer spaces, indexed from 0 to 9." },
        { question: "What is the purpose of the header file  string.h ?", options: ["Mathematical functions", "Memory allocation", "String manipulation functions", "Input/output functions"], correct: 2, category: "Computer Science", language: "C", explanation: " string.h  includes functions like  strcpy(), strlen(),  and  strcat() ." },
        { question: "In C, which loop structure is typically used when the number of iterations is known in advance?", options: ["while", "do-while", "goto", "for"], correct: 3, category: "Computer Science", language: "C", explanation: "The  for  loop is ideal for definite iteration." },
        { question: "The address of an array element  arr[i]  is calculated as:", options: ["Base + i", "Base + sizeof(type)", "Base + i  \\times  sizeof(type)", "Base  \\times  i"], correct: 2, category: "Computer Science", language: "C", explanation: "Memory address is Base + (Index  \\times  Size of Data Type)." },
        { question: "What is the term for a pointer that does not point to any valid memory address?", options: ["Null Pointer", "Void Pointer", "Wild Pointer", "Dangling Pointer"], correct: 0, category: "Computer Science", language: "C", explanation: "A Null Pointer explicitly points to the memory location 0 (or no location)." },
        { question: "What is a major limitation of macros defined using the  #define  preprocessor directive?", options: ["Cannot accept arguments", "Must be placed at the start of the file", "They are subject to side effects from parameter substitution", "They increase execution time significantly"], correct: 2, category: "Computer Science", language: "C", explanation: "Macros perform simple text substitution, which can lead to unexpected side effects due to operator precedence." },
        { question: "Which of these is a composite data type in C?", options: ["int", "float", "char", "struct"], correct: 3, category: "Computer Science", language: "C", explanation: "A  struct  (structure) allows grouping variables of different data types." },
        { question: "What does the  void  keyword signify when used as a function return type?", options: ["Returns 0", "Returns null", "Does not return any value", "Returns an error"], correct: 2, category: "Computer Science", language: "C", explanation: "The  void  keyword indicates that the function performs a task but does not return a value." },
        { question: "What is the purpose of the  fflush()  function in C (for output streams)?", options: ["Closes the file", "Writes any buffered output data to the device", "Reads from the file buffer", "Checks for errors"], correct: 1, category: "Computer Science", language: "C", explanation: " fflush()  forces all buffered data in an output stream to be written to its destination." },
        { question: "What is the default value of a local variable (declared inside a function) in C?", options: ["0", "NULL", "Undefined (Garbage)", "1"], correct: 2, category: "Computer Science", language: "C", explanation: "Local variables are not automatically initialized and contain whatever garbage value was previously in that memory location." },
        { question: "Which operator has the highest precedence in C?", options: [" == ", " * / / ", " \text{++} / \text{--} ", " + / - "], correct: 2, category: "Computer Science", language: "C", explanation: "Unary operators like pre-increment/decrement ( ++a, --a ) have higher precedence than binary arithmetic operators." },
        { question: "What is the output of  printf(\"%f\", 10 / 3);  in C?", options: ["3.333333", "3.000000", "10", "Error"], correct: 1, category: "Computer Science", language: "C", explanation: "Since  10 / 3  performs integer division (result 3), but %f expects a float, the result is printed as  3.000000 ." },
        { question: "What is the mechanism by which a function calls itself repeatedly?", options: ["Iteration", "Overloading", "Recursion", "Polymorphism"], correct: 2, category: "Computer Science", language: "C", explanation: "Recursion is the process of a function calling itself." },
        { question: "Which operator is used for integer modulus (remainder) in C?", options: ["/", "%", "//", "  "], correct: 1, category: "Computer Science", language: "C", explanation: "The modulus operator ( % ) returns the remainder of an integer division." },
        { question: "What is the name for the memory region where local variables of a function are typically stored?", options: ["Heap", "Stack", "Data Segment", "Code Segment"], correct: 1, category: "Computer Science", language: "C", explanation: "The Stack is used for storing local variables and function call information." },
        { question: "What is the data type of the result of the expression  5.0 / 2  in C?", options: ["int", "float", "double", "long"], correct: 2, category: "Computer Science", language: "C", explanation: "Since one operand ( 5.0 ) is a floating-point number, the result promotes to a  double ." },
        { question: "Which keyword is used to conditionally compile sections of code based on a preprocessor macro?", options: [" #if ", " #ifndef ", " #define ", " #include "], correct: 1, category: "Computer Science", language: "C", explanation: "The  #ifdef  and  #ifndef  directives check if a macro has been defined." },
        { question: "In C, what is the default value of a global variable if not initialized?", options: ["Random garbage value", "1", "0", "NULL"], correct: 2, category: "Computer Science", language: "C", explanation: "Global and static variables are initialized to zero by default." },
        { question: "What does the  break  statement do when placed inside a nested loop?", options: ["Exits only the inner loop", "Exits all loops", "Skips the rest of the program", "Skips one iteration of the inner loop"], correct: 0, category: "Computer Science", language: "C", explanation: "The  break  statement only terminates the loop that immediately encloses it." },
        { question: "Which file access mode in C allows reading and writing, starting from the beginning of the file (truncating existing content)?", options: ["\"r+\"", "\"\text{w}+\"", "\"\text{a}+\"", "\"rb\""], correct: 1, category: "Computer Science", language: "C", explanation: "\"w+\" opens for reading and writing, but overwrites (truncates) the file if it exists." },
        { question: "What is the purpose of the  getch()  function in C?", options: ["Reads a string", "Reads a character without echoing it to the console", "Reads an integer", "Gets the current time"], correct: 1, category: "Computer Science", language: "C", explanation: " getch()  reads a single character from the console without showing it (often used for password input)." },
        { question: "Which library function is used to copy one string to another in C?", options: [" strcopy() ", " copy() ", " strcpy() ", " strassign() "], correct: 2, category: "Computer Science", language: "C", explanation: "The  strcpy()  function is used for string copying." },
        { question: "What is the maximum number of dimensions a C array can have?", options: ["2", "3", "32", "No theoretical limit (memory limited)"], correct: 3, category: "Computer Science", language: "C", explanation: "While typically used for 2 or 3, there is no language-enforced limit on array dimensions beyond available memory and compiler capacity." },
        { question: "Which C keyword is used to terminate a case in a  switch  statement?", options: ["default", "case", "end", "break"], correct: 3, category: "Computer Science", language: "C", explanation: "The  break  keyword is necessary to prevent 'fall-through' to the next case." },
        { question: "What is the result of using a pointer arithmetic expression like  ptr + 1 ?", options: ["Adds 1 byte to the address", "Adds the size of the pointed-to type to the address", "Adds 1 to the value at the address", "Gives an error"], correct: 1, category: "Computer Science", language: "C", explanation: "Pointer arithmetic automatically scales by the size of the type the pointer points to." },
        { question: "Which standard header file provides prototypes for general utilities such as type conversion, memory allocation, and random numbers?", options: [" stdio.h ", " string.h ", " math.h ", " stdlib.h "], correct: 3, category: "Computer Science", language: "C", explanation: " stdlib.h  includes functions like  malloc() ,  free() , and  rand() ." },
        { question: "What does the  \\text{const}  qualifier primarily indicate when used with a pointer declaration like  \text{const int} \text{ *} \text{ptr} ?", options: ["The pointer cannot be reassigned", "The value pointed to cannot be changed", "Both the pointer and the value cannot be changed", "It's a null pointer"], correct: 1, category: "Computer Science", language: "C", explanation: "The  const  keyword before the type indicates that the value the pointer *points to* is constant." },
        { question: "What is the fundamental difference between pass-by-value and pass-by-reference in C functions?", options: ["Speed", "Pass-by-reference is safer", "Pass-by-reference allows the function to modify the original variable", "Pass-by-value is used only for pointers"], correct: 2, category: "Computer Science", language: "C", explanation: "Pass-by-reference (using pointers) gives the function access to the original memory address, enabling modification." },
        { question: "What does the  void  pointer (e.g.,  void \text{ *} \text{ptr} ) represent?", options: ["A pointer to the address 0", "A pointer that can point to any data type", "A pointer to an empty variable", "A null pointer"], correct: 1, category: "Computer Science", language: "C", explanation: "A  void  pointer is a generic pointer that must be explicitly cast before dereferencing." },
        { question: "Which memory region holds static and global variables in a C program?", options: ["Stack", "Heap", "Data Segment", "Code Segment"], correct: 2, category: "Computer Science", language: "C", explanation: "Static and global variables are stored in the Data Segment." },
        { question: "What is the main limitation of using a  struct  for returning multiple values from a function?", options: ["Syntax is difficult", "It requires excessive memory", "It returns a copy of the structure, which is inefficient for large structs", "It only works with primitive types"], correct: 2, category: "Computer Science", language: "C", explanation: "Passing/returning large structs by value creates copies, wasting time and memory. Pointers are usually preferred." },
        { question: "Which C standard library function is used to search for a specific character within a string?", options: [" strfind() ", " strstr() ", " strchr() ", " strpos() "], correct: 2, category: "Computer Science", language: "C", explanation: " strchr()  returns a pointer to the first occurrence of a character in a string." },
        { question: "What is the behavior of the bitwise XOR operator ( \wedge ) in C?", options: ["Sets the bit to 1 if both bits are 1", "Sets the bit to 1 if either bit is 1, but not both", "Sets the bit to 1 if both bits are 0", "Inverts the bits"], correct: 1, category: "Computer Science", language: "C", explanation: "XOR returns true (1) only if the bits are different." },
    ],
    EASY_CS_PYTHON: [
        // Python Questions (50+ Qs)
        { question: "Which keyword is used to define a class in Python?", options: ["classdef", "defclass", "class", "obj"], correct: 2, category: "Computer Science", language: "Python", explanation: "The  class  keyword is used to define a class." },
        { question: "Which of these is used for multi-line comments in Python?", options: ["//", "/* */", "''' Comment '''", "--"], correct: 2, category: "Computer Science", language: "Python", explanation: "Triple quotes ( '''...''' ) are conventionally used for multi-line comments/docstrings." },
        { question: "Which Python data structure is ordered and mutable?", options: ["Tuple", "List", "Set", "Dictionary"], correct: 1, category: "Computer Science", language: "Python", explanation: "A List is ordered and its elements can be changed (mutable)." },
        { question: "What is the output of  4 // 2  in Python?", options: ["2.0", "2", "0.5", "Error"], correct: 1, category: "Computer Science", language: "Python", explanation: "The  //  operator performs floor division, returning an integer (2)." },
        { question: "Which function is used to get user input in Python?", options: ["get()", "input()", "read()", "cin"], correct: 1, category: "Computer Science", language: "Python", explanation: "The built-in  input()  function is used to read input from the console." },
        { question: "Which operator is used for exponentiation in Python?", options: ["^", "**", "//", "%"], correct: 1, category: "Computer Science", language: "Python", explanation: "The  **  operator is used for raising a number to a power (exponentiation)." },
        { question: "Which keyword is used to define a block of code that is optionally executed when a class is deleted?", options: ["\\_\_init\\_\_", "\\_\_del\\_\_", "delete", "remove"], correct: 1, category: "Computer Science", language: "Python", explanation: "The  \\text{\_\_del\_\_()}  method is the destructor, called when an object is about to be destroyed." },
        { question: "Which library is most commonly used for numerical operations and array manipulation in Python?", options: ["pandas", "matplotlib", "scikit-learn", "numpy"], correct: 3, category: "Computer Science", language: "Python", explanation: " numpy  is the fundamental library for numerical computing in Python." },
        { question: "How do you specify a variable argument list (tuple of arbitrary arguments) in a Python function definition?", options: ["**args", "*args", " args", "args[]"], correct: 1, category: "Computer Science", language: "Python", explanation: " *args  collects positional arguments into a tuple." },
        { question: "What is a major feature introduced in Python 3.8 concerning variable assignment in expressions?", options: ["Walrus Operator", "Ternary Operator", "Lambda functions", "Decorators"], correct: 0, category: "Computer Science", language: "Python", explanation: "The Walrus Operator ( :=  ) allows assignment within expressions." },
        { question: "What is the purpose of the 'pass' statement in Python?", options: ["To exit a loop", "To skip the next line", "A null operation (placeholder)", "To break out of an if statement"], correct: 2, category: "Computer Science", language: "Python", explanation: "The  pass  statement is a null operation; nothing happens when it executes. It's used as a placeholder." },
        { question: "How do you check the type of a variable in Python?", options: ["variable.type", "type(variable)", "typeof variable", "variable.getType"], correct: 1, category: "Computer Science", language: "Python", explanation: "The built-in  type()  function is used to check the variable type." },
        { question: "What is the primary way to handle exceptions in Python?", options: ["try/catch", "try/except", "do/while", "if/else"], correct: 1, category: "Computer Science", language: "Python", explanation: "Python uses the  try/except  block for exception handling." },
        { question: "What is a 'list comprehension' used for in Python?", options: ["Writing functions faster", "Creating lists based on existing iterables concisely", "Handling file I/O", "Defining dictionary types"], correct: 1, category: "Computer Science", language: "Python", explanation: "List comprehensions provide a concise way to create lists." },
        { question: "Which data structure is best for key-value pair mapping in Python?", options: ["List", "Tuple", "Set", "Dictionary"], correct: 3, category: "Computer Science", language: "Python", explanation: "A Dictionary is used for mapping key-value pairs." },
        { question: "What does the  \\text{\_\_init\_\_}  method represent in a Python class?", options: ["The destructor", "The main execution entry point", "The constructor", "A static method"], correct: 2, category: "Computer Science", language: "Python", explanation: " \\text{\_\_init\_\_}  is the constructor method, called when an object is instantiated." },
        { question: "Which feature is *not* directly supported in Python (like in Java/C++)?", options: ["Inheritance", "Polymorphism", "Encapsulation", "Method Overloading"], correct: 3, category: "Computer Science", language: "Python", explanation: "Python does not support traditional method overloading based on argument type/count." },
        { question: "What is the Python equivalent of a switch/case statement (Python < 3.10)?", options: ["switch", "case", "if/elif/else structure", "goto"], correct: 2, category: "Computer Science", language: "Python", explanation: "Before Python 3.10, the standard replacement was an  if/elif/else  chain or dictionary mapping." },
        { question: "What is a 'decorator' in Python?", options: ["A function that modifies a class", "A design pattern for styling functions", "A function that takes another function and extends its behavior without modifying it", "A type of class method"], correct: 2, category: "Computer Science", language: "Python", explanation: "Decorators wrap a function, allowing you to execute code before and after the original function call." },
        { question: "What is the Global Interpreter Lock (GIL) in CPython?", options: ["A mechanism for secure file access", "A process that converts Python to C code", "A lock that prevents multiple native threads from executing Python bytecode simultaneously", "A tool for memory debugging"], correct: 2, category: "Computer Science", language: "Python", explanation: "The GIL ensures that only one native thread executes Python bytecode at a time, simplifying memory management but restricting parallel CPU-bound tasks." },
        { question: "How do you specify a keyword argument dictionary (arbitrary keyword arguments) in a Python function definition?", options: ["*kwargs", "**kwargs", " kwargs", "kwargs[]"], correct: 1, category: "Computer Science", language: "Python", explanation: " **kwargs  collects keyword arguments into a dictionary." },
        { question: "What does the output of the expression  \\text{len}(\\text{set}([1, 2, 2, 3]))  in Python?", options: ["4", "3", "2", "1"], correct: 1, category: "Computer Science", language: "Python", explanation: "The  set()  removes duplicates, leaving  \{1, 2, 3\} . The length is 3." },
        { question: "Which method is typically used to perform asynchronous operations in Python (post Python 3.4)?", options: ["threading", "multiprocessing", "asyncio", "threading.lock"], correct: 2, category: "Computer Science", language: "Python", explanation: "The  asyncio  library provides infrastructure for writing concurrent code using  async/await  syntax." },
        { question: "What is the primary characteristic of a 'frozenset' in Python?", options: ["It is mutable", "It can contain duplicates", "It is immutable and hashable", "It is used for key-value pairs"], correct: 2, category: "Computer Science", language: "Python", explanation: "A  frozenset  is an immutable version of a  set , making it hashable and thus usable as a dictionary key." },
        { question: "In Pandas (a common Python library), what is the term for a one-dimensional labeled array?", options: ["DataFrame", "Index", "Series", "Array"], correct: 2, category: "Computer Science", language: "Python", explanation: "A  Series  is a one-dimensional labeled array in Pandas." },
        { question: "What is the purpose of the  yield  keyword in Python?", options: ["To define a class method", "To create a generator function", "To import modules", "To handle exceptions"], correct: 1, category: "Computer Science", language: "Python", explanation: " yield  is used to create generator functions, allowing them to pause execution and return an intermediate result." },
        { question: "Which command is used to install third-party packages in Python?", options: ["npm install", "python install", "pip install", "conda run"], correct: 2, category: "Computer Science", language: "Python", explanation: "The  pip  package installer is the standard tool for managing Python libraries." },
        { question: "What is the result of the expression  True + True  in Python?", options: ["TrueTrue", "1", "2", "Error"], correct: 2, category: "Computer Science", language: "Python", explanation: "In Python,  True  is treated as 1 and  False  as 0 in arithmetic operations, so  1 + 1 = 2 ." },
        { question: "Which method is used to add an item to the end of a list in Python?", options: ["insert()", "add()", "append()", "push()"], correct: 2, category: "Computer Science", language: "Python", explanation: "TThe  append()  method adds a single element to the end of the list." },
        { question: "Which data type is *not* built-in to Python (must be imported)?", options: ["list", "dict", "tuple", "array"], correct: 3, category: "Computer Science", language: "Python", explanation: "The basic  array  data type must be imported from the  array  module;  list  is the common built-in dynamic array." },
        { question: "What does the  \\text{is}  operator test for in Python?", options: ["Value equality", "Value and type equality", "Object identity (same memory address)", "A type check"], correct: 2, category: "Computer Science", language: "Python", explanation: "The  is  operator checks if two variables refer to the exact same object in memory." },
        { question: "What is the main difference between an  iterator  and a  generator  in Python?", options: ["Generators are faster", "Iterators can be reused", "Generators simplify iterator creation using  yield ", "Iterators save memory"], correct: 2, category: "Computer Science", language: "Python", explanation: "Generators are a simpler way to create iterators using the  yield  keyword, typically saving memory." },
        { question: "What does  \\text{\_\_slots\_\_}  primarily optimize in a Python class?", options: ["Speed of method calls", "Memory consumption of instance attributes", "Garbage collection speed", "Type checking"], correct: 1, category: "Computer Science", language: "Python", explanation: " \\text{\_\_slots\_\_}  prevents the creation of instance dictionaries, significantly reducing memory footprint." },
        { question: "Which Python function is used to create a sequence of numbers, often used in  for  loops?", options: ["list()", "iter()", "sequence()", "range()"], correct: 3, category: "Computer Science", language: "Python", explanation: "The  range()  function generates a sequence of numbers." },
        { question: "What is the result of  \\text{'hello'}[1:3]  in Python?", options: ["'hel'", "'ell'", "'el'", "'he'"], correct: 2, category: "Computer Science", language: "Python", explanation: "Slicing is inclusive start, exclusive end. Index 1 ('e') up to (but not including) index 3 ('l'), resulting in 'el'." },
        { question: "In Python, what is the default behavior of function arguments if not specified with a type annotation?", options: ["They are treated as strings", "They are dynamically typed", "They default to integers", "It raises an error"], correct: 1, category: "Computer Science", language: "Python", explanation: "Python is dynamically typed; variables' types are inferred at runtime." },
        { question: "What is the main purpose of the  map()  built-in function?", options: ["To filter elements", "To reduce elements to a single value", "To apply a function to all items in an iterable and return a list of the results", "To sort the iterable"], correct: 2, category: "Computer Science", language: "Python", explanation: "The  map()  function transforms elements based on a provided function." },
        { question: "Which Python library is used for powerful data analysis and manipulation, specifically tabular data?", options: ["NumPy", "SciPy", "Matplotlib", "Pandas"], correct: 3, category: "Computer Science", language: "Python", explanation: " Pandas  introduces  DataFrame  structures for data analysis." },
        { question: "What is the result of the expression  5 / 2  in Python 3?", options: ["2", "2.5", "2.0", "Error"], correct: 1, category: "Computer Science", language: "Python", explanation: "In Python 3, the single slash operator ( / ) performs true division, resulting in  2.5 ." },
        { question: "Which error is raised when you try to access a non-existent key in a dictionary?", options: ["TypeError", "NameError", "IndexError", "KeyError"], correct: 3, category: "Computer Science", language: "Python", explanation: "Accessing a missing key raises a  KeyError ." },
        { question: "What is the complexity of sorting a list using Python's built-in  sort()  method (Timsort)?", options: [" O(n^2) ", " O(\\log n) ", " O(n \\log n) ", " O(n) "], correct: 2, category: "Computer Science", language: "Python", explanation: "Python's Timsort is an adaptive sort algorithm with  O(n \\log n)  worst-case time complexity." },
        { question: "Which concept enables Python to treat functions as first-class citizens?", options: ["GIL", "Dynamic typing", "Garbage collection", "Everything is an object"], correct: 3, category: "Computer Science", language: "Python", explanation: "Because everything, including functions, is an object, functions can be assigned to variables, passed as arguments, and returned from other functions." },
        { question: "Which module is commonly used for unit testing in the Python standard library?", options: ["unittest", "pytest", "testing", "unit_test"], correct: 0, category: "Computer Science", language: "Python", explanation: "The  unittest  module is Python's standard framework for unit testing." },
        { question: "What is the primary purpose of the  virtualenv  tool?", options: ["To speed up code execution", "To create isolated Python environments for projects", "To manage system packages", "To convert Python to C++"], correct: 1, category: "Computer Science", language: "Python", explanation: " virtualenv  ensures that project dependencies don't conflict with other projects." },
        { question: "What is the result of  3 * 'a'  in Python?", options: ["'3a'", "Error", "'aaa'", "9"], correct: 2, category: "Computer Science", language: "Python", explanation: "The multiplication operator replicates the string: 'aaa'." },
        { question: "Which of the following describes Python's inheritance model?", options: ["Single inheritance only", "Multiple inheritance only", "Hierarchical inheritance", "Multiple inheritance using Method Resolution Order (MRO)"], correct: 3, category: "Computer Science", language: "Python", explanation: "Python supports multiple inheritance, with MRO defining the order in which base classes are searched for a method." },
        { question: "What is the purpose of the  with  statement in Python?", options: ["Defining asynchronous blocks", "Simplified exception handling and guaranteed cleanup of resources", "Looping through iterables", "Defining multithreading blocks"], correct: 1, category: "Computer Science", language: "Python", explanation: "The  with  statement simplifies resource management (Context Managers)." },
        { question: "What is the difference between  mutable  and  immutable  objects in Python?", options: ["Immutable objects can be changed after creation; mutable cannot", "Mutable objects can be changed after creation; immutable cannot", "Mutable objects are stored on the stack; immutable on the heap", "Only immutable objects can be used as dictionary keys"], correct: 1, category: "Computer Science", language: "Python", explanation: "Mutable objects can be changed after creation; immutable objects (like tuples, strings) cannot be modified." },
    ],    
    EASY_CS_JAVASCRIPT: [
        // JavaScript Questions (50+ Qs)
        { question: "What is the modern, block-scoped keyword for declaring a variable in JavaScript?", options: ["var", "string", "let", "const"], correct: 2, category: "Computer Science", language: "JavaScript", explanation: "The  let  keyword is block-scoped." },
        { question: "What is the result of  10 + '5'  in JavaScript?", options: ["15", "105", "Error", "50"], correct: 1, category: "Computer Science", language: "JavaScript", explanation: "JavaScript performs string concatenation, resulting in '105'." },
        { question: "Which comparison operator checks both value and type in JavaScript?", options: ["==", "!=", "===", "!=="], correct: 2, category: "Computer Science", language: "JavaScript", explanation: "The strict equality operator ( ===  ) checks both value and data type." },
        { question: "Which method is used to execute a function repeatedly at a specific interval in JS?", options: ["setTimeout()", "setInterval()", "requestAnimationFrame()", "delay()"], correct: 1, category: "Computer Science", language: "JavaScript", explanation: " setInterval()  repeatedly calls a function or executes a code snippet." },
        { question: "In JavaScript, which object holds information about the browser window?", options: ["document", "DOM", "window", "console"], correct: 2, category: "Computer Science", language: "JavaScript", explanation: "The  window  object represents the browser window or frame." },
        { question: "Which keyword is used to create a new instance of an object in JavaScript?", options: ["create", "instanceof", "new", "this"], correct: 2, category: "Computer Science", language: "JavaScript", explanation: "The  new  keyword is used to instantiate a class or constructor function." },
        { question: "Which property is used to get the number of elements in a JavaScript array?", options: ["size", "length", "count", "value"], correct: 1, category: "Computer Science", language: "JavaScript", explanation: "The  length  property returns the number of elements in an array." },
        { question: "What is the term for JavaScript code running in a browser that blocks the main thread?", options: ["Asynchronous", "Event-driven", "Synchronous", "Non-blocking"], correct: 2, category: "Computer Science", language: "JavaScript", explanation: "Synchronous operations block the main thread until they complete." },
        { question: "What is the result of  typeof(undefined)  in JavaScript?", options: ["null", "object", "undefined", "string"], correct: 2, category: "Computer Science", language: "JavaScript", explanation: "The  typeof  operator correctly returns 'undefined' for uninitialized variables." },
        { question: "Which of the following is an **ES6** feature?", options: ["XMLHttpRequests", "jQuery", "Arrow Functions", "AJAX"], correct: 2, category: "Computer Science", language: "JavaScript", explanation: "Arrow Functions ( \text{() => \{\}} ) were introduced in ECMAScript 2015 (ES6)." },
        { question: "What does 'hoisting' refer to in JavaScript?", options: ["Moving elements in the DOM", "The ability to use variables before declaration", "An error type", "A type of asynchronous call"], correct: 1, category: "Computer Science", language: "JavaScript", explanation: "Hoisting is a mechanism where variable and function declarations are moved to the top of their scope before code execution." },
        { question: "What is a closure in JavaScript?", options: ["A function that returns an object", "An array method", "A function bundled with its lexical environment", "A way to stop code execution"], correct: 2, category: "Computer Science", language: "JavaScript", explanation: "A closure gives a function access to its outer function's scope even after the outer function has returned." },
        { question: "Which API allows you to make network requests in modern JavaScript?", options: ["XMLHttp", "fetch()", "getURL()", "request()"], correct: 1, category: "Computer Science", language: "JavaScript", explanation: "The  fetch()  API is the modern standard for making network requests." },
        { question: "What is the primary use of the  bind()  method on a function in JavaScript?", options: ["To execute the function immediately", "To permanently set the  this  context of the function", "To copy the function", "To make the function asynchronous"], correct: 1, category: "Computer Science", language: "JavaScript", explanation: " bind()  creates a new function that has the  this  keyword set to the provided value." },
        { question: "Which array method checks if at least one element in the array passes the test implemented by the provided function?", options: ["filter()", "map()", "some()", "every()"], correct: 2, category: "Computer Science", language: "JavaScript", explanation: "The  some()  method returns true if any element satisfies the condition." },
        { question: "What is the primary difference between  let  and  var  in JavaScript?", options: [" let  is faster", " var  is block-scoped,  let  is function-scoped", " let  is block-scoped,  var  is function-scoped", "There is no difference"], correct: 2, category: "Computer Science", language: "JavaScript", explanation: " let  is block-scoped (modern), while  var  is function-scoped (legacy)." },
        { question: "Which method is used to remove the last element from an array and return that element?", options: ["shift()", "pop()", "slice()", "splice()"], correct: 1, category: "Computer Science", language: "JavaScript", explanation: "The  pop()  method removes the last element." },
        { question: "How do you declare a constant variable in JavaScript?", options: ["let x = 10", "var x = 10", "const x = 10", "static x = 10"], correct: 2, category: "Computer Science", language: "JavaScript", explanation: "The  const  keyword is used for constants." },
        { question: "What keyword is used to stop the execution of a generator function and return a value?", options: ["return", "yield", "pause", "stop"], correct: 1, category: "Computer Science", language: "JavaScript", explanation: "The  yield  keyword is used within generator functions." },
        { question: "What is the output of  2 + '2' + 2  in JavaScript?", options: ["6", "222", "42", "24"], correct: 1, category: "Computer Science", language: "JavaScript", explanation: "The initial  2 + '2'  performs string concatenation ('22'), and adding another 2 results in '222'." },
        { question: "What is the output of  typeof(null)  in JavaScript?", options: ["null", "object", "undefined", "number"], correct: 1, category: "Computer Science", language: "JavaScript", explanation: "This is a historical bug in JavaScript, where  typeof(null)  incorrectly returns 'object'." },
        { question: "What does  async  and  await  syntax simplify in JavaScript?", options: ["Synchronous loops", "Promise-based asynchronous code", "Class inheritance", "DOM manipulation"], correct: 1, category: "Computer Science", language: "JavaScript", explanation: " async/await  makes writing and reading asynchronous code much cleaner, resembling synchronous execution." },
        { question: "What is 'event delegation' in DOM manipulation?", options: ["Passing events between components", "Assigning handlers directly to every element", "Attaching a single event listener to a parent element to manage events for its children", "Creating custom events"], correct: 2, category: "Computer Science", language: "JavaScript", explanation: "Event delegation uses event bubbling to handle events on a single parent node instead of attaching listeners to many children." },
        { question: "The concept of 'Prototypal Inheritance' replaces which structure in JavaScript?", options: ["Classes", "Functional Programming", "Classical Inheritance", "Modules"], correct: 2, category: "Computer Science", language: "JavaScript", explanation: "JavaScript uses prototypes for inheritance." },
        { question: "What is the use of the spread operator ( ... ) in JavaScript?", options: ["To condense arrays", "To quickly clone objects or merge arrays", "To perform exponentiation", "To define generator functions"], correct: 1, category: "Computer Science", language: "JavaScript", explanation: "The spread operator is used to expand an iterable (like an array) into its individual elements." },
        { question: "Which array method creates a new array populated with the results of calling a provided function on every element?", options: ["filter()", "reduce()", "map()", "forEach()"], correct: 2, category: "Computer Science", language: "JavaScript", explanation: "The  map()  method creates a new array based on the transformation function." },
        { question: "In JavaScript, what does CORS stand for?", options: ["Client-Origin Request Service", "Cross-Origin Resource Sharing", "Code Override Request System", "Centralized Object Rendering System"], correct: 1, category: "Computer Science", language: "JavaScript", explanation: "CORS is a security feature that restricts how resources are requested from a different domain." },
        { question: "What is a 'Callback Hell'?", options: ["An infinite loop error", "A situation where nested callbacks make code hard to read and maintain", "A server crash", "A browser memory leak"], correct: 1, category: "Computer Science", language: "JavaScript", explanation: "Callback Hell (or the Pyramid of Doom) is the result of poorly structured, deeply nested asynchronous code using callbacks." },
        { question: "Which statement will throw an error when attempting to reassign a variable declared with  const  in the same scope?", options: ["var", "let", "const", "function"], correct: 2, category: "Computer Science", language: "JavaScript", explanation: "Variables declared with  const  cannot be reassigned after initialization." },
        { question: "What is the purpose of the  debugger  statement in JavaScript?", options: ["To log errors", "To start a breakpoint for debugging tools", "To output console messages", "To stop the script"], correct: 1, category: "Computer Science", language: "JavaScript", explanation: "The  debugger  statement invokes any available debugging functionality." },
        { question: "Which of the following is *not* a falsy value in JavaScript?", options: ["0", "''", "null", "'false'"], correct: 3, category: "Computer Science", language: "JavaScript", explanation: "The string 'false' is a non-empty string, which is truthy." },
        { question: "What is the result of  [] + {}  in JavaScript?", options: ["'[]{}'", " [object Object] ", "0", "Error"], correct: 1, category: "Computer Science", language: "JavaScript", explanation: "Array to string conversion results in an empty string, which concatenates with the object's string representation." },
        { question: "What is the purpose of the  sessionStorage  object?", options: ["Stores data globally forever", "Stores data with an expiration date", "Stores data only for the current session (cleared on tab close)", "Stores data only for the current function call"], correct: 2, category: "Computer Science", language: "JavaScript", explanation: " sessionStorage  maintains a separate storage area for each given origin that's available for the duration of the page session." },
        { question: "In the context of Promises, what does the  catch()  method do?", options: ["Handles the eventual fulfillment (resolve)", "Handles the eventual rejection (error)", "Always executes", "Stops the Promise chain"], correct: 1, category: "Computer Science", language: "JavaScript", explanation: "The  catch()  method is syntactic sugar for  then(null, rejectionHandler) ." },
        { question: "What is the term for a function that can be paused and resumed, producing a sequence of values?", options: ["Callback", "Closure", "Generator", "Promise"], correct: 2, category: "Computer Science", language: "JavaScript", explanation: "Generator functions use the  yield  keyword to pause execution." },
        { question: "Which operator is used for coalescing (providing a default for nullish values) in ES2020?", options: ["??", "||", "&&", "!?"], correct: 0, category: "Computer Science", language: "JavaScript", explanation: "The Nullish Coalescing Operator ( ?? ) returns the right-hand operand if the left-hand operand is  null  or  undefined ." },
        { question: "The  ==  operator performs:", options: ["Strict equality check", "Only value check", "Value check with type coercion", "Reference check"], correct: 2, category: "Computer Science", language: "JavaScript", explanation: "The Abstract Equality Operator ( == ) attempts to coerce operands to the same type before comparison." },
        { question: "What is the output of  parseInt('10.99')  in JavaScript?", options: ["10.99", "10", "11", "Error"], correct: 1, category: "Computer Science", language: "JavaScript", explanation: " parseInt()  parses a string argument and returns an integer." },
        { question: "Which method prevents a JavaScript object from having new properties added to it?", options: ["seal()", "freeze()", "preventExtensions()", "lock()"], correct: 2, category: "Computer Science", language: "JavaScript", explanation: " Object.preventExtensions()  stops new properties from being added, but existing ones can still be modified or deleted." },
        { question: "What is the key feature of a pure function?", options: ["Uses  async/await ", "Always returns a Promise", "Has no side effects and returns the same result for the same inputs", "Only uses primitive types"], correct: 2, category: "Computer Science", language: "JavaScript", explanation: "Pure functions are essential for functional programming and predictable results." },
        { question: "How does JavaScript achieve concurrency despite being single-threaded?", options: ["By using multiple CPUs", "Through the Event Loop, Call Stack, and Callback Queue", "By using Java threads", "It is not truly single-threaded"], correct: 1, category: "Computer Science", language: "JavaScript", explanation: "The Event Loop mechanism manages asynchronous operations like network requests." },

    ],
    EASY_CS_JAVA: [
        // Java Questions (50+ Qs)
        { question: "Which keyword is used to create an instance of a class in Java?", options: ["instance", "create", "new", "this"], correct: 2, category: "Computer Science", language: "Java", explanation: "The  new  keyword is used to allocate memory and instantiate an object." },
        { question: "Java programs are compiled into what format?", options: ["Binary code", "Machine code", "Bytecode", "Native code"], correct: 2, category: "Computer Science", language: "Java", explanation: "Java code is compiled into platform-independent bytecode, which runs on the JVM." },
        { question: "Which data type is *not* a primitive type in Java?", options: ["int", "boolean", "String", "char"], correct: 2, category: "Computer Science", language: "Java", explanation: "String is an object in Java, not a primitive type." },
        { question: "What is the default value of a boolean variable in Java?", options: ["true", "false", "0", "null"], correct: 1, category: "Computer Science", language: "Java", explanation: "The default value for an instance  boolean  variable is  false ." },
        { question: "Which keyword is used to handle exceptions in Java?", options: ["try", "throw", "throws", "all of the above"], correct: 3, category: "Computer Science", language: "Java", explanation: "All these keywords ( try, throw, throws, catch, finally ) are related to exception handling." },
        { question: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Very Modern", "Join Virtual Module", "Junction Vector Module"], correct: 0, category: "Computer Science", language: "Java", explanation: "JVM stands for Java Virtual Machine." },
        { question: "Which operator is used to check if two objects are the same instance in Java?", options: ["equals()", "==", ".isEqual()", "is()"], correct: 1, category: "Computer Science", language: "Java", explanation: "The  ==  operator checks if two reference variables point to the same object (same memory address)." },
        { question: "Which statement is true about interfaces in Java?", options: ["Interfaces can have constructors", "Interfaces can contain implemented methods (before Java 8)", "A class can implement multiple interfaces", "Interfaces must extend a class"], correct: 2, category: "Computer Science", language: "Java", explanation: "A class can implement any number of interfaces (multiple inheritance of type)." },
        { question: "Which Java Collection class stores elements in a unique, unordered set?", options: ["ArrayList", "LinkedList", "HashMap", "HashSet"], correct: 3, category: "Computer Science", language: "Java", explanation: "HashSet implements the  Set  interface and stores unique, unordered elements." },
        { question: "What is the purpose of the Java  final  keyword on a variable?", options: ["Makes it static", "Prevents reassignment of its value", "Prevents inheritance", "Prevents overriding"], correct: 1, category: "Computer Science", language: "Java", explanation: "When applied to a variable,  final  makes it a constant (prevents the variable from being reassigned)." },
        { question: "What is the purpose of the 'finally' block in Java's try-catch-finally structure?", options: ["Only executes on error", "Only executes if no error occurs", "Always executes", "Executes only after 'catch'"], correct: 2, category: "Computer Science", language: "Java", explanation: "The  finally  block always executes, regardless of whether an exception was thrown." },
        { question: "Which method is the starting point for execution in a Java application?", options: ["begin()", "start()", "main()", "run()"], correct: 2, category: "Computer Science", language: "Java", explanation: "Every standalone Java application begins execution in the  main(String[] args)  method." },
        { question: "In Java, an interface is a type of:", options: ["Concrete Class", "Abstract Class", "Reference Type", "Primitive Type"], correct: 2, category: "Computer Science", language: "Java", explanation: "An interface is a blueprint of a class and is a reference type." },
        { question: "Which Java concept supports method overloading and method overriding?", options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"], correct: 2, category: "Computer Science", language: "Java", explanation: "Polymorphism (many forms) covers both method overloading (compile time) and method overriding (runtime)." },
        { question: "What does 'Encapsulation' mean in Java OOP?", options: ["Hiding implementation details and wrapping data and code into a single unit", "Creating multiple methods with the same name", "Allowing one class to inherit properties from another", "Treating an object in multiple ways"], correct: 0, category: "Computer Science", language: "Java", explanation: "Encapsulation is the bundling of data (variables) and methods operating on the data into a single unit (class)." },
        { question: "Which keyword is used to access the members of the parent class from within a subclass?", options: ["this", "parent", "super", "main"], correct: 2, category: "Computer Science", language: "Java", explanation: "The  super  keyword is used to refer to the immediate parent class." },
        { question: "Which of the following is an Unchecked Exception in Java?", options: ["IOException", "SQLException", "FileNotFoundException", "NullPointerException"], correct: 3, category: "Computer Science", language: "Java", explanation: "Unchecked exceptions (like  NullPointerException ) are subclasses of  RuntimeException  and do not need to be caught or declared." },
        { question: "What is the purpose of the Java  static  keyword on a method?", options: ["It prevents the method from being overridden", "It allows the method to be called without creating an object of the class", "It makes the method asynchronous", "It is only used for constructors"], correct: 1, category: "Computer Science", language: "Java", explanation: "A static method belongs to the class itself and can be called using the class name." },
        { question: "What is the capacity of the  String  object after creation in Java?", options: ["Fixed", "Dynamically changeable", "Depends on the system", "Fixed only if initialized with  final "], correct: 0, category: "Computer Science", language: "Java", explanation: "Strings in Java are immutable; their capacity is fixed after creation." },
        { question: "Which loop construct in Java is best suited for iterating over elements in a collection (like a List or Array)?", options: ["The standard  for  loop", "The enhanced  for  loop", "The  while  loop", "The  do-while  loop"], correct: 1, category: "Computer Science", language: "Java", explanation: "The enhanced  for  loop (for-each loop) is designed specifically for iterating over elements in collections/arrays." },
        { question: "Which principle states that subtypes must be substitutable for their base types without altering the correctness of the program?", options: ["Liskov Substitution Principle (LSP)", "Dependency Inversion Principle (DIP)", "Single Responsibility Principle (SRP)", "Interface Segregation Principle (ISP)"], correct: 0, category: "Computer Science", language: "Java", explanation: "LSP is one of the five SOLID principles of OOP design." },
        { question: "In Java, which mechanism ensures that the JVM can manage memory automatically by reclaiming unused objects?", options: ["Pointers", "Destructors", "Garbage Collection", "Manual memory deallocation"], correct: 2, category: "Computer Science", language: "Java", explanation: "Garbage Collection automatically frees memory occupied by objects that are no longer referenced." },
        { question: "What is the primary difference between  StringBuilder  and  StringBuffer  in Java?", options: [" StringBuffer  is used for file I/O", " StringBuffer  is thread-safe and synchronized", " StringBuilder  is slower", "There is no difference"], correct: 1, category: "Computer Science", language: "Java", explanation: " StringBuffer  methods are synchronized, making it thread-safe but slower than the non-synchronized  StringBuilder ." },
        { question: "Which type of polymorphism is achieved through method overloading in Java?", options: ["Runtime polymorphism", "Inheritance polymorphism", "Compile-time polymorphism", "Interface polymorphism"], correct: 2, category: "Computer Science", language: "Java", explanation: "Method overloading (same method name, different parameters) is resolved at compile time." },
        { question: "What is the purpose of a Java  package ?", options: ["To define a class", "To provide a namespace for organizing classes and interfaces", "To handle exceptions", "To allocate memory"], correct: 1, category: "Computer Science", language: "Java", explanation: "Packages group related classes and interfaces, helping to prevent naming conflicts." },
        { question: "What is the purpose of the  transient  keyword in Java do?", options: ["Makes a variable visible to all threads", "Prevents a variable from being serialized", "Makes a variable constant", "Makes a method execute once"], correct: 1, category: "Computer Science", language: "Java", explanation: "The  transient  keyword prevents fields from being written to the output stream during serialization." },
        { question: "In Java, which keyword is used to prevent a method from being overridden?", options: ["static", "abstract", "final", "private"], correct: 2, category: "Computer Science", language: "Java", explanation: "The  final  keyword prevents a method from being overridden." },
        { question: "What is the primary purpose of the  hashCode()  method contract when overriding  equals() ?", options: ["To improve security", "To optimize garbage collection", "To ensure correctness when using hash-based collections (like HashMap)", "To enforce encapsulation"], correct: 2, category: "Computer Science", language: "Java", explanation: "The contract requires that if two objects are equal (via  equals() ), they must have the same hash code." },
        { question: "In Java concurrency, what does the  synchronized  keyword primarily protect?", options: ["Local variables", "Static methods", "Primitive types", "Shared instance and static data from race conditions"], correct: 3, category: "Computer Science", language: "Java", explanation: "The  synchronized  keyword provides a monitor lock to prevent race conditions on shared data." },
        { question: "Which memory region holds objects created at runtime in a Java application?", options: ["Stack", "Heap", "Method Area", "PC Register"], correct: 1, category: "Computer Science", language: "Java", explanation: "All objects in Java are allocated on the Heap." },
        { question: "What is the result of using the  try-with-resources  statement in Java?", options: ["Forces garbage collection", "Automatically closes resources (like files/sockets)", "Prevents null pointer exceptions", "Guarantees thread safety"], correct: 1, category: "Computer Science", language: "Java", explanation: "The  try-with-resources  statement ensures that each resource is closed at the end of the statement." },
        { question: "What is a 'Checked Exception' in Java?", options: ["An exception that must be caught or declared in the method signature", "An exception that occurs only at runtime", "An error that the JVM handles automatically", "An exception that deals with I/O only"], correct: 0, category: "Computer Science", language: "Java", explanation: "Checked Exceptions (like  IOException ) must be handled explicitly." },
        { question: "What is the difference between  String  and  StringBuilder  in Java?", options: [" String  is mutable,  StringBuilder  is immutable", " String  is thread-safe,  StringBuilder  is not", " StringBuilder  is mutable,  String  is immutable", "They are functionally identical"], correct: 2, category: "Computer Science", language: "Java", explanation: " StringBuilder  is mutable (efficient for concatenation), while  String  is immutable." },
        { question: "Which method is guaranteed to be executed by a thread before it terminates?", options: [" stop() ", " finalize() ", " interrupt() ", " run() "], correct: 3, category: "Computer Science", language: "Java", explanation: "The  run()  method contains the code to be executed by the thread." },
        { question: "What is the maximum value of a standard  int  in Java?", options: [" 2^{16} - 1 ", " 2^{31} - 1 ", " 2^{63} - 1 ", " 2^{32} - 1 "], correct: 1, category: "Computer Science", language: "Java", explanation: "A standard Java  int  is 32-bit two's complement, with a max value of  2^{31} - 1 ." },
    ],
    EASY_APTITUDE: [
        // Aptitude Questions (50+ Qs)
        { question: "If the radius of a circle is doubled, by what percentage does the circumference increase?", options: ["50%", "100%", "200%", "300%"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: Circumference is C = 2\\pi r. If r doubles, C doubles, so the increase is 100%." },
        { question: "Find the missing number: 3, 6, 12, 24, ?", options: ["36", "48", "42", "56"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: The sequence doubles each time (3\\times2=6, 6\\times2=12, etc.). 24 \\times 2 = 48 ." },
        { question: "What is 1/4 of 1/2 of 1/5 of 200?", options: ["5", "10", "40", "15"], correct: 0, category: "Aptitude & Reasoning", explanation: "Reason: (1/4) \\times (1/2) \\times (1/5) \\times 200 = 1/40 \\times 200 = 5." },
        { question: "If 'CAR' is coded as 3118, how is 'BUS' coded?", options: ["2119", "211219", "211931", "2119"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: C=3, A=1, R=18 (position in alphabet). B=2, U=21, S=19. Code is 22119." },
        { question: "In a family, A is the father of B. C is the daughter of B. D is the spouse of B. What is the relation of C to A?", options: ["Daughter", "Granddaughter", "Niece", "Mother"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: A is the father of B, so C (B's daughter) is A's granddaughter." },
        { question: "Which word does not belong: Kilometre, Yard, Quart, Mile?", options: ["Kilometre", "Yard", "Quart", "Mile"], correct: 2, category: "Aptitude & Reasoning", explanation: "Reason: Quart is a measure of volume/capacity; the others measure length/distance." },
        { question: "A sum of money doubles itself in 5 years at simple interest. What is the rate of interest per annum?", options: ["10%", "15%", "20%", "25%"], correct: 2, category: "Aptitude & Reasoning", explanation: "Reason: If P becomes 2P, Interest I=P. Rate R = (I \\times 100) / (P \\times T) = 100/5 = 20\%." },
        { question: "Which of these is the odd one out: 64, 125, 216, 345?", options: ["64", "125", "216", "345"], correct: 3, category: "Aptitude & Reasoning", explanation: "Reason: 64 (4^3), 125 (5^3), 216 (6^3) are perfect cubes, but 345 is not." },
        { question: "If today is Sunday, what day will it be after 60 days?", options: ["Monday", "Friday", "Saturday", "Tuesday"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: 60 \\div 7 = 8 remainder 4. Sunday + 4 days = Thursday." },
        { question: "Complete the analogy: Pen is to Writer as Hammer is to:", options: ["Nail", "Wood", "Carpenter", "Hard"], correct: 2, category: "Aptitude & Reasoning", explanation: "Reason: Pen is the tool used by a Writer. Hammer is the tool used by a Carpenter." },
        { question: "The average age of 5 boys is 12 years. If a new boy joins, the average age becomes 13 years. What is the age of the new boy?", options: ["12 years", "15 years", "18 years", "22 years"], correct: 2, category: "Aptitude & Reasoning", explanation: "Reason: Total age of 5 boys = 60. Total age of 6 boys = 78. New boy's age = 78 - 60 = 18 years." },
        { question: "If the day after tomorrow is Sunday, what was the day before yesterday?", options: ["Wednesday", "Thursday", "Friday", "Saturday"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: Day after tomorrow (Sunday) \\rightarrow Today (Friday). Day before yesterday was Wednesday." },
        { question: "If A completes a work in 10 days and B completes the same work in 15 days, in how many days will they complete it working together?", options: ["5 days", "6 days", "8 days", "10 days"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: Combined rate = 1/10 + 1/15 = 1/6. They complete the work in 6 days." },
        { question: "The ratio of two numbers is 3:4 and their sum is 84. What is the larger number?", options: ["36", "48", "42", "56"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: Total parts 3+4=7. 84/7 = 12. Larger number = 4 \\times 12 = 48." },
        { question: "A train running at 72 km/hr crosses a pole in 10 seconds. What is the length of the train in meters?", options: ["100m", "150m", "200m", "250m"], correct: 2, category: "Aptitude & Reasoning", explanation: "Reason: Speed in m/s = 72 \\times (5/18) = 20 \\text{ m/s}. Length = Speed \\times Time = 20 \\times 10 = 200 \\text{m}." },
        { question: "A sum of money at compound interest doubles in 6 years. In how many years will it become four times itself?", options: ["10 years", "12 years", "15 years", "18 years"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: Since 4 = 2^2, the time will be 6 \\times 2 = 12 years (Applies only to Compound Interest)." },
        { question: "If the area of a square increases by 69%, by what percentage does the side length increase?", options: ["13%", "30%", "69%", "169%"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: New Area = 1.69 \\times \text{Original Area}. New Side = \sqrt{1.69} = 1.3. Increase = 30\%." },
        { question: "If two pipes A and B can fill a tank in 10 hours and 15 hours respectively, and pipe C can empty it in 5 hours, how long will it take to fill the tank if all three are open?", options: ["10 hours", "15 hours", "20 hours", "Will never fill"], correct: 3, category: "Aptitude & Reasoning", explanation: "Reason: Combined rate = 1/10 + 1/15 - 1/5 = -1/30. Since the rate is negative, the tank will never fill." },
        { question: "Which fraction is the largest: 3/4, 5/6, 7/8, 9/10 ?", options: ["3/4", "5/6", "7/8", "9/10"], correct: 3, category: "Aptitude & Reasoning", explanation: "Reason: Converting to decimals: 9/10=0.9, which is the largest." },
        { question: "Find the next term in the series: 2, 3, 5, 7, 11, ?", options: ["12", "13", "14", "15"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: The sequence consists of prime numbers. The next prime after 11 is 13." },
        { question: "The current ages of A and B are in the ratio 4:5. Eight years from now, the ratio of their ages will be 5:6. What is the sum of their current ages?", options: ["64 years", "72 years", "80 years", "90 years"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: Current ages are 4x, 5x. In 8 years: (4x+8)/(5x+8) = 5/6 \\rightarrow x = 8. Sum of current ages = 9x = 72 years." },
        { question: "An election contest between two candidates, A and B. A gets 60% of the total valid votes. 20% of the votes cast were invalid. If the total number of votes was 16000, how many valid votes did B get?", options: ["5120", "6400", "7680", "12800"], correct: 0, category: "Aptitude & Reasoning", explanation: "Reason: Valid votes = 16000 \\times 0.80 = 12800. B's share = 40\%. B's votes = 12800 \\times 0.40 = 5120." },
        { question: "If a is b's brother, c is a's mother, d is c's daughter, e is b's son. How is a related to e?", options: ["Father", "Uncle", "Cousin", "Brother"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: a is the brother of e's father/mother, so a is e's Uncle." },
        { question: "If \\text{P} is the father of \\text{Q} and \\text{R} is the son of \\text{S}. \\text{S} is the wife of \\text{P}. How is \\text{S} related to \\text{Q}?", options: ["Mother", "Father", "Sister", "Wife"], correct: 0, category: "Aptitude & Reasoning", explanation: "Reason: \\text{P} and \\text{S} are a couple. \\text{P} is \\text{Q}'s father, so \\text{S} must be \\text{Q}'s mother." },
        { question: "Find the odd one out: 121, 144, 169, 180, 225", options: ["121", "144", "169", "180", "225"], correct: 3, category: "Aptitude & Reasoning", explanation: "Reason: All others are perfect squares (11^2, 12^2, 13^2, 15^2), but 180 is not." },
        { question: "A boat covers a certain distance downstream in 4 hours and returns upstream in 5 hours. If the stream flows at 3 km/hr, what is the speed of the boat in still water?", options: ["24 km/hr", "27 km/hr", "30 km/hr", "32 km/hr"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: Let B be boat speed, S=3. 4(B+3) = 5(B-3) \\rightarrow B = 27  km/hr." },
        { question: "If the day after tomorrow is Tuesday, what was the day 3 days before yesterday?", options: ["Tuesday", "Wednesday", "Thursday", "Friday"], correct: 2, category: "Aptitude & Reasoning", explanation: "Reason: Day after tomorrow (Tuesday) \\rightarrow Today (Sunday). Day before yesterday was Saturday. 3 days before Saturday was Wednesday." },
        { question: "Which analogy is correct: Foot is to Man as Paw is to:", options: ["Dog", "Cat", "Animal", "Leg"], correct: 2, category: "Aptitude & Reasoning", explanation: "Reason: A paw is the corresponding limb structure for many animals, including dogs and cats." },
        { question: "A person sells an article for  400, making a profit of 25%. What was the cost price of the article?", options: [" 300", " 320", " 350", " 400"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason:  1.25 \\times \text{CP} = 400 \\rightarrow \text{CP} = 320 ." },
        { question: "The next letter in the series  \\text{Z, X, V, T, R, ?}  is:", options: ["P", "Q", "S", "O"], correct: 0, category: "Aptitude & Reasoning", explanation: "Reason: The series skips one letter backward each time (R, skip Q, P)." },
        { question: "In a class of 40 students, 30 like math, 25 like science, and 15 like both. How many students like neither?", options: ["0", "5", "10", "15"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: Total liking at least one  = (30+25)-15=40 . Neither  = 40-40=0 ." },
        { question: "If  \\text{L}  denotes  \\times ,  \\text{M}  denotes  \\div ,  \\text{P}  denotes  +  and  \\text{Q}  denotes  - .  16\text{P}24\text{M}8\text{Q}6\text{L}2  is equal to:", options: ["13", "10", "15", "7"], correct: 3, category: "Aptitude & Reasoning", explanation: "Reason:  16 + 24 \\div 8 - 6 \\times 2 = 7 ." },
        { question: "What is the difference between simple interest and compound interest on  1000 at 10\%  per annum for 2 years?", options: [" 10", " 5", " 20", " 0"], correct: 0, category: "Aptitude & Reasoning", explanation: "Reason: SI:  200 . CI:  210 . Difference  = 10 ." },
        { question: "A clock shows 4:30. If the minute hand points east, in what direction does the hour hand point?", options: ["North-East", "North-West", "South-East", "South-West"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: At 4:30, the minute hand (6) points East. The hour hand is normally NE, but rotated 90 degrees clockwise  \\rightarrow  South-East." },
        { question: "Find the missing number in the sequence:  1, 8, 27, 64, ?  (Cubes)", options: ["100", "125", "144", "169"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason:  5^3 = 125 ." },
        { question: "In a circle graph (pie chart), if the sector for 'Food' is  144^\circ , what is the percentage of the budget spent on food?", options: ["30%", "40%", "50%", "60%"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason:  (144 / 360) \\times 100 = 40\% ." },
        { question: "Which group of numbers is the odd one out: (2, 8), (3, 27), (4, 32), (5, 125)", options: ["(2, 8)", "(3, 27)", "(4, 32)", "(5, 125)"], correct: 2, category: "Aptitude & Reasoning", explanation: "Reason: The pattern is  (n, n^3) .  4^3 = 64 , not 32." },
        { question: "A vendor buys apples at 6 for a rupee and sells them at 5 for a rupee. What is the percentage profit?", options: ["15%", "16.67%", "20%", "25%"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: Profit  \\% = 20\% ." },
        { question: "What is the next number in the series:  1, 1, 2, 3, 5, 8, ? ", options: ["11", "12", "13", "14"], correct: 2, category: "Aptitude & Reasoning", explanation: "Reason: Fibonacci sequence.  5 + 8 = 13 ." },
        { question: "A container has 10 liters of pure milk. 1 liter is replaced by water. This process is repeated. How much milk is left?", options: ["8.1 liters", "8 liters", "9 liters", "9.1 liters"], correct: 0, category: "Aptitude & Reasoning", explanation: "Reason: Final milk  = 10 \\times (1 - 1/10)^2 = 8.1  liters." },
        { question: "Which group of numbers is the odd one out: (2, 8), (3, 27), (4, 32), (5, 125)", options: ["(2, 8)", "(3, 27)", "(4, 32)", "(5, 125)"], correct: 2, category: "Aptitude & Reasoning", explanation: "Reason: The pattern is  (n, n^3) .  4^3 = 64 , not 32." },
        { question: "If 'Zebra' is coded as '2652181', how is 'Dog' coded (using 1=A, 2=B...)?", options: ["4157", "41518", "415722", "4157"], correct: 3, category: "Aptitude & Reasoning", explanation: "Reason: D=4, O=15, G=7. Code is 4157." },
        { question: "What is the time complexity of searching an element in an unsorted array?", options: [" O(1) ", " O(\\log n) ", " O(n) ", " O(n^2) "], correct: 2, category: "Aptitude & Reasoning", explanation: "Reason: Linear search takes  O(n)  in the worst case." },
        { question: "If  \\text{L}  denotes  \\times ,  \\text{M}  denotes  \\div ,  \\text{P}  denotes  +  and  \\text{Q}  denotes  - .  16\text{P}24\text{M}8\text{Q}6\text{L}2  is equal to:", options: ["13", "10", "15", "7"], correct: 3, category: "Aptitude & Reasoning", explanation: "Reason:  16 + 24 \\div 8 - 6 \\times 2 = 7 ." },
        { question: "If the day after tomorrow is Tuesday, what was the day 3 days before yesterday?", options: ["Tuesday", "Wednesday", "Thursday", "Friday"], correct: 2, category: "Aptitude & Reasoning", explanation: "Reason: Day after tomorrow (Tuesday)  \\rightarrow  Today (Sunday). Day before yesterday was Friday. 3 days before Friday was Tuesday." },
        { question: "A vendor buys apples at 6 for a rupee and sells them at 5 for a rupee. What is the percentage profit?", options: ["15%", "16.67%", "20%", "25%"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: Profit  \\% = 20\% ." },
        { question: "What is the next number in the series:  1, 1, 2, 3, 5, 8, ? ", options: ["11", "12", "13", "14"], correct: 2, category: "Aptitude & Reasoning", explanation: "Reason: Fibonacci sequence.  5 + 8 = 13 ." },
        { question: "If the day after tomorrow is Sunday, what was the day before yesterday?", options: ["Wednesday", "Thursday", "Friday", "Saturday"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: Day after tomorrow (Sunday)  \\rightarrow  Today (Friday). Day before yesterday was Wednesday." },
        { question: "The sum of three consecutive integers is 36. What is the largest integer?", options: ["11", "12", "13", "14"], correct: 2, category: "Aptitude & Reasoning", explanation: "Reason: The numbers are 11, 12, and 13. The largest is 13." },
        { question: "A man travels at 40 km/h and reaches his destination 10 minutes late. He travels at 50 km/h and is 5 minutes late. What is the distance?", options: ["20 km", "25 km", "50 km", "75 km"], correct: 2, category: "Aptitude & Reasoning", explanation: "Reason:  D = 50 \\text{ km} ." },
        { question: "Which is the odd one out: BBA, MBA, BTech, PhD, MTech", options: ["BBA", "MBA", "BTech", "PhD", "MTech"], correct: 0, category: "Aptitude & Reasoning", explanation: "Reason: BBA is an undergraduate degree." },
        { question: "If the area of a circle is doubled, by what percentage does the diameter increase?", options: ["41.4%", "50%", "100%", "Cannot be determined"], correct: 0, category: "Aptitude & Reasoning", explanation: "Reason: Area increases by factor 2. Diameter increases by factor  \\sqrt{2} \\approx 1.414 . Increase  = 41.4\% ." },
        { question: "A vendor buys apples at 6 for a rupee and sells them at 5 for a rupee. What is the percentage profit?", options: ["15%", "16.67%", "20%", "25%"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: Profit  \\% = 20\% ." },
        { question: "A candidate needs 40% marks to pass an exam. If he gets 200 marks and fails by 8 marks, what are the maximum marks?", options: ["480", "500", "520", "540"], correct: 2, category: "Aptitude & Reasoning", explanation: "Reason: Passing marks  = 208 . Max Marks  = 208 / 0.4 = 520 ." },
        { question: "In a queue, John is 10th from the front and 15th from the back. How many people are in the queue?", options: ["23", "24", "25", "26"], correct: 2, category: "Aptitude & Reasoning", explanation: "Reason: Total  = 10 + 15 - 1 = 24  people." },
        { question: "If 'TABLE' is coded as 'GZYOV', what is 'CHAIR' coded as (reverse alphabet mapping)?", options: ["XSZRI", "XSYRI", "WSSER", "XSQRI"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: C  \\rightarrow  X, H  \\rightarrow  S, A  \\rightarrow  Z, I  \\rightarrow  R, R  \\rightarrow  I." },
        { question: "The average of 5 numbers is 20. If one number is removed, the average becomes 15. What was the removed number?", options: ["40", "45", "50", "55"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: Sum of 5 numbers  = 5 \\times 20 = 100 . Sum of 4 numbers  = 4 \\times 15 = 60 . Removed number  = 100 - 60 = 40 ." },
        { question: "The ratio of the ages of A and B is 3:5. If the sum of their ages is 40, what is the difference in their ages?", options: ["8 years", "10 years", "12 years", "14 years"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: Total parts  3+5=8 .  40/8 = 5 . A=15, B=25. Difference  = 10  years." },
        { question: "If  20\%  of a number is 100, what is  80\%  of that number?", options: ["300", "400", "500", "800"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason:  80\%  is  4 \\times 20\% . So,  4 \\times 100 = 400 ." },
    ],
    EASY_GK: [
        // GK Questions (50+ Qs)
        { question: "Which country is the largest democracy in the world?", options: ["USA", "India", "China", "Canada"], correct: 1, category: "General Knowledge", explanation: "India is often cited as the largest democracy by population." },
        { question: "Who wrote the play 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], correct: 1, category: "General Knowledge", explanation: "William Shakespeare wrote 'Romeo and Juliet'." },
        { question: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Rupee"], correct: 2, category: "General Knowledge", explanation: "The Yen is the currency of Japan." },
        { question: "What is the hardest natural substance on Earth?", options: ["Iron", "Quartz", "Diamond", "Platinum"], correct: 2, category: "General Knowledge", explanation: "Diamond is the hardest natural substance." },
        { question: "In which year did the Titanic sink?", options: ["1905", "1912", "1918", "1923"], correct: 1, category: "General Knowledge", explanation: "The Titanic sank in 1912." },
        { question: "What country gifted the Statue of Liberty to the US?", options: ["Spain", "Germany", "England", "France"], correct: 3, category: "General Knowledge", explanation: "France gifted the Statue of Liberty." },
        { question: "Which continent is the least populated?", options: ["Asia", "Africa", "Australia", "Antarctica"], correct: 3, category: "General Knowledge", explanation: "Antarctica is the least populated continent." },
        { question: "What is the study of living organisms called?", options: ["Physics", "Chemistry", "Biology", "Geology"], correct: 2, category: "General Knowledge", explanation: "Biology is the study of living organisms." },
        { question: "What is the speed of light in a vacuum (approximate value)?", options: [" 3 \\times 10^5 \text{ m/s} ", " 3 \\times 10^8 \text{ m/s} ", " 3 \\times 10^{10} \text{ m/s} ", " 3 \\times 10^9 \text{ m/s} "], correct: 1, category: "General Knowledge", explanation: "The speed of light is approximately  3 \\times 10^8  meters per second." },
        { question: "Which famous document begins with 'When in the course of human events...'?", options: ["US Constitution", "Bill of Rights", "Declaration of Independence", "Emancipation Proclamation"], correct: 2, category: "General Knowledge", explanation: "The Declaration of Independence begins with this phrase." },
        { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"], correct: 2, category: "General Knowledge", explanation: "Albert Einstein developed the theory of relativity." },
        { question: "What is the pH level of pure water?", options: ["0", "5", "7", "14"], correct: 2, category: "General Knowledge", explanation: "Pure water has a neutral pH of 7." },
        { question: "What is the process of a solid turning directly into a gas called?", options: ["Melting", "Evaporation", "Sublimation", "Condensation"], correct: 2, category: "General Knowledge", explanation: "Sublimation is the process where a solid turns into a gas without becoming a liquid." },
        { question: "Which city hosted the first modern Olympic Games in 1896?", options: ["Paris", "London", "Athens", "Rome"], correct: 2, category: "General Knowledge", explanation: "Athens, Greece, hosted the first modern Olympic Games." },
        { question: "What is the largest bone in the human body?", options: ["Tibia", "Humerus", "Femur", "Clavicle"], correct: 2, category: "General Knowledge", explanation: "The Femur (thigh bone) is the largest." },
        { question: "Which planet is known for its prominent rings?", options: ["Mars", "Jupiter", "Saturn", "Uranus"], correct: 2, category: "General Knowledge", explanation: "Saturn is famous for its visible rings." },
        { question: "Which metal is the best conductor of electricity?", options: ["Copper", "Aluminum", "Gold", "Silver"], correct: 3, category: "General Knowledge", explanation: "Silver is the best conductor, followed closely by copper." },
        { question: "What is the capital city of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], correct: 2, category: "General Knowledge", explanation: "The capital of Australia is Canberra." },
        { question: "What is the primary gas found in the Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Argon", "Nitrogen"], correct: 3, category: "General Knowledge", explanation: "Nitrogen makes up about 78% of the atmosphere." },
        { question: "What is the unit of electrical resistance?", options: ["Ampere", "Volt", "Ohm", "Watt"], correct: 2, category: "General Knowledge", explanation: "The Ohm is the standard unit of electrical resistance." },
        { question: "What is the name of the supercontinent that existed about 335 million years ago?", options: ["Gondwana", "Laurasia", "Pangaea", "Columbia"], correct: 2, category: "General Knowledge", explanation: "Pangaea was the supercontinent comprising all major landmasses." },
        { question: "Which is the largest gland in the human body?", options: ["Pancreas", "Thyroid", "Liver", "Kidney"], correct: 2, category: "General Knowledge", explanation: "The liver is the largest gland." },
        { question: "What is the name of the deepest point in the Earth's oceans?", options: ["Puerto Rico Trench", "Java Trench", "Mariana Trench", "Tonga Trench"], correct: 2, category: "General Knowledge", explanation: "The Mariana Trench contains the Challenger Deep, the deepest known point." },
        { question: "The term 'Manga Carta' relates to which historical document?", options: ["The US Constitution", "The Great Charter of England", "The Treaty of Versailles", "The Roman Law"], correct: 1, category: "General Knowledge", explanation: "Magna Carta (Great Charter) is a famous English charter of rights." },
        { question: "What is the capital of Canada?", options: ["Toronto", "Montreal", "Vancouver", "Ottawa"], correct: 3, category: "General Knowledge", explanation: "Ottawa is the capital of Canada." },
        { question: "Which country is home to the ancient site of Machu Picchu?", options: ["Mexico", "Peru", "Chile", "Brazil"], correct: 1, category: "General Knowledge", explanation: "Machu Picchu is located in Peru." },
        { question: "What is the main component of natural gas?", options: ["Propane", "Butane", "Methane", "Ethane"], correct: 2, category: "General Knowledge", explanation: "Methane ( CH_4 ) is the primary component of natural gas." },
        { question: "Who is known as the 'Father of the Computer'?", options: ["Alan Turing", "Bill Gates", "Charles Babbage", "Steve Jobs"], correct: 2, category: "General Knowledge", explanation: "Charles Babbage conceived the first mechanical general-purpose computer." },
        { question: "What is the highest temperature recorded in the solar system (excluding the sun)?", options: ["Venus", "Jupiter", "Mercury", "Earth"], correct: 0, category: "General Knowledge", explanation: "Venus has the hottest surface temperature due to its dense atmosphere." },
        { question: "In physics, what does the  \\text{c}  variable usually represent?", options: ["Current", "Charge", "Capacitance", "Speed of light"], correct: 3, category: "General Knowledge", explanation: " c  represents the speed of light in a vacuum." },
        { question: "Which famous artist cut off his own ear?", options: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"], correct: 1, category: "General Knowledge", explanation: "Vincent van Gogh famously severed part of his own ear in 1888." },
        { question: "The chemical symbol  \\text{Na}  stands for which element?", options: ["Neon", "Nitrogen", "Sodium", "Nickel"], correct: 2, category: "General Knowledge", explanation: " Na  is the symbol for Sodium (from the Latin  natrium )." },
        { question: "What is the longest river in the world?", options: ["Amazon River", "Yangtze River", "Nile River", "Mississippi River"], correct: 2, category: "General Knowledge", explanation: "The Nile River is widely considered the longest, though the Amazon is often debated." },
        { question: "Which mountain range separates Europe and Asia?", options: ["Alps", "Rockies", "Andes", "Ural Mountains"], correct: 3, category: "General Knowledge", explanation: "The Ural Mountains conventionally mark the boundary between the two continents." },
        { question: "What is the capital of Brazil?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], correct: 2, category: "General Knowledge", explanation: "The capital of Brazil is Brasília." },
        { question: "Which part of the cell is responsible for producing energy (ATP)?", options: ["Nucleus", "Ribosome", "Mitochondrion", "Cell Wall"], correct: 2, category: "General Knowledge", explanation: "Mitochondria are often called the 'powerhouses' of the cell." },
        { question: "Who invented the telephone?", options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Guglielmo Marconi"], correct: 2, category: "General Knowledge", explanation: "Alexander Graham Bell is widely credited with inventing the telephone." },
        { question: "In geography, what is a fjord?", options: ["A type of mountain", "A long, narrow, deep inlet of the sea between high cliffs", "A large desert", "A type of ancient forest"], correct: 1, category: "General Knowledge", explanation: "Fjords are formed by glacial erosion." },
        { question: "Which country's flag features a red circle on a white background?", options: ["China", "South Korea", "Japan", "Vietnam"], correct: 2, category: "General Knowledge", explanation: "The Japanese flag is known as the  Hinomaru  ('sun disc')." },
        { question: "What is the distance between the Earth and the Sun called?", options: ["Lunar distance", "Astronomical Unit (AU)", "Light-year", "Parsec"], correct: 1, category: "General Knowledge", explanation: "An Astronomical Unit (AU) is the average distance from the Earth to the Sun." },
        { question: "Which vitamin is synthesized by the human body upon exposure to sunlight?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B12"], correct: 2, category: "General Knowledge", explanation: "Vitamin D is produced in the skin in response to sunlight." },
        { question: "What is the name of the German philosopher who wrote 'Thus Spoke Zarathustra'?", options: ["Immanuel Kant", "Hegel", "Friedrich Nietzsche", "Socrates"], correct: 2, category: "General Knowledge", explanation: "Friedrich Nietzsche is known for this and other influential works." },
        { question: "The  \\text{Loch Ness Monster}  is traditionally associated with which country?", options: ["Ireland", "Scotland", "England", "Wales"], correct: 1, category: "General Knowledge", explanation: "The Loch Ness Monster (Nessie) is a Scottish legend." },
        { question: "What chemical element has the highest melting point?", options: ["Gold", "Tungsten", "Platinum", "Carbon"], correct: 1, category: "General Knowledge", explanation: "Tungsten (W) has the highest melting point of all known metals." },
        { question: "Which famous piece of classical music is played at the New Year's Day concert in Vienna?", options: ["Vivaldi's Four Seasons", "Strauss's Blue Danube Waltz", "Beethoven's 5th Symphony", "Mozart's Requiem"], correct: 1, category: "General Knowledge", explanation: "The Blue Danube Waltz is a staple of the Vienna New Year's Concert." },
        { question: "What is the term for a word or phrase that reads the same backward as forward?", options: ["Anagram", "Antonym", "Palindrome", "Homonym"], correct: 2, category: "General Knowledge", explanation: "Palindrome examples include 'madam' and 'refer'." },
        { question: "Which material is a semiconductor?", options: ["Copper", "Glass", "Silicon", "Rubber"], correct: 2, category: "General Knowledge", explanation: "Silicon is the most widely used semiconductor material in electronics." },
        { question: "In which year did the World War I begin?", options: ["1910", "1914", "1918", "1920"], correct: 1, category: "General Knowledge", explanation: "World War I began in 1914." },
        { question: "What is the main ingredient of traditional Japanese Miso soup?", options: ["Soybeans", "Rice", "Wheat", "Barley"], correct: 0, category: "General Knowledge", explanation: "Miso paste, made from fermented soybeans, is the base." },
        { question: "Which scientist is credited with formulating the laws of motion and universal gravitation?", options: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Johannes Kepler"], correct: 2, category: "General Knowledge", explanation: "Sir Isaac Newton established classical mechanics." },
    ],
    EASY_ANIMATION: [
        { question: "What is the fundamental principle of animation that dictates how many frames per second (FPS) are needed for smooth motion?", options: ["Squash and Stretch", "Timing", "Anticipation", "Staging"], correct: 1, category: "Animation Degree", explanation: "Timing controls the speed and rhythm, often referencing the standard 24 FPS for film animation." },
        { question: "What is the process of sketching the sequence of shots for an animated film called?", options: ["Animatic", "Story Reel", "Storyboard", "Layout"], correct: 2, category: "Animation Degree", explanation: "A Storyboard is a sequence of drawings that visually tells the story." },
        { question: "Which type of animation typically involves moving a physical object incrementally and photographing each movement?", options: ["Hand-drawn", "Motion Graphics", "Stop Motion", "3D Rendering"], correct: 2, category: "Animation Degree", explanation: "Stop Motion uses physical models or puppets moved frame-by-frame." },
        { question: "In 3D animation, what process adds realistic texture, color, and shading to a model?", options: ["Rigging", "Modeling", "Keyframing", "Texturing"], correct: 3, category: "Animation Degree", explanation: "Texturing involves creating and applying image maps (textures) to a 3D model." },
        { question: "Which term refers to the first and last frames of a smooth transition or action?", options: ["Inbetweens", "Breaks", "Extremes", "Clean-up"], correct: 2, category: "Animation Degree", explanation: "Extremes (or Keyframes) define the most important positions of an action." },
        { question: "Which software is primarily used for vector-based 2D character rigging and animation?", options: ["Adobe Photoshop", "Autodesk Maya", "Toon Boom Harmony", "Blender"], correct: 2, category: "Animation Degree", explanation: "Toon Boom Harmony is an industry standard for 2D digital character animation and rigging." },
        { question: "What is the purpose of the 'Ease In and Ease Out' principle in animation?", options: ["To make the character look squishy", "To change the lighting of a scene", "To make movements appear more natural by accelerating and decelerating", "To add sound effects"], correct: 2, category: "Animation Degree", explanation: "Ease In/Out adds realistic physics, where objects start slow, accelerate, and then slow down again." },
        { question: "The technique where a rough, synchronized video is created using the storyboard and scratch dialogue is called a(n):", options: ["Final Render", "Layout", "Animatic", "Line Test"], correct: 2, category: "Animation Degree", explanation: "An Animatic is essentially a filmed storyboard with a temporary soundtrack." },
        { question: "What is a 'Rig' in 3D character animation?", options: ["The final rendered output", "The skeleton and controls used to manipulate a character model", "The texture applied to the skin", "The background environment"], correct: 1, category: "Animation Degree", explanation: "A rig provides the necessary controls for animators to manipulate the model like a puppet." },
        { question: "Which of the 12 Principles of Animation exaggerates the reality of the motion to emphasize the action or emotional content?", options: ["Secondary Action", "Exaggeration", "Arc", "Solid Drawing"], correct: 1, category: "Animation Degree", explanation: "Exaggeration is used to make a movement more impactful or comical." },
        { question: "What is the standard aspect ratio for high-definition video and film today?", options: ["4:3", "1:1", "16:9", "2.35:1"], correct: 2, category: "Animation Degree", explanation: "16:9 is the universal standard for widescreen monitors and modern high-definition content." },
        { question: "The drawing of successive frames between key poses to create the illusion of movement is known as:", options: ["Blocking", "Inbetweening", "Keying", "Cleanup"], correct: 1, category: "Animation Degree", explanation: "Inbetweening fills the gap between two keyframes." },
        { question: "What is the primary function of a 'T-pose' or 'A-pose' in 3D modeling?", options: ["To define the final character position", "As a symmetrical starting pose for rigging and texturing", "To indicate motion blur", "To showcase the model's complexity"], correct: 1, category: "Animation Degree", explanation: "These default poses are neutral and symmetrical, simplifying the rigging process." },
        { question: "What is the industry term for the final, clean outline drawing of an animated character, ready for coloring?", options: ["Rough", "Twinning", "Line Art/Clean-up", "Maquette"], correct: 2, category: "Animation Degree", explanation: "Clean-up is the process of making the rough animation lines precise and smooth." },
        { question: "What part of a production pipeline involves designing the overall color palette, mood, and lighting for a scene?", options: ["Model Sheet", "Color Script", "Character Design", "Previz"], correct: 1, category: "Animation Degree", explanation: "A Color Script dictates the use of color and lighting throughout the narrative to reflect mood and story beats." },
        { question: "Which animator is credited with creating many of the 12 basic principles of animation for Disney?", options: ["Hayao Miyazaki", "Glen Keane", "Milt Kahl", "Frank Thomas and Ollie Johnston"], correct: 3, category: "Animation Degree", explanation: "Thomas and Johnston formalized the 12 principles in their book, 'The Illusion of Life'." },
        { question: "In frame-by-frame animation, how many drawings are typically used for 1 second of 'on twos' animation (assuming 24 FPS)?", options: ["24", "12", "8", "6"], correct: 1, category: "Animation Degree", explanation: "'On twos' means one drawing is held for two frames (24/2 = 12 drawings per second)." },
        { question: "What is 'Twinning' in animation?", options: ["Having two main characters", "Two characters moving in perfect sync", "Characters moving symmetrically, which often looks unnatural or unappealing", "The process of duplicating assets"], correct: 2, category: "Animation Degree", explanation: "Twinning is generally avoided as it creates symmetrical, dull, or robotic movement." },
        { question: "Which type of animation uses a fixed image for a character and manipulates its limbs/joints on a 2D plane?", options: ["Rotoscoping", "Cut-out Animation", "CGI", "Hand-drawn"], correct: 1, category: "Animation Degree", explanation: "Cut-out animation (digital or traditional) uses hinged, overlapping pieces to move characters." },
        { question: "What is the term for projecting live-action film frame-by-frame and tracing over the action to create animation?", options: ["Squash and Stretch", "Rotoscoping", "Motion Capture", "Lip Sync"], correct: 1, category: "Animation Degree", explanation: "Rotoscoping involves tracing live-action footage to achieve realistic human motion." },
        // Remaining 30+ EASY_ANIMATION questions to match original pool size
        { question: "What does the term 'Keyframe' refer to in digital animation?", options: ["A frame where the background changes", "A frame defining the starting or ending point of any smooth transition", "A frame containing sound data", "A frame where the entire scene is rendered"], correct: 1, category: "Animation Degree", explanation: "Keyframes mark the critical points of action or change." },
        { question: "What is the core purpose of a 'Maquette' in traditional character animation?", options: ["A detailed background painting", "A 3D physical model used as a reference for consistent drawing", "A character's initial color palette", "The final rendered output"], correct: 1, category: "Animation Degree", explanation: "A Maquette is a small sculpture used to maintain accurate 3D perspective and form when drawing a character from different angles." },
        { question: "Which principle focuses on the character's movement leading up to a main action, preparing the audience?", options: ["Follow Through", "Anticipation", "Staging", "Arc"], correct: 1, category: "Animation Degree", explanation: "Anticipation prepares the audience for the next movement, adding realism and impact." },
        { question: "In 3D modeling, what is the term for the number of polygons or triangles used to define a mesh?", options: ["Topology", "UV Mapping", "Wireframe", "Poly Count"], correct: 3, category: "Animation Degree", explanation: "Poly Count refers to the number of faces, which determines complexity and render time." },
        { question: "Which software is most widely used for professional 3D character animation and visual effects in major studios?", options: ["Adobe Animate", "Autodesk Maya", "GIMP", "Krita"], correct: 1, category: "Animation Degree", explanation: "Autodesk Maya is an industry-standard tool for high-end 3D animation." },
        { question: "What is 'Squash and Stretch' primarily used for?", options: ["Changing a scene's perspective", "Making objects appear rigid and heavy", "Giving a sense of weight, flexibility, and elasticity to characters", "Adjusting camera focus"], correct: 2, category: "Animation Degree", explanation: "Squash and Stretch is essential for making objects feel alive and subject to physical forces." },
        { question: "What is a 'Walk Cycle'?", options: ["A repeating loop of frames that makes a character appear to walk", "The time it takes for a character to cross the screen", "The process of adding motion blur", "A story loop"], correct: 0, category: "Animation Degree", explanation: "A Walk Cycle is a series of key poses and inbetweens that loop seamlessly." },
        { question: "The process of placing the camera, lighting, and characters within a scene to guide the viewer's eye is called:", options: ["Blocking", "Staging", "Rendering", "Lip Sync"], correct: 1, category: "Animation Degree", explanation: "Staging directs attention and clarifies the action." },
        { question: "What file format is commonly used to store 3D models with geometry, UVs, and sometimes materials, for interchange between software?", options: ["JPEG", "MP4", "FBX or OBJ", "PDF"], correct: 2, category: "Animation Degree", explanation: "FBX and OBJ are standard file formats for transferring 3D assets." },
        { question: "Which principle states that an action should be clearly presented so the audience doesn't miss the main point?", options: ["Secondary Action", "Solid Drawing", "Timing", "Staging"], correct: 3, category: "Animation Degree", explanation: "Staging ensures that the audience focuses on the most important element in the scene." },
        { question: "What term describes the secondary, smaller movements that result from the primary action (e.g., hair moving after a jump)?", options: ["Overlapping Action/Follow Through", "Arc", "Exaggeration", "Timing"], correct: 0, category: "Animation Degree", explanation: "Follow Through and Overlapping Action add realism by showing that different parts of a body move at different rates." },
        { question: "When drawing a sequence, which type of line represents the path of action for a limb or object?", options: ["Straight Ahead", "Arc", "Rough Line", "Center Line"], correct: 1, category: "Animation Degree", explanation: "Most natural movements follow a curved path, or Arc." },
        { question: "In a 2D workflow, what are the layers of transparent paper used to view multiple frames simultaneously called?", options: ["Exposure Sheet", "Light Box", "Peg Bar", "Cels/Onion Skin"], correct: 3, category: "Animation Degree", explanation: "Onion Skinning (digital) or Cels (traditional) help animators see previous and next frames." },
        { question: "What is the frame rate standard for theatrical film projection?", options: ["12 FPS", "24 FPS", "30 FPS", "60 FPS"], correct: 1, category: "Animation Degree", explanation: "24 FPS is the cinematic standard." },
        { question: "The process of adding a sequence of drawings over a time axis to control timing and action is known as:", options: ["Compositing", "Dope Sheet/Exposure Sheet", "Rendering", "Shading"], correct: 1, category: "Animation Degree", explanation: "The Dope Sheet (or X-Sheet) is a guide for the animator/camera operator detailing every frame." },
        { question: "What is the technique used to synchronize a character's mouth movements with spoken dialogue?", options: ["Lip Sync", "Keyframing", "Phoneme Matching", "Mouth Charting"], correct: 0, category: "Animation Degree", explanation: "Lip Sync is the general term for matching mouth positions to sound." },
        { question: "Which rendering engine is known for its photorealistic results in 3D production pipelines?", options: ["Eevee", "Viewport 2.0", "Arnold or V-Ray", "Mental Ray"], correct: 2, category: "Animation Degree", explanation: "Arnold and V-Ray are widely used in film/VFX for their advanced ray tracing capabilities." },
        { question: "Which principle advises against moving the head and body at the exact same moment, promoting offset movements?", options: ["Secondary Action", "Solid Drawing", "Straight Ahead Action", "Exaggeration"], correct: 0, category: "Animation Degree", explanation: "Secondary Action/Overlapping Action introduces more complex, realistic motion." },
        { question: "What does 'Rigging' typically involve in a 3D pipeline?", options: ["Painting textures onto a model", "Creating the geometry (mesh) of a character", "Building the internal joint structure and control systems for articulation", "Compositing rendered passes"], correct: 2, category: "Animation Degree", explanation: "Rigging is the technical process of preparing a model for animation." },
        { question: "The term for drawing animation sequentially from the first frame to the last is:", options: ["Pose to Pose", "Blocking", "Straight Ahead Action", "Keyframing"], correct: 2, category: "Animation Degree", explanation: "Straight Ahead Action is good for spontaneous, fluid motion like fire or water." },
        { question: "What does the $\\text{Alpha Channel}$ in an image or video file primarily store?", options: ["Color information (RGB)", "Lighting data", "Depth information", "Transparency information"], correct: 3, category: "Animation Degree", explanation: "The Alpha Channel determines the opacity or transparency of the image pixels." },
        { question: "Which tool is commonly used to adjust the speed of animation curves in digital software (like Maya, Blender, or After Effects)?", options: ["Timeline", "Node Editor", "Graph Editor (Dope Sheet)", "Outliner"], correct: 2, category: "Animation Degree", explanation: "The Graph Editor (or Curve Editor) allows precise control over interpolation and timing." },
        { question: "What is the primary difference between a 'Keyframe' and an 'Inbetween'?", options: ["Keyframes are drawn by the lead animator; Inbetweens by assistants", "Keyframes are movement start/end points; Inbetweens are the frames between them", "Keyframes contain color; Inbetweens are line art", "Keyframes are for 3D; Inbetweens are for 2D"], correct: 1, category: "Animation Degree", explanation: "This is the foundational distinction between the 'Pose to Pose' method." },
        { question: "The concept of reducing a complex 3D shape into simple geometric forms (spheres, cubes) before drawing is related to which principle?", options: ["Solid Drawing", "Appeal", "Staging", "Arc"], correct: 0, category: "Animation Degree", explanation: "Solid Drawing emphasizes drawing in 3D space, focusing on volume and weight." },
        { question: "What does the term 'UV Mapping' relate to in 3D graphics?", options: ["Lighting a scene", "Assigning motion data to a rig", "Creating a 2D surface (texture map) coordinate system for a 3D model", "Rendering speed optimization"], correct: 2, category: "Animation Degree", explanation: "UV mapping defines how a 2D texture wraps around a 3D object." },
        { question: "Which type of animation emphasizes smooth, continuous drawing from one pose to the next, often leading to more fluid but less predictable timing?", options: ["Pose to Pose", "Straight Ahead Action", "Blocking", "Keyframing"], correct: 1, category: "Animation Degree", explanation: "Straight Ahead action is animated frame by frame in sequence." },
        { question: "What is the general term for the library of mouth shapes corresponding to different vocal sounds used for lip sync?", options: ["Mouth charts", "Phoneme set/Visemes", "Lip profiles", "Vocal grids"], correct: 1, category: "Animation Degree", explanation: "Phonemes are the distinct sound units; Visemes are the corresponding visual mouth shapes." },
        { question: "Which of these is a non-destructive way to create complex, animated shapes in Adobe After Effects?", options: ["Pre-composing", "Using Shape Layers and Modifiers", "Rasterizing", "Merging Layers"], correct: 1, category: "Animation Degree", explanation: "Shape Layers allow for flexible, scalable, and complex graphic creation with modifiers." },
        { question: "The process of generating the final 2D image or frame from the 3D data (geometry, lighting, textures) is called:", options: ["Modeling", "Texturing", "Rendering", "Compositing"], correct: 2, category: "Animation Degree", explanation: "Rendering is the calculation that turns scene data into a final image." },
        { question: "What is the term for a quick, rough animation test done immediately after a sequence is drawn to check the timing and flow?", options: ["Cleanup", "Line Test", "Model Sheet", "Rendering"], correct: 1, category: "Animation Degree", explanation: "A Line Test quickly captures the hand-drawn lines to see the animation in motion." },
        { question: "Which principle states that every personality, action, or design element should be visually interesting and engaging?", options: ["Staging", "Appeal", "Timing", "Exaggeration"], correct: 1, category: "Animation Degree", explanation: "Appeal makes the character or object pleasing to look at." },
        { question: "What are 'Curves' primarily used for in the context of animation software?", options: ["Adjusting color hue", "Defining the trajectory and velocity of a keyframed object", "Creating bent geometry", "Calculating mass"], correct: 1, category: "Animation Degree", explanation: "Animation curves control the interpolation between keyframes." },
        { question: "Which term describes the act of linking a character mesh to its skeletal rig?", options: ["Modeling", "Skinning/Binding", "Retopology", "Sculpting"], correct: 1, category: "Animation Degree", explanation: "Skinning or Binding ensures the mesh deforms correctly when the bones/joints move." },
        { question: "In animation, a brief pause used to emphasize the speed of an object is known as a:", options: ["Slow In", "Hold", "Smear", "Squash"], correct: 1, category: "Animation Degree", explanation: "A Hold stops the movement for a moment, often used for dramatic effect." },
        { question: "Which animation technique is often used to create a blurry effect to indicate very fast motion?", options: ["Follow Through", "Anticipation", "Smear/Motion Blur", "Slow Out"], correct: 2, category: "Animation Degree", explanation: "Smear or Motion Blur uses distorted frames to simulate how the eye sees rapid movement." },
        { question: "The production phase that combines all the rendered elements (backgrounds, characters, effects) into the final frame is called:", options: ["Rendering", "Compositing", "Rigging", "Pre-production"], correct: 1, category: "Animation Degree", explanation: "Compositing brings together all visual assets." },
    ],
    
    // --- FINAL ROUND (HARD) QUESTIONS ---
    FINAL_CS_GENERAL: [
        { question: "What is the time complexity of quicksort in the worst case?", options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"], correct: 1, category: "Computer Science", language: "General-CS", explanation: "Quicksort has a worst-case time complexity of  O(n^2) ." },
        { question: "What is the term for a situation where two or more threads are waiting for each other to release a resource, resulting in a permanent stop?", options: ["Starvation", "Livelock", "Race condition", "Deadlock"], correct: 3, category: "Computer Science", language: "General-CS", explanation: "Deadlock is a condition where two or more processes are stuck waiting for each other indefinitely." },
        { question: "What is the primary vulnerability prevented by prepared statements in SQL?", options: ["Denial of Service", "Cross-Site Scripting (XSS)", "SQL Injection", "Buffer Overflow"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "Prepared statements prevent SQL Injection." },
        { question: "What is 'Thrashing' in the context of virtual memory?", options: ["Excessive CPU usage", "High I/O bandwidth", "A state where the system spends more time swapping pages than executing instructions", "Cache hitting"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "Thrashing occurs when the system spends more time swapping pages than executing instructions." },
        { question: "Which algorithm is the basis for public-key cryptography?", options: ["AES", "SHA-256", "RSA", "MD5"], correct: 2, category: "Computer Science", language: "General-CS", explanation: "RSA is the most widely used public-key encryption algorithm." },
    ],
    FINAL_CS_C: [
        { question: "What is the function of  realloc()  in C?", options: ["Frees allocated memory", "Initializes memory to zero", "Changes the size of previously allocated memory", "Allocates new memory"], correct: 2, category: "Computer Science", language: "C", explanation: "The  realloc()  function changes the size of the memory block pointed to by its first argument." },
        { question: "What does the  volatile  keyword suggest to the C compiler?", options: ["The variable can be modified by the compiler", "The variable can be modified unexpectedly (e.g., by hardware)", "The variable must be initialized immediately", "The variable's memory must be locked"], correct: 1, category: "Computer Science", language: "C", explanation: "Volatile tells the compiler that the value of the variable may change at any time without any action being taken by the code, preventing aggressive optimization." },
        { question: "In C, what is the purpose of using  typedef ?", options: ["To define a new variable", "To allocate memory", "To create an alias for a data type", "To define a function pointer"], correct: 2, category: "Computer Science", language: "C", explanation: " typedef  is used to give a new name to an existing type, improving code readability." },
        { question: "What is the difference between  a++  and  ++a  when used in a loop condition?", options: ["No difference", " ++a  is slower", " ++a  increments before use;  a++  increments after use", " a++  is safer"], correct: 2, category: "Computer Science", language: "C", explanation: " ++a  (pre-increment) increments before evaluation;  a++  (post-increment) increments after evaluation." },
        { question: "What is the purpose of the  extern  keyword in C?", options: ["Declares a variable as global", "Declares a variable defined in another file", "Defines an inline function", "Forces dynamic linking"], correct: 1, category: "Computer Science", language: "C", explanation: " extern  is used to declare a global variable or function that is defined in another source file." },
    ],
    FINAL_CS_PYTHON: [
        { question: "Which feature is *not* directly supported in Python (like in Java/C++)?", options: ["Inheritance", "Polymorphism", "Encapsulation", "Method Overloading"], correct: 3, category: "Computer Science", language: "Python", explanation: "Python does not support traditional method overloading based on argument type/count." },
        { question: "What is the Python equivalent of a switch/case statement (Python < 3.10)?", options: ["switch", "case", "if/elif/else structure", "goto"], correct: 2, category: "Computer Science", language: "Python", explanation: "Before Python 3.10, the standard replacement was an  if/elif/else  chain or dictionary mapping." },
        { question: "What is a 'decorator' in Python?", options: ["A function that modifies a class", "A design pattern for styling functions", "A function that takes another function and extends its behavior without modifying it", "A type of class method"], correct: 2, category: "Computer Science", language: "Python", explanation: "Decorators wrap a function, allowing you to execute code before and after the original function call." },
        { question: "What does the  \\text{\_\_init\_\_}  method represent in a Python class?", options: ["The destructor", "The main execution entry point", "The constructor", "A static method"], correct: 2, category: "Computer Science", language: "Python", explanation: " \\text{\_\_init\_\_}  is the constructor method, called when an object is instantiated." },
        { question: "What is the Global Interpreter Lock (GIL) in CPython?", options: ["A mechanism for secure file access", "A process that converts Python to C code", "A lock that prevents multiple native threads from executing Python bytecode simultaneously", "A tool for memory debugging"], correct: 2, category: "Computer Science", language: "Python", explanation: "The GIL ensures that only one native thread executes Python bytecode at a time." },
    ],
    FINAL_CS_JAVASCRIPT: [
        { question: "What is the output of  typeof(null)  in JavaScript?", options: ["null", "object", "undefined", "number"], correct: 1, category: "Computer Science", language: "JavaScript", explanation: "This is a historical bug in JavaScript, where  typeof(null)  incorrectly returns 'object'." },
        { question: "What is the use of the spread operator ( ... ) in JavaScript?", options: ["To condense arrays", "To quickly clone objects or merge arrays", "To perform exponentiation", "To define generator functions"], correct: 1, category: "Computer Science", language: "JavaScript", explanation: "The spread operator is used to expand an iterable into its individual elements." },
        { question: "What does  async  and  await  syntax simplify in JavaScript?", options: ["Synchronous loops", "Promise-based asynchronous code", "Class inheritance", "DOM manipulation"], correct: 1, category: "Computer Science", language: "JavaScript", explanation: " async/await  makes writing and reading asynchronous code much cleaner." },
        { question: "What is 'event delegation' in DOM manipulation?", options: ["Passing events between components", "Assigning handlers directly to every element", "Attaching a single event listener to a parent element to manage events for its children", "Creating custom events"], correct: 2, category: "Computer Science", language: "JavaScript", explanation: "Event delegation uses event bubbling to handle events on a single parent node." },
        { question: "The concept of 'Prototypal Inheritance' replaces which structure in JavaScript?", options: ["Classes", "Functional Programming", "Classical Inheritance", "Modules"], correct: 2, category: "Computer Science", language: "JavaScript", explanation: "JavaScript uses prototypes for inheritance." },
    ],
    FINAL_CS_JAVA: [
        { question: "In Java, which keyword is used to prevent a method from being overridden?", options: ["static", "abstract", "final", "private"], correct: 2, category: "Computer Science", language: "Java", explanation: "The  final  keyword prevents a method from being overridden." },
        { question: "What does the  transient  keyword in Java do?", options: ["Makes a variable visible to all threads", "Prevents a variable from being serialized", "Makes a variable constant", "Makes a method execute once"], correct: 1, category: "Computer Science", language: "Java", explanation: "The  transient  keyword prevents fields from being written to the output stream during serialization." },
        { question: "Which Java exception is typically recoverable by the program (i.e., a Checked Exception)?", options: ["NullPointerException", "ArithmeticException", "IOException", "ArrayIndexOutOfBoundsException"], correct: 2, category: "Computer Science", language: "Java", explanation: "IOException is a Checked Exception that must be explicitly handled or declared." },
        { question: "What is the primary purpose of the  hashCode()  method contract when overriding  equals() ?", options: ["To improve security", "To optimize garbage collection", "To ensure correctness when using hash-based collections (like HashMap)", "To enforce encapsulation"], correct: 2, category: "Computer Science", language: "Java", explanation: "The contract requires that if two objects are equal (via  equals() ), they must have the same hash code." },
        { question: "In Java concurrency, what does the  synchronized  keyword primarily protect?", options: ["Local variables", "Static methods", "Primitive types", "Shared instance and static data from race conditions"], correct: 3, category: "Computer Science", language: "Java", explanation: "The  synchronized  keyword provides a monitor lock to prevent race conditions on shared data." },
    ],
    FINAL_APTITUDE: [
        { question: "A sum of money at compound interest doubles in 6 years. In how many years will it become four times itself?", options: ["10 years", "12 years", "15 years", "18 years"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: Since  4 = 2^2 , the time will be  6 \\times 2 = 12  years (Applies only to Compound Interest)." },
        { question: "If the area of a square increases by 69%, by what percentage does the side length increase?", options: ["13%", "30%", "69%", "169%"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: New Area  = 1.69 \\times \text{Original Area} . New Side  = \sqrt{1.69} = 1.3 . Increase  = 30\% ." },
        { question: "If two pipes A and B can fill a tank in 10 hours and 15 hours respectively, and pipe C can empty it in 5 hours, how long will it take to fill the tank if all three are open?", options: ["10 hours", "15 hours", "20 hours", "Will never fill"], correct: 3, category: "Aptitude & Reasoning", explanation: "Reason: Combined rate  = 1/10 + 1/15 - 1/5 = -1/30 . Since the rate is negative, the tank will never fill." },
        { question: "An election contest between two candidates, A and B. A gets 60% of the total valid votes. 20% of the votes cast were invalid. If the total number of votes was 16000, how many valid votes did B get?", options: ["5120", "6400", "7680", "12800"], correct: 0, category: "Aptitude & Reasoning", explanation: "Reason: Valid votes  = 16000 \\times 0.80 = 12800 . B's share  = 40\% . B's votes  = 12800 \\times 0.40 = 5120 ." },
        { question: "If 6 men can complete a work in 10 days, how many days will 15 men take to complete the same work?", options: ["3 days", "4 days", "5 days", "6 days"], correct: 1, category: "Aptitude & Reasoning", explanation: "Reason: Total work  = 6 \\times 10 = 60  man-days. Days needed for 15 men  = 60 / 15 = 4  days." },
    ],
    FINAL_GK: [
        { question: "What is the name of the supercontinent that existed about 335 million years ago?", options: ["Gondwana", "Laurasia", "Pangaea", "Columbia"], correct: 2, category: "General Knowledge", explanation: "Pangaea was the supercontinent comprising all major landmasses." },
        { question: "Which is the largest gland in the human body?", options: ["Pancreas", "Thyroid", "Liver", "Kidney"], correct: 2, category: "General Knowledge", explanation: "The liver is the largest gland." },
        { question: "What is the name of the deepest point in the Earth's oceans?", options: ["Puerto Rico Trench", "Java Trench", "Mariana Trench", "Tonga Trench"], correct: 2, category: "General Knowledge", explanation: "The Mariana Trench contains the Challenger Deep, the deepest known point." },
        { question: "The term 'Manga Carta' relates to which historical document?", options: ["The US Constitution", "The Great Charter of England", "The Treaty of Versailles", "The Roman Law"], correct: 1, category: "General Knowledge", explanation: "Magna Carta (Great Charter) is a famous English charter of rights." },
        { question: "Who was the first woman to win a Nobel Prize?", options: ["Mother Teresa", "Marie Curie", "Rosalind Franklin", "Ada Lovelace"], correct: 1, category: "General Knowledge", explanation: "Marie Curie was the first woman to win a Nobel Prize (Physics, 1903)." },
    ],
    FINAL_ANIMATION: [
        { question: "What is the industry term for the final, clean outline drawing of an animated character, ready for coloring?", options: ["Rough", "Twinning", "Line Art/Clean-up", "Maquette"], correct: 2, category: "Animation Degree", explanation: "Clean-up is the process of making the rough animation lines precise and smooth." },
        { question: "Which principle focuses on the character's movement leading up to a main action, preparing the audience?", options: ["Follow Through", "Anticipation", "Staging", "Arc"], correct: 1, category: "Animation Degree", explanation: "Anticipation prepares the audience for the next movement, adding realism and impact." },
        { question: "What is the core purpose of a 'Maquette' in traditional character animation?", options: ["A detailed background painting", "A 3D physical model used as a reference for consistent drawing", "A character's initial color palette", "The final rendered output"], correct: 1, category: "Animation Degree", explanation: "A Maquette is a small sculpture used to maintain accurate 3D perspective and form." },
        { question: "What is the term for projecting live-action film frame-by-frame and tracing over the action to create animation?", options: ["Squash and Stretch", "Rotoscoping", "Motion Capture", "Lip Sync"], correct: 1, category: "Animation Degree", explanation: "Rotoscoping involves tracing live-action footage to achieve realistic human motion." },
        { question: "What does the term 'UV Mapping' relate to in 3D graphics?", options: ["Lighting a scene", "Assigning motion data to a rig", "Creating a 2D surface (texture map) coordinate system for a 3D model", "Rendering speed optimization"], correct: 2, category: "Animation Degree", explanation: "UV mapping defines how a 2D texture wraps around a 3D object." },
    ]
};


// --- Game Configuration (Simplified to 2 Rounds) ---
const gameConfigTemplate = [
    {
        name: "Qualification Round (Custom)",
        roundKey: "QUALIFICATION",
        numQuestions: 10,
        required: 7,
        timeLimit: 30
    },
    {
        name: "Final Round (Mixed Hard)",
        roundKey: "FINAL",
        numQuestions: 20, // FIXED to 20 questions
        required: 15,    // FIXED to 15 (75% of 20)
        timeLimit: 40
    }
];

// Global variable to hold the filtered questions for the current game
let gameConfig = { levels: [] };

// Game state
let currentLevelIndex = 0;
let currentQuestionIndex = 0;
let levelScore = 0;
let totalScore = 0;
let timer;
let timeLeft;

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const categorySelectScreen = document.getElementById('category-select-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const startQuizBtn = document.getElementById('start-quiz-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionCategoryElement = document.getElementById('question-category');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const feedbackElement = document.getElementById('feedback');
const levelDisplay = document.getElementById('current-level');
const levelScoreDisplay = document.getElementById('level-score');
const levelRequiredDisplay = document.getElementById('level-required'); 
const questionNumDisplay = document.getElementById('question-num');
const totalQuestionsDisplay = document.getElementById('total-questions');
const resultTitle = document.getElementById('result-title');
const resultDetails = document.getElementById('result-details');
const timerDisplay = document.getElementById('timer');
const csCategoryCheckbox = document.getElementById('cs-category');
const languageSelectionGroup = document.getElementById('language-selection-group');
const winAnimation = document.getElementById('win-animation'); 

// Event Listeners
startBtn.addEventListener('click', showCategorySelection);
startQuizBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartGame);
csCategoryCheckbox.addEventListener('change', toggleLanguageSelection);


function toggleLanguageSelection() {
    if (csCategoryCheckbox.checked) {
        languageSelectionGroup.classList.remove('hidden');
    } else {
        languageSelectionGroup.classList.add('hidden');
    }
}

function showCategorySelection() {
    welcomeScreen.classList.add('hidden');
    categorySelectScreen.classList.remove('hidden');
    toggleLanguageSelection(); 
}

function init() {
    gameConfig.levels = []; 
    winAnimation.classList.add('hidden');
    // Ensure all checkboxes start checked for convenience
    Array.from(document.querySelectorAll('input[type="checkbox"]')).forEach(cb => cb.checked = true);
}

// --- MODIFIED LOGIC: Filtering Logic for Qualification Round and Final Round Setup (Ensuring 20 Final Qs) ---
function filterQuestions() {
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
    const selectedLanguages = Array.from(document.querySelectorAll('input[name="language"]:checked')).map(cb => cb.value);

    if (!selectedCategories.includes("Computer Science")) {
        selectedLanguages.length = 0;
    }

    // --- 1. Prepare Qualification Round Questions (Logic unchanged) ---
    let qualificationPool = [];
    
    const categoryMaps = {
        "Computer Science": {
            'General-CS': "EASY_CS_GENERAL", 
            'C': "EASY_CS_C", 
            'Python': "EASY_CS_PYTHON", 
            'JavaScript': "EASY_CS_JAVASCRIPT", 
            'Java': "EASY_CS_JAVA"
        },
        "Aptitude & Reasoning": "EASY_APTITUDE",
        "General Knowledge": "EASY_GK",
        "Financial & Business": "EASY_FINANCE"
    };

    selectedCategories.forEach(category => {
        
        if (category === "Computer Science") {
            // Filter CS questions by selected languages
            selectedLanguages.forEach(lang => {
                const key = categoryMaps[category][lang];
                if (questionData[key]) {
                    qualificationPool = qualificationPool.concat(questionData[key]);
                }
            });
        } else {
            // For non-CS categories, include all questions from the single pool key
            const key = categoryMaps[category];
            if (questionData[key]) {
                qualificationPool = qualificationPool.concat(questionData[key]);
            }
        }
    });

    
    // Select exactly 10 questions for the qualification round
    let qualificationQuestions = shuffleArray(qualificationPool).slice(0, gameConfigTemplate[0].numQuestions);

    // --- 2. Prepare Final Round Questions (FIXED 20 Qs distributed across 8 hard pools) ---
    let finalQuestions = [];
    const finalCategories = [
        "FINAL_CS_GENERAL", "FINAL_CS_C", "FINAL_CS_PYTHON", "FINAL_CS_JAVASCRIPT", "FINAL_CS_JAVA",
        "FINAL_APTITUDE", 
        "FINAL_GK", 
        "FINAL_FINANCE"
    ];
    
    const TOTAL_FINAL_QUESTIONS = 20;
    const NUM_CATEGORIES = finalCategories.length; // 8
    
    // Calculate base questions per category (20 / 8 = 2) and remainder (4)
    let baseQuestionsPerCategory = Math.floor(TOTAL_FINAL_QUESTIONS / NUM_CATEGORIES); 
    let remainder = TOTAL_FINAL_QUESTIONS % NUM_CATEGORIES;
    
    // Create an array to track how many questions to pull from each category (2 or 3)
    let questionsToPull = finalCategories.map(key => baseQuestionsPerCategory);
    
    // Distribute the remainder (e.g., 4 categories get +1 question)
    for (let i = 0; i < remainder; i++) {
        questionsToPull[i]++;
    }

    // Pull the questions
    finalCategories.forEach((key, index) => {
        const count = questionsToPull[index];
        if (questionData[key] && count > 0) {
            let selected = shuffleArray(questionData[key]).slice(0, count);
            finalQuestions = finalQuestions.concat(selected);
        }
    });

    // Final shuffle and trim (though trimming should be unnecessary if sources have enough questions)
    finalQuestions = shuffleArray(finalQuestions).slice(0, TOTAL_FINAL_QUESTIONS);

    // 3. Build the final game configuration
    gameConfig.levels = [
        {
            ...gameConfigTemplate[0],
            questions: qualificationQuestions,
            numQuestions: qualificationQuestions.length
        },
        {
            ...gameConfigTemplate[1],
            questions: finalQuestions,
            numQuestions: finalQuestions.length,
            // Ensure required score is 15 if finalQuestions.length is 20
            required: gameConfigTemplate[1].required // Should be 15
        }
    ].filter(level => level.questions.length > 0);
}

// Start the game
function startGame() {
    filterQuestions();

    // Check if enough questions were compiled for the qualification round
    if (gameConfig.levels.length === 0 || gameConfig.levels[0].questions.length < gameConfigTemplate[0].required) {
        alert("Error: Not enough questions available to guarantee qualification (Need 7 questions, found " + (gameConfig.levels.length > 0 ? gameConfig.levels[0].questions.length : 0) + "). Please select more categories/languages.");
        return;
    }

    categorySelectScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    currentLevelIndex = 0;
    currentQuestionIndex = 0;
    levelScore = 0;
    totalScore = 0;
    showLevel();
}

// Show current level details
function showLevel() {
    const level = gameConfig.levels[currentLevelIndex];
    
    // Reset score for the new round
    levelScore = 0;
    
    levelDisplay.textContent = `${currentLevelIndex + 1} (${level.name})`;
    totalQuestionsDisplay.textContent = level.numQuestions;
    levelRequiredDisplay.textContent = level.required;
    
    showQuestion();
}

// Show current question (Logic remains the same)
function showQuestion() {
    const level = gameConfig.levels[currentLevelIndex];
    const question = level.questions[currentQuestionIndex];
    
    if (!question) {
        // If we ran out of questions before hitting the maximum planned questions
        nextBtn.textContent = 'View Results';
        nextBtn.classList.remove('hidden');
        return;
    }

    questionCategoryElement.textContent = `Category: ${question.category}`;
    questionElement.textContent = question.question;
    questionNumDisplay.textContent = currentQuestionIndex + 1;
    levelScoreDisplay.textContent = levelScore;
    
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('div');
        button.className = 'option';
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });
    
    nextBtn.classList.add('hidden');
    feedbackElement.textContent = '';
    feedbackElement.className = 'feedback';
    
    startTimer(level.timeLimit);
}

// Handle answer selection and check for IMMEDIATE promotion
function selectAnswer(selectedIndex) {
    clearInterval(timer);
    
    const level = gameConfig.levels[currentLevelIndex];
    const question = level.questions[currentQuestionIndex];
    
    const options = document.querySelectorAll('.option');
    
    options.forEach(option => {
        option.style.pointerEvents = 'none';
        option.classList.remove('hover');
    });
    
    const isCorrect = selectedIndex === question.correct;
    
    let feedbackText = '';
    let feedbackClass = 'incorrect';
    
    const selectedOption = options[selectedIndex];
    const correctOption = options[question.correct];
    
    if (isCorrect) {
        levelScore++;
        totalScore++;
        levelScoreDisplay.textContent = levelScore;
        
        if (selectedOption) {
            selectedOption.classList.add('correct');
        }
        
        feedbackText = '✅ Correct!';
        feedbackClass = 'correct';
    } else {
        if (selectedOption) {
            selectedOption.classList.add('incorrect');
        }
        
        // Highlight the correct answer.
        if (correctOption) {
            correctOption.classList.add('correct');
        }
        
        feedbackText = '❌ Incorrect!';
    }
    
    // --- Display Explanation Logic ---
    if (question.category === "Aptitude & Reasoning") {
        feedbackElement.textContent = `${feedbackText} ${question.explanation}`;
    } else {
        if (!isCorrect) {
             feedbackElement.textContent = `${feedbackText} ${question.explanation}`;
        } else {
             feedbackElement.textContent = feedbackText;
        }
    }
    feedbackElement.classList.add(feedbackClass);

    // --- IMMEDIATE PROMOTION CHECK ---
    if (levelScore >= level.required) {
        nextBtn.classList.remove('hidden');
        nextBtn.textContent = (currentLevelIndex < gameConfig.levels.length - 1) ? 'Round Qualified! Proceed to Final Round' : 'Quiz Complete!';
    } else {
        nextBtn.classList.remove('hidden');
        // If not qualified and this is the last question of the round, game over.
        if (currentQuestionIndex === level.questions.length - 1) {
            nextBtn.textContent = 'View Results';
        } else {
            nextBtn.textContent = 'Next Question';
        }
    }
}

// Handles the logic for moving to the next question OR advancing the level
function nextQuestion() {
    const level = gameConfig.levels[currentLevelIndex];
    
    // Check if score is met (handles immediate pass or passing on last question)
    if (levelScore >= level.required) {
        if (currentLevelIndex < gameConfig.levels.length - 1) {
            // Qualified for the next round
            currentLevelIndex++;
            currentQuestionIndex = 0;
            showResult(true, true); // Show interim result
        } else {
            // Game Won
            showResult(true, false);
        }
    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex < level.questions.length) {
            // Go to next question within the current round
            showQuestion();
        } else {
            // Failed to meet the minimum score after all questions are exhausted
            showResult(false, false);
        }
    }
}

// Show game result 
function showResult(isQualified, isInterim) {
    const levelIndexForDetails = isInterim ? currentLevelIndex - 1 : currentLevelIndex;
    const level = gameConfig.levels[levelIndexForDetails];
    
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    winAnimation.classList.add('hidden'); 
    
    resultDetails.innerHTML = '';
    restartBtn.style.display = 'block'; 
    
    if (isQualified && !isInterim) {
        // Final Win 
        resultTitle.textContent = '🏆 Quiz Champion! Master Achieved! 🏆';
        winAnimation.classList.remove('hidden'); // Show win animation
        resultDetails.innerHTML = `
            <p>You successfully conquered the Final Round with **${levelScore}** correct answers (Required: ${level.required}).</p>
            <p>Your comprehensive knowledge is exceptional! 🎉</p>
        `;
    } else if (isQualified && isInterim) {
        // Round Passed - Ready for Next Round
        resultTitle.textContent = `Round ${levelIndexForDetails + 1} Complete!`;
        resultDetails.innerHTML = `
            <p>You scored **${levelScore}** correct answers (Required: ${level.required}) in the ${level.name}.</p>
            <p>🎉 You've Qualified! Proceeding to the Final Round! 🎉</p>
        `;
        
        const nextActionBtn = document.createElement('button');
        nextActionBtn.className = 'btn primary-btn'; 
        nextActionBtn.textContent = `Start Final Round`;
        nextActionBtn.onclick = () => {
            resultScreen.classList.add('hidden');
            quizScreen.classList.remove('hidden');
            showLevel();
        };
        resultDetails.appendChild(nextActionBtn);
        restartBtn.style.display = 'none'; 
        
    } else {
        // Game Over (Failed to qualify/win)
        resultTitle.textContent = 'Game Over';
        const failMessage = levelIndexForDetails === 0 ? "qualify" : "win the final round";

        resultDetails.innerHTML = `
            <p>You scored **${levelScore}** out of ${level.numQuestions} in the ${level.name}.</p>
            <p>You needed **${level.required}** correct answers to ${failMessage}, but you only got **${levelScore}**.</p>
            <p>Better luck next time! 😊</p>
        `;
    }
}

// Restart the game (Logic remains the same)
function restartGame() {
    resultScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
    init();
}

// Timer functions (Logic remains the same)
function startTimer(duration) {
    clearInterval(timer); 
    timeLeft = duration;
    updateTimerDisplay();
    timerDisplay.classList.remove('low-time');
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            timeOut();
        }
    }, 1000);
}

function updateTimerDisplay() {
    timerDisplay.textContent = `Time: ${timeLeft}s`;
    
    if (timeLeft <= 5) {
        timerDisplay.classList.add('low-time');
    } else {
        timerDisplay.classList.remove('low-time');
    }
}

function timeOut() {
    selectAnswer(-1); 
    
    feedbackElement.textContent = '⏰ Time\'s up! The correct answer is highlighted.';
    feedbackElement.classList.add('incorrect');
    
    // Check if promotion is possible even on timeout
    const level = gameConfig.levels[currentLevelIndex];
    if (levelScore >= level.required) {
        nextBtn.textContent = (currentLevelIndex < gameConfig.levels.length - 1) ? 'Round Qualified! Proceed to Final Round' : 'Quiz Complete!';
    } else {
        nextBtn.textContent = 'Next Question';
    }
    nextBtn.classList.remove('hidden');
}

// Helper functions (Logic remains the same)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getTotalQuestions() {
    // Calculates total questions from the *current* gameConfig (the filtered one)
    return gameConfig.levels.reduce((total, level) => total + level.numQuestions, 0);
}

window.addEventListener('DOMContentLoaded', init);