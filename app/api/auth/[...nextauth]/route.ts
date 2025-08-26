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
                return {
                    id: "user 1",
                };
            },
        }),
    ],
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
