# esgi-nestjs


### Installation

You need to run those two commands to install the project
```bash
docker compose up -d 
```
```bash
docker compose exec node npx prisma migrate dev --name init
```
```bash
docker compose exec node npx prisma generate
```

You need to add a .env file with the following content
```text
DATABASE_URL=""
```
