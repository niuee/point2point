export type point = {
    x: number;
    y: number;
    z?: number;
};
export declare class PointCal {
    static addVector(a: point, b: point): {
        x: number;
        y: number;
        z?: undefined;
    } | {
        x: number;
        y: number;
        z: number;
    };
    static subVector(a: point, b: point): {
        x: number;
        y: number;
        z?: undefined;
    } | {
        x: number;
        y: number;
        z: number;
    };
    static multiplyVectorByScalar(a: point, b: number): {
        x: number;
        y: number;
        z?: undefined;
    } | {
        x: number;
        y: number;
        z: number;
    };
    static divideVectorByScalar(a: point, b: number): {
        x: number;
        y: number;
        z?: undefined;
    } | {
        x: number;
        y: number;
        z: number;
    };
    static magnitude(a: point): number;
    static unitVector(a: point): {
        x: number;
        y: number;
        z: number;
    };
    static dotProduct(a: point, b: point): number;
    static crossProduct(a: point, b: point): {
        x: number;
        y: number;
        z: number;
    };
    static unitVectorFromA2B(a: point, b: point): {
        x: number;
        y: number;
        z: number;
    };
    static rotatePoint(point: point, angle: number): {
        x: number;
        y: number;
    };
    static angleFromA2B(a: point, b: point): number;
    static transformPointWRTAnchor(point: point, anchor: point, angle: number): {
        x: number;
        y: number;
        z?: undefined;
    } | {
        x: number;
        y: number;
        z: number;
    };
    static distanceBetweenPoints(a: point, b: point): number;
}
