import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: {
                    label: "username",
                    type: "text",
                    placeholder: "email",
                },
                password: {
                    label: "password",
                    type: "password",
                    placeholder: "password",
                },
            },
            async authorize(credentials: any) {
                console.log(credentials);
                return {
                    id: "user 1",
                    name: "Harshit Budhraja",
                    email: "harshitbudhraja0@gmail.com",
                };
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        signIn: ({ user }) => {
            if (user.email == "harshitbok45@gmail.com") {
                return false;
            }
            return true;
        },
        jwt: ({ token, user }) => {
            console.log(token);
            return token;
        },
        session: ({ session, token, user }) => {
            if (session && session.user) {
                session.user.id = token.sub;
                return session;
            }
        },
    },
});
export const GET = handler;
export const POST = handler;
// import { NextRequest, NextResponse } from "next/server";

// export function GET(
//     req: NextRequest,
//     {
//         params,
//     }: {
//         params: {
//             authRoutes: string[];
//         };
//     }
// ) {
//     console.log(params);
//     return NextResponse.json({
//         message: "System hang",
//     });
// }
// // or
// // export function GET(req: NextRequest, arg: any) {
// //     console.log(arg.params.authRoutes);
// //     return NextResponse.json({
// //         message: "System hang",
// //     });
// // }
// export function POST() {
//     return NextResponse.json({
//         message: "systemm post",
//     });
// }
