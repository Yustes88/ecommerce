import {prisma} from "@/lib/db/prisma";

async function getFavourites(userId: string) {
    const favouriteLists = await prisma.favouriteList.findMany({
      where: {
        userId: userId,
      },
    });
  
    const favourites = [];
  
    for (const favouriteList of favouriteLists) {
      const favouriteItems = await prisma.favouriteItem.findMany({
        where: {
          favouriteListId: favouriteList.id,
        },
      });
  
      for (const favouriteItem of favouriteItems) {
        const product = await prisma.product.findUnique({
          where: {
            id: favouriteItem.productId,
          },
        });
  
        favourites.push({
          product,
          isLiked: favouriteItem.isLiked,
        });
      }
    }
  
    return favourites;
  }
  
