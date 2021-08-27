import { EpidemicCard } from "../Card/EpidemicCard";

export const generateEpidemicCards = (quantity: number) => Array.from(Array(quantity), () => new EpidemicCard());