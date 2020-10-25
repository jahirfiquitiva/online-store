import { fetchEntries } from '@utils/getEntries';
import Toolbar from '@components/global/toolbar/toolbar';

export default function Home({ products, brands, categories }) {
  console.log('Products:')
  console.table(products);
  console.log('Brands:')
  console.table(brands);
  console.log('Categories:')
  console.table(categories);

  return (
    <Toolbar/>
  );
}

export async function getServerSideProps() {
  const res = await fetchEntries();
  return { props: { ...res }, };
}
