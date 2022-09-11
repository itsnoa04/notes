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

```GLSL
+ - * / ++ += -= < > ...
```

Vectors and Matrices

vectors and matrices are non primitive types

Vectors

vectors are similar to arrays in C

there are 3 types of vectors in GLSL

vec -> float vectors
ivec -> integer vectors
bvec -> boolean vectors

it is suffixed by length of vector

```GLSL
vec2 vectorA = vec2(1.0 , 6.0)

bvec4 vectorB = bvec4(true,true,false,true)

vec2 vectorC = vec2(2.0) // shorthand for vec3(2.0,2.0)

// we can also combine vectors to create a new vector 

vec4 AplusC = vec4(vectorA, vectorB)

```

