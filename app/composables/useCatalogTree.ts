import type { CatalogMainEndpointData, CatalogTitleCard } from "~~/shared/types/formBackendCatalog"



function assembleElement (currentElem: CatalogTitleCard, mainList: CatalogMainEndpointData): CatalogTreeElement {
    const newElement: CatalogTreeElement = {data: currentElem, subcategory: []};
    mainList.data.forEach((elem) => {
        if(elem.attributes.parentId == currentElem.id){
            if(mainList.data.filter((childElem) => {childElem.attributes.parentId == elem.id}).length > 0){
                assembleElement(elem,  mainList);
            } else {
                const childElement: CatalogTreeElement = {data: elem, subcategory: []}
                newElement.subcategory.push(childElement);
            }
        }
    })
    return newElement;
}

export const useCatalogTree = () => {
    const {data, pending} = useLazyFetch<CatalogMainEndpointData>('/api/catalog/');
    const categories: CatalogTreeElement = {data: {id:0, attributes: {name: 'Каталог', count: 0, img: '', parentId: 0}, links: {self: ''}}, subcategory :[]}
        data.value?.data.forEach((elem) => {
        if(!elem.attributes.parentId && data.value?.data){
            categories.subcategory.push(assembleElement(elem, data.value))
        }
    })

    return {data: categories, pending}
    
}