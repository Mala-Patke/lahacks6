export function pointsFromCircle(center: [number, number], radius: number, sides = 20) {
	const points: [number, number][] = [];
	for (let i = 0; i <= sides; i++) {
		const deg = (i / sides) * 360;
		const rad = (deg * Math.PI) / 180;
		points.push([center[0] + Math.sin(rad) * radius, center[1] + Math.cos(rad) * radius]);
	}
	return points;
}

export function boundsFromPoints(points: [number, number][]): [[number, number], [number, number]] {
	let north: number = points[0][0];
	let south: number = points[0][0];
	let east: number = points[0][1];
	let west: number = points[0][1];

	for (const point of points) {
		if (point[0] > north) north = point[0];
		if (point[0] < south) south = point[0];
		if (point[1] > east) east = point[1];
		if (point[1] < west) west = point[1];
	}

	return [
		[south, west],
		[north, east]
	];
}

export function polygonFromBounds(
	bounds: [[number, number], [number, number]]
): [number, number][] {
	return [
		bounds[0],
		[bounds[1][0], bounds[0][1]],
		bounds[1],
		[bounds[0][0], bounds[1][1]],
		bounds[0]
	];
}
