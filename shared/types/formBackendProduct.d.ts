import type { StringMappingType } from "typescript"

interface ProductData {
  data: ProductResource;
  included: {
    stores: Record<string, StoreDetail>;
  };
  links: {
    self: string;
  };
  meta: MetaInformation;
}

interface ProductResource {
  id: number;
  attributes: {
    name: string;
    article: string;
    description: string; 
    product: ProductCommerce;
    images: ProductImages;
    properties: Record<string, { name: string, value: number | string | string[] } | null>;
    tabs: ProductTab[];
    stikers: { value: string[] }; 
    brand: Brand[];
  };
}

interface Brand{
  id: number,
  attributes: {
    name: string,
    images: {
      preview: string,
    }
  },
  links: {
    self: string,
  }
}

// Коммерческие данные (Цена и общее кол-во)
interface ProductCommerce {
  quantity: number;
  currency: string;
  price: {
    value: number;
    valueFormatted: string; 
  };
  stores: StoreStock[]; 
}

interface PropertyItem {
  name: string;
  value: string | number;
}

// Вкладки (Доставка, Оплата, Гарантия)
interface ProductTab {
  title: string;
  info: string;
  sort: number;
}

interface ProductImages {
  preview: { src: string; alt: string };
  detail: { src: string; alt: string };
  more: Array<{ src: string; alt: string }>;
}

// Наличие на конкретном складе (внутри attributes)
interface StoreStock {
  store_id: string;
  amount: string;
  text: string; // 
}

// Детальная информация о складе (внутри included)
interface StoreDetail {
  name: string;
  address: string;
  phone: string;
  schedule: string;
}