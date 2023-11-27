import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import prisma from "@/lib/prisma";
import EmailProvider from "next-auth/providers/email";
import { CustomsendVerificationRequest } from "@/lib/signinemail";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";

// import client from "@sendgrid/client";

// client.setApiKey(process.env.SENDGRID_API_KEY as string);

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER || "",
      from: process.env.EMAIL_FROM || "",
      sendVerificationRequest({ identifier, url, provider }) {
        CustomsendVerificationRequest({ identifier, url, provider });
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      allowDangerousEmailAccountLinking: true,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
      authorization: { params: { scope: "profile email openid" } },
      issuer: "https://www.linkedin.com",
      jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
      async profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          firstname: profile.given_name,
          lastname: profile.family_name,
          email: profile.email,
        };
      },
      allowDangerousEmailAccountLinking: true,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/verify",
    // newUser: "/welcome", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session({
      session,
      user,
    }: {
      session: any | undefined;
      user: any | undefined;
    }) {
      session.user.id = user.id;

      // const dbUser = await prisma.user.findFirst({
      //   where: {
      //     id: user.id,
      //   },
      // });

      // session.user.isSubscribed = dbUser?.isSubscribed;
      // session.user.stripeCustomerId = dbUser?.stripeCustomerId;

      return session;
    },
    async redirect({
      url,
      baseUrl,
    }: {
      url: any | undefined;
      baseUrl: any | undefined;
    }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  // events: {
  //   createUser: async ({ user }: { user: any | undefined }) => {
  //     // Create stripe API client using the secret key env variable
  //     const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  //       apiVersion: "2022-11-15",
  //     });

  //     // Create a stripe customer for the user with their email address
  //     await stripe.customers
  //       .create({
  //         email: user.email!,
  //       })
  //       .then(async (customer) => {
  //         // Use the Prisma Client to update the user in the database with their new Stripe customer ID
  //         return prisma.user.update({
  //           where: { id: user.id },
  //           data: {
  //             stripeCustomerId: customer.id,
  //           },
  //         });
  //       });

  //     // Add the user to email list
  //     client
  //       .request({
  //         url: `/v3/marketing/contacts`,
  //         method: "PUT",
  //         body: {
  //           contacts: [
  //             {
  //               email: user.email,
  //             },
  //           ],
  //         },
  //       })
  //       // eslint-disable-next-line no-unused-vars
  //       .then(([response, body]) => {
  //         console.log(response.statusCode);
  //         console.log(response.body);
  //       })
  //       .catch((error: any) => {
  //         console.error(error);
  //       });

  //     // // Track the referral with Reflio
  //     // await Reflio.signup(user.email);
  //   },
  // },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
