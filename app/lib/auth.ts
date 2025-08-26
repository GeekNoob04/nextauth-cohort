import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
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
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || "",
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
    pages: {
        signIn: "/signin",
    }, 
};
