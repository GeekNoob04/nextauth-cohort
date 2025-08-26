import { Appbar } from "@/components/Appbar";
import { getServerSession } from "next-auth";

export default async function userPage() {
    const session = await getServerSession();
    return (
        <div>
            {/* client side */}
            <Appbar />
            {/* server side */}
            {JSON.stringify(session)}
        </div>
    );
}
