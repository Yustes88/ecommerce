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
};

export async function createFavourites() {
  const session = await getServerSession(authOptions);

  let newFavourites: Favourites;
  if (session) {
    newFavourites = await prisma.favourites.create({
      data: { id: session.user.id },
    });
  } else {
    newFavourites = await prisma.favourites.create({
      data: {},
    });
    cookies().set("localFavouritesId", newFavourites.id);
  }

  return {
    ...newFavourites,
    items: [],
    size: 0,
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
    const localCartId = cookies().get("localFavouritesId")?.value;
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
    size: favourites.items.reduce((acc, item) => acc + 1, 0),
  };
}
