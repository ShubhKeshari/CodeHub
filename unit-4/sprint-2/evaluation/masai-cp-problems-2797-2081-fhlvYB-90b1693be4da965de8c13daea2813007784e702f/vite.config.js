import dotenv from "dotenv";
dotenv.config();

export default {
  envPrefix: 'HCJ',
  server: {
    port: process.env.REACT_APP_FRONTEND_SERVER_PORT,
    strictPort: true
  }
}