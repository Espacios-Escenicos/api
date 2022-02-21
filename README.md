# Project with Nest JS, MySQL and Docker

## Environments

**Port for docker MySQL**

- _MYSQL_PORT=_

**Password for database vencejos**

- _MYSQL_PASSWORD=_

**Port for docker nestjs**

- _NEST_PORT=_

**URL for connection to database**

- _DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"_

**Prefix to router**

- _PREFIX=api_

## Migrations

**Execute migrations**

```
> $ npx prisma migrate dev --name init
```

**Execute migration by name**

```
> $ npx prisma migrate dev
```

**Then insert the name of the migration**

**Run the following command after making a change to the model**

```
> $ npx prisma generate
```

## Colaborators

[<img align="left" alt="02archie | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin_carlos] [<img align="left" alt="02archie | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/github.svg" />][github_carlos] [<img aling="left" alt="02archie" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/telegram.svg" />][telegram_carlos]

_Carlos Cendejas Barbosa_

[<img align="left" alt="02archie | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin_andres] [<img align="left" alt="02archie | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/github.svg" />][github_andres] [<img aling="left" alt="02archie" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/telegram.svg" />][telegram_andres]

_Andres Marquez Trujillo_

[linkedin_carlos]: https://www.linkedin.com/in/cbarbosa02
[github_carlos]: https://github.com/02archie
[telegram_carlos]: https://t.me/cbchar
[linkedin_andres]: https://www.linkedin.com/in/andres-marquez-trujillo-5964211b0/
[github_andres]: https://github.com/Andres-Dead
[telegram_andres]: https://t.me//Dead_Man01
