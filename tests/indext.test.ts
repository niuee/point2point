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
    });

    test("Magnitude of a point", () => {
        expect(Point2Point.PointCal.magnitude({x: 1, y: 2})).toBe(Math.sqrt(5))
    });

    test("Unit Vector", () => {
        expect(Point2Point.PointCal.unitVector({x: 1, y: 2})).toEqual(expect.objectContaining({x: 0.4472135954999579, y: 0.8944271909999159}))
    });
});