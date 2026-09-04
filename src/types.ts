export interface ColorVariant {
  label: string;
  hex: string;
  image: string; // front view
  backImage?: string; // optional back view — add only where you have a back photo
}

export interface Product {
  name: string;
  price: number;
  image: string; // fallback / default image
  colors?: ColorVariant[]; // optional — omit for products with no color variants
  showColorTextOnly?: boolean;
}

export type Category = "men" | "women";
export type ProductCatalog = Record<Category, Product[]>;
