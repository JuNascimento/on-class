###Limpar o banco já criado
```
docker run --network oneclassnetwork --rm -v "${PWD}/sql:/flyway/sql" -v "${PWD}/config:/flyway/conf" --name flywayonclass flyway/flyway clean
```

###Rodar scripts
```
docker run --network oneclassnetwork --rm -v "${PWD}/sql:/flyway/sql" -v "${PWD}/config:/flyway/conf" --name flywayonclass flyway/flyway migrate
```