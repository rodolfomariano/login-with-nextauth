import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import { session } from 'next-auth/client'
import Providers from 'next-auth/providers'





const options = {
  // Configure one or more authentication providers

  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'read.user'
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    })
    // ...add more providers here
  ],
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET
  }

  // callbacks: {
  //   async redirect(url, baseUrl) {
  //     url = `${process.env.NEXTAUTH_URL}/dashboard`
  //     baseUrl = `${process.env.NEXTAUTH_URL}`

  //     return url.startsWith(baseUrl)
  //     ? url
  //     : baseUrl

  //   }
  // }

  

  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)