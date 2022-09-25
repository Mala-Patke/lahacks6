import { Marker, Map } from 'mapbox-gl';
import { writable, type Writable } from 'svelte/store';

export const map: Writable<Map> = writable();

const m = new Marker({ draggable: true });
m.setLngLat([-122.031028, 37.410761]);
map.subscribe((map) => m.addTo(map));
export const marker: Writable<Marker> = writable(m);
