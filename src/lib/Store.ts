import { LngLat, Marker, Map } from 'mapbox-gl';
import { writable, type Writable } from 'svelte/store';

export const map: Writable<Map> = writable();
export const marker: Writable<Marker> = writable(new Marker());
export const lgnLatState: Writable<LngLat> = writable(new LngLat(-122.02, 37.4));