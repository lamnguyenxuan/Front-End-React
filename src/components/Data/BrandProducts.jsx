import { ProductsData } from "./ProductsData";

export const Brands = Array.from(new Set(ProductsData.map((p) => p.brand)));

export const getByBrandX = (brand) => Brands.find(b => b.toLowerCase() === brand.toLowerCase());
