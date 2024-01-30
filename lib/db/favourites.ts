import { prisma } from "@/lib/db/prisma";
import { authOptions } from "@/utils/authOptions";
import { Favourites, Prisma } from "@prisma/client";
import { getServerSession } from "next-auth";
import { cookies } from "next/dist/client/components/headers";

export type FavouritesWithProducts = Prisma.FavouritesGetPayload<{
  include: { items: { include: { product: true } } };
}>;

export type FavouriteItemWithProduct = Prisma.FavouriteItemGetPayload<{
  include: { product: true };
}>;

export type FavouritesCart = FavouritesWithProducts & {
  size: number;
  subtotal: number;
};

export async function createFavourites() {
  const session = await getServerSession(authOptions);

  let newFavourites: Favourites;
  if (session) {
    newFavourites = await prisma.cart.create({
      data: { id: session.user.id },
    });
  } else {
    newFavourites = await prisma.cart.create({
      data: {},
    });
    cookies().set("localCartId", newFavourites.id);
  }

  return {
    ...newFavourites,
    items: [],
    size: 0,
    subtotal: 0,
  };
}

export async function getFavourites(): Promise<FavouritesCart | null> {
  const session = await getServerSession(authOptions);
  let favourites: FavouritesWithProducts | null = null;

  if (session) {
    favourites = await prisma.favourites.findFirst({
      where: { id: session.user.id },
      include: { items: { include: { product: true } } },
    });
  } else {
    const localCartId = cookies().get("localCartId")?.value;
    favourites = localCartId
      ? await prisma.favourites.findUnique({
          where: { id: localCartId },
          include: { items: { include: { product: true } } },
        })
      : null;
  }

  if (!favourites) {
    return null;
  }

  return {
    ...favourites,
    size: favourites.items.reduce((acc, item) => acc + item.quantity, 0),
    subtotal: favourites.items.reduce(
      (acc, item) => acc + item.quantity * item.product.price,
      0,
    ),
  };
}
