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

# create collection from mongodb atlas, then

`npx prisma db push`

Found this error

Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": MongoDB database "test" at "netflix.hgd1h7d.mongodb.net"
Error: MongoDB error
Kind: I/O error: received fatal alert: InternalError, labels: {"RetryableWriteError"}
0: schema_core::commands::schema_push::Calculate `from`
at schema-engine/core/src/commands/schema_push.rs:29
1: schema_core::state::SchemaPush
at schema-engine/core/src/state.rs:436

Fixed it by allowing access from any IP.
Must add the database name (not available after the / )

# install some more packages for credential authentication

`npm install next-auth`
`npm install bcrypt` & its type

# for github and google login install

`npm install @next-auth/prisma-adapter`

add id and secret for github and google in .env file
-> From github developer settings > OAuth Apps

# For google login

    1.From Google developer console > create project > go to the project
    2. Seach APIs & Services > OAuth consent screen > Select external > Add info > continue
    3. Go to credentials > create one using OAuth client ID

    Note: In the credentials -  `Authorized redirect URIs` fiels type `http://localhost:3000/api/auth/callback/google` (Black box)
    Store client ID and client secret in env file

`Problem -4 account created in atlas but no new user`
