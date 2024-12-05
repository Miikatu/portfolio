import { WishItem } from '../types';
import ChristmasWishlist from '../app/components/content/christmasWushList';
import { GetStaticProps } from 'next';
import { getWishList } from '../sanity/client';

export default function Joulu(props: {wishList:WishItem[]}) {
  return (
    <ChristmasWishlist wishList={props.wishList} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const wishlist = await getWishList();
    if (!wishlist) {
      throw new Error('No items found');  

    } return { props: { wishList:wishlist }, revalidate: 10 };
  } catch (error) {
    return { props: { wishlist: [], error} };
  }
};
