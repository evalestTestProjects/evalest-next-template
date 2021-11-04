import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Email({
      id: 'passwordless-login',
      server: {
        host: 'smtp.sendgrid.net',
        port: '587',
        auth: {
          user: 'apiKey',
          pass: process.env.SENDGRID_API_KEY
        }
      },
      from: "tech+evalest@evalest.com",
    }),
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN
    }),
    Providers.Facebook({
      id: 'facebook-login',
      clientId: process.env.FB_CLIENT_ID,
      clientSecret: process.env.FB_CLIENT_SECRET
    }),
    Providers.Credentials({
      id: 'credentials-login',
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = { email: credentials.email }; // TODO: register if not yet & get user from DB
        if (user) {
          // Any user object returned here will be saved in the JSON Web Token
          return user
        } else {
          return null
        }
      }
    })
  ],
  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    jwt: true,
    encryption: true,
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60, // 30 hours
    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours
  },
  events: {
    async signIn(message) { console.log('ev signIn', message); },
    async signOut(message) { console.log('ev signOut', message); },
    async createUser(message) { console.log('ev createUser', message); },
    async linkAccount(message) { console.log('ev linkAccount', message); },
    async session(message) { console.log('ev session', message); },
    async error(message) { console.log('ev error', message); }
  },
  database: {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true
  }
})