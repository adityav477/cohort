docker-compose up -d
echo 'Waiting for database to start'
./scripts/wait-for-it.sh "postgresql://postgres:postgres@localhost:5432/postgres"
npx prisma migrate dev --name start
npm run test
docker-compose down
