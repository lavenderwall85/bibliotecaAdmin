import { writable } from "svelte/store";
import { Biblioteca } from "../lib/library";

export const biblioteca = writable(new Biblioteca());
