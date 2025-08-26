import { NEXT_AUTH } from "@/app/lib/auth";
import NextAuth from "next-auth";
const handler = NextAuth(NEXT_AUTH);
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
