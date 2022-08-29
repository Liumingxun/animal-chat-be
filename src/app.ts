import express from 'express'
import cors from 'cors'
import type { Application } from 'express'
const app: Application = express()

app.use(cors({
  origin: /bing.com$/,
}))

if (import.meta.env.PROD)
  app.listen(3000)

export const viteNodeApp = app
