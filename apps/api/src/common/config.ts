import dotenv from 'dotenv'
import { existsSync } from 'fs'

dotenv.config({ path: existsSync("../../.env") ? "../../.env" : "../../../.env" })

export const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 9000
export const origins = process.env.ORIGINS?.split(',') as unknown as string
export const mongoURL = process.env.MONGO_URL as unknown as string