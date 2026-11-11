import type { CSSProperties } from "react";

export type CSSVars = CSSProperties & Record<`--${string}`, string | number>;

export interface Dish {
  name: string;
  description: string;
  tags: string[];
}

export interface Region {
  id: string;
  city: string;
  province: string;
  landmark: string;
  image: string;
  accent: string;
  intro: string;
  dishes: Dish[];
}
