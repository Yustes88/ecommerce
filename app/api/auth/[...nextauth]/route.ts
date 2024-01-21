import NextAuth from "next-auth/next";
import { mergeAnonymesCartIntoUserCart } from "@/lib/db/cart";
import { env } from "@/lib/env";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import {prisma} from "@/lib/db/prisma";


const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma as PrismaClient) as Adapter, 
    providers: [
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        session({session, user}) {
            session.user.id = user.id;
            return session;
        }
    },

    events: {
        async signIn({user}) {
            await mergeAnonymesCartIntoUserCart(user.id)
        }
    }
}


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions }