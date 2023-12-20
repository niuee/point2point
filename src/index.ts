export type point = {
    x: number;
    y: number;
    z?: number;
}

export type Point = {
    x: number;
    y: number;
    z?: number;
}


export class PointCal {

    static addVector(a: point, b: point) {
        if (a.z == null && b.z == null) return {x: a.x + b.x, y: a.y + b.y};
        if (a.z == null || b.z == null) {
            if (a.z == null) a.z = 0;
            if (b.z == null) b.z = 0;
        }
        return {x: a.x + b.x, y: a.y + b.y, z: a.z + b.z}; 
    }

    static subVector(a: point, b: point) {
        if (a.z == null && b.z == null) return {x: a.x - b.x, y: a.y - b.y};
        if (a.z == null || b.z == null) {
            if (a.z == null) a.z = 0;
            if (b.z == null) b.z = 0;
        }
        return {x: a.x - b.x, y: a.y - b.y, z: a.z - b.z};
    }

    static multiplyVectorByScalar(a: point, b: number) {
        if (a.z == null) return {x: a.x * b, y: a.y * b};
        return {x: a.x * b, y: a.y * b, z: a.z * b};
    }

    static divideVectorByScalar(a: point, b: number) {
        if (b == 0) return {x: a.x, y: a.y};
        if (a.z == null) return {x: a.x / b, y: a.y / b};
        return {x: a.x / b, y: a.y / b, z: a.z / b};
    }

    static magnitude(a: point) {
        if (a.z == null) a.z = 0;
        return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
    }

    static unitVector(a: point) {
        if (a.z == null) a.z = 0;
        return this.magnitude(a) != 0 ? {x: a.x / this.magnitude(a), y: a.y / this.magnitude(a), z: a.z / this.magnitude(a)} : {x: 0, y: 0, z: 0};
    }

    static dotProduct(a: point, b: point) {
        if (a.z == null && b.z == null) return a.x * b.x + a.y * b.y;
        if (a.z == null || b.z == null) {
            if (a.z == null) a.z = 0;
            if (b.z == null) b.z = 0;
        }
        return a.x * b.x + a.y * b.y + a.z * b.z;
    }

    static crossProduct(a: point, b: point) {
        if (a.z == null || b.z == null) {
            if (a.z == null) a.z = 0;
            if (b.z == null) b.z = 0;
        }
        return {x: a.y * b.z - a.z * b.y, y: a.z * b.x - a.x * b.z, z: a.x * b.y - a.y * b.x};
    }

    static unitVectorFromA2B(a: point, b: point) {
        return this.unitVector(this.subVector(b, a));
    }

    static rotatePoint(point: point, angle: number) {
        return {x: point.x * Math.cos(angle) - point.y * Math.sin(angle), y: point.x * Math.sin(angle) + point.y * Math.cos(angle)};
    }

    static transform2NewAxis(point: point, angleFromOriginalAxis2DestAxis: number) {
        // angle is the angle from the original axis to the destination axis ccw is positive as always
        return {x: point.x * Math.cos(angleFromOriginalAxis2DestAxis) + point.y * Math.sin(angleFromOriginalAxis2DestAxis), y: -point.x * Math.sin(angleFromOriginalAxis2DestAxis) + point.y * Math.cos(angleFromOriginalAxis2DestAxis)};
    }

    static angleFromA2B(a: point, b: point) {
        return Math.atan2(a.x * b.y - a.y * b.x, a.x * b.x + a.y * b.y);
    }

    static transformPointWRTAnchor(point: point, anchor: point, angle: number) {
        // angle is in radians
        let newPoint = this.rotatePoint(this.subVector(point, anchor), angle);
        return this.addVector(newPoint, anchor);
    }

    static distanceBetweenPoints(a: point, b: point) {
        return this.magnitude(this.subVector(a, b));
    }

    static flipYAxis(point: point): point{
        return {x: point.x, y: -point.y, z: point.z};
    }

    static linearInterpolation(a: point, b: point, t: number): point{
        if (a.z == null || b.z == null) {
            return {x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t};
        } else {
            return {x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, z: a.z + (b.z - a.z) * t};
        }
    }

    static isEqual(a: point, b: point): boolean{
        if (a.z == null){
            a.z = 0;
        }
        if (b.z == null){
            b.z = 0;
        }
        return a.x == b.x && a.y == b.y && a.z == b.z;
    }
    
}
    


