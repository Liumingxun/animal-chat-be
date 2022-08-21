import express from 'express'
import type { Express, Request, Response, Application} from 'express'
const app: Application = express();

app.get('/', (req: Request, res: Response, next) => {
  res.send('test')
})

if (import.meta.env.PROD)
  app.listen(3030);

export const viteNodeApp = app;
