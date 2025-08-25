import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        message: "System hang",
    });
}
export function POST() {
    return NextResponse.json({
        message: "systemm post",
    });
}
