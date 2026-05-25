import type { Interface } from "node:readline";
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

interface MetaInformation {
  settings: {
    pate_type: "type_1",
  },
  info: {
    delivery: {
      delivery: string,
    },
  },
  seo: {
    title: string,
    description: string
  },
  og: {
    "og:title": string,
    "og:type": string,
    "og:site_name": string,
    "og:description": string,
    "og:url": string,
    "og:image": string,
  }
}


interface ProductResource {
  id: number;
  attributes: Attributes;
}

interface PropertyItem {
  name: string;
  value: number | string | string[];
}

interface Attributes {
  name: string;
  article: string;
  description: string;
  product: ProductCommerce;
  images: ProductImages;
  tizers: Tizers[];
  properties: Record<string, { name: string, value: number | string | string[] } | null>;
  tabs: ProductTab[];
  stikers: { value: string[] };
  brand: Brand[];
  sale: Sale[];
}

interface Tizers {
  id: number,
  attributes: {
    name: string,
    preview_text: string,
  },
  images: {
    preview: string,
  }


}

interface Sale {
  id: string,
  attributes: {
    name: string,
  },
  self: {
    link: string,
  }
}

interface Brand {
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

interface ProductReviewsData {
  data: Review[],
  links: {
    self: string,
  }
}

interface Review {
  id: number,
  attributes: {
    "created_at": string,
    author: string,
    rating: number,
    text: string,
    advantages: string,
    disadvantages: string,
    bought: boolean,
    user_experience: string,
  }
}

interface ReviewStaticData {
  data: {
    id: number,
    attributes: {
      count: number,
    }
  }[],
  meta: {
    rating: number
  }
}
