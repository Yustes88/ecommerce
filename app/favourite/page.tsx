import Link from "next/link";

import FavouriteEntry from "@/components/FavouriteEntry";

import { getFavourites } from "@/lib/db/favourites";

export const metadata = {
  title: "Your Favourites",
};

async function FavouritePage() {
  const favourites = await getFavourites();

  return (
    <div className="m-4 flex flex-col items-center gap-4">
      <h1 className="mb-6 text-3xl font-bold">My Favourites</h1>
      {favourites?.items.map((cartItem) => (
        <FavouriteEntry cartItem={cartItem} key={cartItem.id} />
      ))}
      {!favourites?.items.length && (
        <>
          <p>Oops, you don&apos;t have your favourite items.</p>
          <Link href="/" className="btn btn-primary">
            Start shopping now!
          </Link>
        </>
      )}
    </div>
  );
}

export default FavouritePage;
