import CredentialsProvider from "next-auth/providers/credentials";
export const NEXT_AUTH = {
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
            }
            return session;
        },
    },
};
