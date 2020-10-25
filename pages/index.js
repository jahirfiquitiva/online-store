import { fetchEntries } from '@utils/getEntries';
import Toolbar from '@components/global/toolbar/toolbar';
import FeaturedProduct
  from '@components/index/featured-product/featured-product';
import SingleBrand
  from '@components/index/featured-brands/single-brand/single-brand';

export default function Home({ products, brands, categories }) {
  console.log('Products:')
  console.table(products);
  console.log('Brands:')
  console.table(brands);
  console.log('Categories:')
  console.table(categories);

  return (<>
    <Toolbar/>
    <div className={'max-width-wrapper'}>
      <FeaturedProduct product={products[0]}/>
      <SingleBrand {...brands[0]}/>
    </div>
  </>);
}

export async function getServerSideProps() {
  const res = await fetchEntries();
  return { props: { ...res }, };
}
