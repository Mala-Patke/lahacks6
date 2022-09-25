import { Marker } from 'mapbox-gl';
import { writable, type Writable } from 'svelte/store';

export const marker: Writable<Marker> = writable(new Marker());
