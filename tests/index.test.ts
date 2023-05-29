import * as Point2Point from "../src/index";

describe("Point to Point operations", () => {

    test("Addition", () => {
        expect(Point2Point.PointCal.addVector({x: 1, y: 2}, {x: 3, y: 4})).toEqual(expect.objectContaining({x: 4, y: 6}))
    });

    test("Subtraction", () => {
        expect(Point2Point.PointCal.subVector({x: 1, y: 2}, {x: 3, y: 4})).toEqual(expect.objectContaining({x: -2, y: -2}))
    });

    test("Scalar Multiplication", () => {
        expect(Point2Point.PointCal.multiplyVectorByScalar({x: 1, y: 2}, 3)).toEqual(expect.objectContaining({x: 3, y: 6}))
    });

    test("Scalar Division", () => {
        expect(Point2Point.PointCal.divideVectorByScalar({x: 1, y: 2}, 3)).toEqual(expect.objectContaining({x: 0.3333333333333333, y: 0.6666666666666666}))
        expect(Point2Point.PointCal.divideVectorByScalar({x: 1, y: 2}, 0)).toEqual(expect.objectContaining({x: 1, y: 2}))
    });

    test("Magnitude of a point", () => {
        expect(Point2Point.PointCal.magnitude({x: 1, y: 2})).toBe(Math.sqrt(5))
    });

    test("Unit Vector", () => {
        expect(Point2Point.PointCal.unitVector({x: 1, y: 2})).toEqual(expect.objectContaining({x: 0.4472135954999579, y: 0.8944271909999159}))
    });

    test("Dot Product", () => {
        expect(Point2Point.PointCal.dotProduct({x: 1, y: 2}, {x: 3, y: 4})).toBe(11)
    });

    test("Cross Product", () => {
        expect(Point2Point.PointCal.crossProduct({x: 1, y: 2}, {x: 3, y: 4})).toEqual(expect.objectContaining({x: 0, y: 0, z: -2}))
    });

    test("Angle From A to B", () => {
        expect(Point2Point.PointCal.angleFromA2B({x: 1, y: 0}, {x: 0, y: 1})).toBe(Math.PI / 2)
    });

    test("Unit Vector From A to B", () => {
        expect(Point2Point.PointCal.unitVectorFromA2B({x: 1, y: 0}, {x: 0, y: 1})).toEqual(expect.objectContaining({x: -1/Math.sqrt(2), y: 1/Math.sqrt(2)}))
    });

    describe("Point Transformation", () => {
        test("Rotate Point", () => {
            let res = Point2Point.PointCal.rotatePoint({x: 1, y: 0}, Math.PI/ 2);
            expect(res.x).toBeCloseTo(0, 5);
            expect(res.y).toBeCloseTo(1, 5);
        });

        test("Rotate Point with respect to an Anchor Point", () => {
            let res = Point2Point.PointCal.transformPointWRTAnchor({x: 1, y: 0}, {x: 0, y: 0}, Math.PI/ 2);
            expect(res.x).toBeCloseTo(0, 5);
            expect(res.y).toBeCloseTo(1, 5);
        });
    });

    test("Distance Between Two Points", () => {
        let res = Point2Point.PointCal.distanceBetweenPoints({x: 1, y: 0}, {x: 0, y: 1});
        expect(res).toBeCloseTo(Math.sqrt(2), 5);
    });

});
