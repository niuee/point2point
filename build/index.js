"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointCal = void 0;
class PointCal {
    static addVector(a, b) {
        if (a.z == null && b.z == null)
            return { x: a.x + b.x, y: a.y + b.y };
        if (a.z == null || b.z == null) {
            if (a.z == null)
                a.z = 0;
            if (b.z == null)
                b.z = 0;
        }
        return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z };
    }
    static subVector(a, b) {
        if (a.z == null && b.z == null)
            return { x: a.x - b.x, y: a.y - b.y };
        if (a.z == null || b.z == null) {
            if (a.z == null)
                a.z = 0;
            if (b.z == null)
                b.z = 0;
        }
        return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
    }
    static multiplyVectorByScalar(a, b) {
        if (a.z == null)
            return { x: a.x * b, y: a.y * b };
        return { x: a.x * b, y: a.y * b, z: a.z * b };
    }
    static divideVectorByScalar(a, b) {
        if (b == 0)
            return { x: a.x, y: a.y };
        if (a.z == null)
            return { x: a.x / b, y: a.y / b };
        return { x: a.x / b, y: a.y / b, z: a.z / b };
    }
    static magnitude(a) {
        if (a.z == null)
            a.z = 0;
        return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
    }
    static unitVector(a) {
        if (a.z == null)
            a.z = 0;
        return { x: a.x / this.magnitude(a), y: a.y / this.magnitude(a), z: a.z / this.magnitude(a) };
    }
    static dotProduct(a, b) {
        if (a.z == null && b.z == null)
            return a.x * b.x + a.y * b.y;
        if (a.z == null || b.z == null) {
            if (a.z == null)
                a.z = 0;
            if (b.z == null)
                b.z = 0;
        }
        return a.x * b.x + a.y * b.y + a.z * b.z;
    }
    static crossProduct(a, b) {
        if (a.z == null || b.z == null) {
            if (a.z == null)
                a.z = 0;
            if (b.z == null)
                b.z = 0;
        }
        return { x: a.y * b.z - a.z * b.y, y: a.z * b.x - a.x * b.z, z: a.x * b.y - a.y * b.x };
    }
    static unitVectorFromA2B(a, b) {
        return this.unitVector(this.subVector(b, a));
    }
    static rotatePoint(point, angle) {
        return { x: point.x * Math.cos(angle) - point.y * Math.sin(angle), y: point.x * Math.sin(angle) + point.y * Math.cos(angle) };
    }
    static transform2NewAxis(point, angleFromOriginalAxis2DestAxis) {
        // angle is the angle from the original axis to the destination axis ccw is positive as always
        return { x: point.x * Math.cos(angleFromOriginalAxis2DestAxis) + point.y * Math.sin(angleFromOriginalAxis2DestAxis), y: -point.x * Math.sin(angleFromOriginalAxis2DestAxis) + point.y * Math.cos(angleFromOriginalAxis2DestAxis) };
    }
    static angleFromA2B(a, b) {
        return Math.atan2(a.x * b.y - a.y * b.x, a.x * b.x + a.y * b.y);
    }
    static transformPointWRTAnchor(point, anchor, angle) {
        // angle is in radians
        let newPoint = this.rotatePoint(this.subVector(point, anchor), angle);
        return this.addVector(newPoint, anchor);
    }
    static distanceBetweenPoints(a, b) {
        return this.magnitude(this.subVector(a, b));
    }
    static flipYAxis(point) {
        point.y = -point.y;
        return point;
    }
}
exports.PointCal = PointCal;
//# sourceMappingURL=index.js.map