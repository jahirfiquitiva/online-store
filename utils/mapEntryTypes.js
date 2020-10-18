const safeObject = (obj) => {
  Object.keys(obj).forEach(key => {
    if (obj[key] && typeof obj[key] === 'object') {
      safeObject(obj[key]);
    } else if (obj[key] === undefined) delete obj[key];
  });
  return obj;
};

const mapImage = (originalImage) => {
  if (!originalImage) return undefined;
  const { sys, fields } = originalImage;
  const imageId = sys ? sys.id : undefined;
  return safeObject({
    imageId,
    title: fields.title,
    url: fields.file.url,
  });
};

const mapBrand = (originalBrand) => {
  if (!originalBrand) return undefined;
  const { sys, entryId, brandName, brandImage: preBrandImage } = originalBrand;
  const brandImage = preBrandImage ? mapImage(preBrandImage) : undefined;
  const brand = {
    brandId: sys ? sys.id : entryId, brandName, brandImage, entryId: undefined
  };
  return safeObject(brand);
};

const mapProduct = (originalProduct) => {
  if (!originalProduct) return undefined;
  const { sys, entryId } = originalProduct;
  const product = {
    ...originalProduct,
    mainImage: mapImage(originalProduct.mainProductImage),
    productImages: (originalProduct.productImages || []).map(mapImage),
    brand: mapBrand(mapContentfulEntry(originalProduct.brand)),
    mainProductImage: undefined,
    productId: sys ? sys.id : entryId,
    entryId: undefined,
  };
  return safeObject(product);
};

const mapCategory = (originalCategory) => {
  if (!originalCategory) return undefined;
  const { sys, entryId } = originalCategory;
  return safeObject({
    ...originalCategory,
    categoryImage: mapImage(originalCategory.categoryImage),
    products: (originalCategory.products || []).map(mapContentfulEntry)
      .map(mapProduct),
    categoryId: sys ? sys.id : entryId,
    entryId: undefined,
  });
};

const mapContentfulEntry = (entry) => {
  const { sys, fields } = entry;
  const entryId = sys ? sys.id : undefined;
  return fields ? { ...fields, entryId } : { ...entry, entryId };
};

const filterNotUndefined = (items) => items.filter(it => it);

export {
  mapContentfulEntry, mapProduct, mapCategory, mapBrand, filterNotUndefined
};
