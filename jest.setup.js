require('dotenv').config({ path: '.env.test' });

// Safety guard: never let a test run touch the real databases.
const pgName = process.env.DB_DATABASE || '';
const mongoName = process.env.MONGO_DB_NAME || '';

if (!pgName.includes('test') || !mongoName.includes('test')) {
  throw new Error(
    `Refusing to run tests: DB_DATABASE="${pgName}" and MONGO_DB_NAME="${mongoName}". ` +
    'Both must be set in .env.test and both names must contain "test".'
  );
}