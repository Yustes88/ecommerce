"use server";

import {prisma} from "@/lib/db/prisma";
import { createCart, getCart } from "@/lib/db/cart";
import { revalidatePath } from "next/cache";
import { createFavourites, getFavourites } from "@/lib/db/favourites";

export async function incrementProductQuantity(productId: string) {
  const cart = (await getCart()) ?? (await createCart());

  const articleInCart = cart.items.find(item => item.productId === productId) 
  
  if(articleInCart) {
    await prisma.cart.update({
      where: {id: cart.id},
      data: {
        items: {
          update: {
            where: {id: articleInCart.id},
        data: {quantity: {increment: 1}}
          }
        }
      }
    })
  } else {
    await prisma.cart.update({
      where: {id: cart.id},
      data: {
        items: {
          create: {
            productId,
            quantity: 1
          }
        }
      }
    })
  }

  revalidatePath("/product/[id]", "page")
}

export async function updateFavourites(productId: string) {
  const favourites = (await getFavourites()) ?? (await createFavourites());

  const articleInCart = favourites.items.find(item => item.productId === productId) 
  
  if(articleInCart) {
    return;
  } else {
    await prisma.favourites.update({
      where: {id: favourites.id},
      data: {
        items: {
          create: {
            productId,
          }
        }
      }
    })
  }

  revalidatePath("/product/[id]", "page")
}

export async function deleteFavourites(productId: string) {
  const favourites = (await getFavourites()) ?? (await createFavourites());

  const articleInCart = favourites.items.find(item => item.productId === productId) 

  if (articleInCart) {
    await prisma.favourites.update({
      where: {id: favourites.id},
      data: {
        items: {
          delete: {id: articleInCart.id}
        }
      }
    })
  }
 

  revalidatePath("/product/[id]", "page")
}

export async function updateProductsLikedStatus(productId: string, liked: boolean) {
  revalidatePath("/product/[id]", "page")
  return prisma.product.update({
    where: {id: productId},
    data: {
      isLiked: !liked
    }
  });
  
}