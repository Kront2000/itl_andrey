import type { BreadcrumbItem } from '@nuxt/ui';

export default function pushBreadcrumb(
  id: number, 
  allCategories: CatalogTitleCard[], 
  finalArray: BreadcrumbItem[]
) {
  const category = allCategories.find((cat) => cat.id === id);
  if (!category) return; 
  finalArray.unshift({
    label: category.attributes.name,
    to: category.links.self
  });

  const parentId = category.attributes.parentId;
  if (parentId === undefined || parentId === null) {
    finalArray.unshift({ label: 'Главная', to: '/' });
  } else {
    pushBreadcrumb(parentId, allCategories, finalArray);
  }
}