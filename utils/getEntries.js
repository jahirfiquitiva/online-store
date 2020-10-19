import client from '@utils/initContentfulClient';
import {
  filterNotUndefined, mapBrand, mapCategory, mapContentfulEntry, mapProduct
} from '@utils/mapEntryTypes';

const getEntriesForContentType = async (contentType, mapFunction) => {
  const itemsInContentful = await client.getEntries({
    content_type: contentType
  });
  const { items = [] } = itemsInContentful;
  return filterNotUndefined(items.map(mapContentfulEntry).map(mapFunction));
};

export async function fetchEntries() {
  return {
    categories: await getEntriesForContentType('category', mapCategory),
    products: await getEntriesForContentType('product', mapProduct),
    brands: await getEntriesForContentType('brand', mapBrand),
  };
}

export default { fetchEntries };
