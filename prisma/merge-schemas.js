import fs from "fs"
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// console.log(__dirname);

const schemaDir = path.join(__dirname, 'schemas');
const schemaFiles = fs
  .readdirSync(schemaDir)
  .filter((file) => file.endsWith('.prisma'));

let mergedSchema = `
generator client {
  provider = "prisma-client-js"
  output   = "./generated/client"
}

datasource db {
  provider = "mysql"
  url      = env("MYSQL_DATABASE_URL")
}
`;

for (const file of schemaFiles) {
  const schema = fs.readFileSync(path.join(schemaDir, file), 'utf8');
  mergedSchema += '\n' + schema + '\n';
}

fs.writeFileSync(path.join(__dirname, 'schema.prisma'), mergedSchema);

console.log('Schemas merged into schema.prisma');
