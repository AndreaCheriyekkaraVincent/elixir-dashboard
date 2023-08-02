import { Ingredient } from "./ingredients.model";

export interface Elixir {
    id: string;
    name: string;
    ingredients: Ingredient[];
    sideEffects: string | null;
    effects: string;
  }
  