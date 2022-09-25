interface DMS {
	dir: 'N' | 'S' | 'E' | 'W';
	deg: number;
	min: number;
	sec: number;
}

// https://stackoverflow.com/questions/5786025/decimal-degrees-to-degrees-minutes-and-seconds-in-javascript
export function decimalDegreesToDMS(decimalDegrees: number, type: 'lat' | 'lng'): DMS {
	return {
		dir: decimalDegrees < 0 ? (type === 'lng' ? 'W' : 'S') : type === 'lng' ? 'E' : 'N',
		deg: 0 | (decimalDegrees < 0 ? (decimalDegrees = -decimalDegrees) : decimalDegrees),
		min: 0 | (((decimalDegrees += 1e-9) % 1) * 60),
		sec: (0 | (((decimalDegrees * 60) % 1) * 6000)) / 100
	};
}

export function prettyPrintDMS({ dir, deg, min, sec }: DMS) {
	return `${dir} ${deg}° ${min}′ ${sec}″`;
}

export function prettyPrintDecimalDegrees(decimalDegrees: number, type: 'lat' | 'lng') {
	return prettyPrintDMS(decimalDegreesToDMS(decimalDegrees, type));
}
