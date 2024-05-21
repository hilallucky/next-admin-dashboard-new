const fs = require('fs');
const path = require('path');

const schemaDir = path.join(__dirname, 'schema');
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
