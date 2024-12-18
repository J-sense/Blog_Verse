import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });
export default {
  //   development: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  //   default_password: process.env.DEFAULT_PASSWORD,
  //   bcrypt_salt: process.env.BCRYPT_SALT,
  //   jwt_access_secret: process.env.JWT_ACCESS_SECRET,
};