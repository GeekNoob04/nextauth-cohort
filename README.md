# NextAuth Cohort Project 🚀

This project is a Next.js application that implements user authentication using NextAuth.js. It provides a basic setup for handling user sign-in and sign-out with multiple providers, including email/password, Google, and GitHub. It also includes basic session management and API endpoints for retrieving user information.

## 🚀 Key Features

- **Authentication:** Implements user authentication using NextAuth.js with multiple providers.
- **Session Management:** Manages user sessions using the `SessionProvider` from `next-auth/react`.
- **Multiple Authentication Providers:** Supports email/password, Google, and GitHub authentication.
- **Customizable Sign-in Page:** Provides a customizable sign-in page with options for different authentication providers.
- **API Endpoint for User Information:** Includes an API endpoint for retrieving the current user's session information.
- **Theming:** Uses CSS variables and Tailwind CSS for theming and customization.
- **Typescript:** Uses Typescript for type safety.
- **ESLint:** Uses ESLint for code linting.

## 🛠️ Tech Stack

| Category    | Technology          | Description                                                                 |
|-------------|-----------------------|-----------------------------------------------------------------------------|
| Frontend    | React               | JavaScript library for building user interfaces                               |
|             | Next.js             | React framework for building server-rendered and statically generated apps   |
| Authentication| NextAuth.js         | Authentication library for Next.js                                          |
| Styling     | Tailwind CSS        | Utility-first CSS framework                                                 |
|             | PostCSS             | Tool for transforming CSS with JavaScript                                     |
| Language    | TypeScript          | Superset of JavaScript that adds static typing                               |
| Linting     | ESLint              | JavaScript linter for enforcing code style and quality                       |
| Build Tools | npm/yarn/pnpm/bun   | Package managers for managing project dependencies                            |

## 📦 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun
- Google and GitHub developer accounts (if you want to use Google and GitHub authentication)

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/GeekNoob04/nextauth-cohort
    cd nextauth-cohort
    ```

2.  Install dependencies using your preferred package manager:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  Configure environment variables:

    Create a `.env.local` file in the root directory and add the following environment variables:

    ```
    GOOGLE_CLIENT_ID=<your_google_client_id>
    GOOGLE_CLIENT_SECRET=<your_google_client_secret>
    GITHUB_CLIENT_ID=<your_github_client_id>
    GITHUB_CLIENT_SECRET=<your_github_client_secret>
    NEXTAUTH_SECRET=<a_random_secret_string>
    NEXTAUTH_URL=http://localhost:3000 # or your deployed URL
    ```

    **Note:** Replace `<your_google_client_id>`, `<your_google_client_secret>`, `<your_github_client_id>`, and `<your_github_client_secret>` with your actual Google and GitHub client IDs and secrets. Generate a random string for `NEXTAUTH_SECRET`.

### Running Locally

1.  Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

2.  Open your browser and navigate to `http://localhost:3000`.

## 💻 Usage

The application provides a basic UI with sign-in and sign-out buttons. You can use the different authentication providers to sign in and access user-specific content.

-   **Sign-in:** Click the "Sign in" button to initiate the sign-in process. You can choose between email/password, Google, or GitHub authentication.
-   **Sign-out:** Click the "Sign out" button to sign out of the application.
-   **User Information:** The application displays the current user's session information as a JSON string. You can also access the user information via the `/api/user` API endpoint.

## 📂 Project Structure

```
nextauth-cohort/
├── app/
│   ├── api/
│   │   └── user/
│   │       └── page.tsx
│   ├── lib/
│   │   └── auth.ts
│   ├── signin/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
├── components/
│   └── Appbar.tsx
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## 📬 Contact

If you have any questions or suggestions, feel free to contact me at [harshitbudhraja0@gmail.com](mailto:harshitbudhraja0@gmail.com).

## 💖 Thanks Message

Thanks for checking out this project! I hope it helps you get started with NextAuth.js and user authentication in your Next.js applications.

This README is written by [readme.ai](https://readme-generator-phi.vercel.app/).
