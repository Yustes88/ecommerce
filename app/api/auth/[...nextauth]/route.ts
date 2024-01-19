import { mergeAnonymesCartIntoUserCart } from "@/lib/db/cart";
import { env } from "@/lib/env";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { Adapter } from "next-auth/adapters";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";



const handler = NextAuth({
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
});

export { handler as GET, handler as POST }