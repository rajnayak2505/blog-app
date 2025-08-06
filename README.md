# 📝 Blog App

A full-stack blogging platform built with Next.js, MongoDB, and NextAuth that allows users to sign up, log in, and post blogs. Blogs are displayed on the homepage, and user authentication ensures secure access to post content.
🚀 Features

    🔐 Authentication with NextAuth (Credentials Provider)

        User Signup, Login, and Logout

    📝 Post Blogs

        Authenticated users can create new blog posts

    👀 View Blogs

        All blogs are visible on the home page

    ⚙️ Protected Routes

        Middleware is used to restrict blog-posting routes to logged-in users only

    🗃️ MongoDB Integration

        User and Blog data are stored using MongoDB

    📄 Schema Models

        User Schema: Stores user data

        Blog Schema: Stores blog posts

        Email Schema (coming soon): For blog subscription emails

🧩 Tech Stack

    Frontend: Next.js 14 (App Router)

    Backend: Node.js (API routes in Next.js)

    Database: MongoDB with Mongoose ODM

    Authentication: NextAuth.js (Credentials Provider)

    Styling: Tailwind CSS

Install dependencies:

npm install

Run the development server:

npm run dev

📌 Usage

    Signup or login from the UI

    Visit /admin/addBlog to post a blog (only accessible if logged in)

    Blogs are shown on the home page



✅ Todo

Email Subscription using Email Model

Google Login Provider integration

User-specific dashboard and blog management

Author field dynamically set from logged-in user