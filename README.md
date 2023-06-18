# point2point

> This is a work in progress do not use it in any kind of production.

This is a minimal 2D vector calculation library that I wrote for my horse race track maker and parser as part of my horse racing game side project. Detail Documenation will follow in the near future.

The Overall wrapping class is ```PointCal```. 

This package is not currently on npm or other package manager. To use it, you would have to clone the repo and use local dependency in the ```package.json```. It can be something like this.

#### **`package.json`**
``` json
"dependencies": {
    ...
    ...
    "point2point": "./submodules/point2point"
  }
```

Or you can use `npm link`

The calculations that this library is capable of is listed below.

- Vector Addition 
- Vector Subtraction
- Multiply A Vector With a Scalar Value
- Unit Vector of a Vector
- Unit Vector from Point A to Point B
- Magnitude of a Vector
- Distance between 2 Points
- Rotate a Vector $\theta$ radians (CCW is the positive direction)
- Dot Product
- Cross Product
- Angle from Vector A to Vector B