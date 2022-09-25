export function pointsFromCircle(center: [number, number], radius: number, sides = 20) {
	const points: [number, number][] = [];
	for (let i = 0; i <= sides; i++) {
		const deg = (i / sides) * 360;
		const rad = (deg * Math.PI) / 180;
		points.push([center[0] + Math.sin(rad) * radius, center[1] + Math.cos(rad) * radius]);
	}
	return points;
}
