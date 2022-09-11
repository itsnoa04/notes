Open GL is an api to communicate with the graphics card

![[Pasted image 20220911203549.png]]

WebGL is an Open GL fork for the web [ as gpu drivers need not be accessable by the browser ].

it is much lighter than openGL as it is based on opengl ES [ a lighter version of open GL ]

![[Pasted image 20220911203734.png]]

Shaders are instructions sent to the GPU to render various models.

There are 2 types of shaders the vertex shader and the fragment shader 

vertex shader -> responcible for positioning vertices and hence forming meshes.

fragment shades -> responsible for colorising the vertices

[[GLSL]] ES is a programing language ( syntatically symillar to c ) used to write shaders

3d libraries act as an abstraction layer to simplify 3d in web

webGPU a new way of implimenting 3d in web currently in beta [ more performant than webgl ]

3D libraries takes care of migrateing to newer apis automaticly

