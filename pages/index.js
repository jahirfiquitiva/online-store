import { fetchEntries } from '@utils/getEntries';
import Toolbar from '@components/global/toolbar/toolbar';
import Featured from '@components/index/featured/featured';

export default function Home({ products, brands, categories }) {
  console.log('Products:');
  console.table(products);
  console.log('Brands:');
  console.table(brands);
  console.log('Categories:');
  console.table(categories);

  return (<>
    <Toolbar/>
    <div className={'max-width-wrapper'}>
      <Featured product={products[0]} brands={brands}/>
    </div>
  </>);
}

export async function getServerSideProps() {
  const res = await fetchEntries();
  return { props: { ...res }, };
}
