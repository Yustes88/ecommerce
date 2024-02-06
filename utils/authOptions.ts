import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";

import { PrismaAdapter } from "@auth/prisma-adapter";

import { mergeAnonymesCartIntoUserCart } from "@/lib/db/cart";
import { env } from "@/lib/env";
import { prisma } from "@/lib/db/prisma";

import { PrismaClient } from "@prisma/client";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma as PrismaClient) as Adapter,
    providers: [
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        session({ session, user }) {
            session.user.id = user.id;
            return session;
        }
    },

    events: {
        async signIn({ user }) {
            await mergeAnonymesCartIntoUserCart(user.id)
        }
    }
}
