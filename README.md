# Installation modifications

    1. install next 12 `npx create-next-app@12 --typescript`
        a. `God knows (https://github.com/vercel/next.js/discussions/35794) why next version still shows 14 in package.json`
    2.  the delete node_modules and update package.json next version to 12.2.2

# install tailwind, postcss, autofixer and make adjustment from the following link

    `https://tailwindcss.com/docs/guides/nextjs#:~:text=cd%20my%2Dproject-,Install%20Tailwind%20CSS,-Install%20tailwindcss%20and`

# install prisma (add prisma extension)

(https://www.prisma.io/docs/getting-started)
`npm install -D prisma`
`npx prisma init`

steps recommended post installing prisna:

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

`npm install @prisma/client` - to interact with database

# do a lot for mongodb (problem)
