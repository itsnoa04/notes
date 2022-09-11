GLSL stands for Open GL Shadeing Language

it is used by to communicate directly to the graphics card

![[Pasted image 20220911203334.png]]

Comments

```GLSL

	// single line comment

	/*
		Multi
		Line
		Comment
	*/

```


Variable

GLSL is a typed language

```GLSL

	type variable_identifier = value;
	
	// eg:
	int a = 77;

```

Constants

Constants are immutable variables

```GLSL

	const type constant_identifier = value;

```

Types

GLSL contains 3 basic types

// NOTE : strings do not exist in GLSL

- int
- float
- bool
``` GLSL

int c = int(true) // c = 1

float d = float(2) // d = 2.0

float e = float(false) // e = 0.0

```

Operators

GLSL supports most of the common operators like
