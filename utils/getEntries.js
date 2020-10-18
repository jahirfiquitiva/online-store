import client from '@utils/initContentfulClient';
import {
  filterNotUndefined, mapBrand, mapCategory, mapContentfulEntry, mapProduct
} from '@utils/mapEntryTypes';

export async function fetchEntries() {
  const productsInContentful = await client.getEntries({
    content_type: 'product'
  });
  const { items: productsItems = [] } = productsInContentful;

  const categoriesInContentful = await client.getEntries({
    content_type: 'category'
  });
  const { items: categoriesItems = [] } = categoriesInContentful;

  const brandsInContentful = await client.getEntries({
    content_type: 'brand'
  });
  const { items: brandsItems = [] } = brandsInContentful;
  
  return {
    categories: filterNotUndefined(
      categoriesItems.map(mapContentfulEntry).map(mapCategory)),
    products: filterNotUndefined(
      productsItems.map(mapContentfulEntry).map(mapProduct)),
    brands: filterNotUndefined(
      brandsItems.map(mapContentfulEntry).map(mapBrand)),
  };
}

export default { fetchEntries };
