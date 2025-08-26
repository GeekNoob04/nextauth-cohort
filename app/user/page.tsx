import { Appbar } from "@/components/Appbar";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/auth";

export default async function userPage() {
    const session = await getServerSession(NEXT_AUTH);
    return (
        <div>
            {/* client side */}
            <Appbar />
            {/* server side */}
            {JSON.stringify(session)}
        </div>
    );
}
