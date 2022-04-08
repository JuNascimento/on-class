- Executar no docker:
  ```
    docker build -f dockerfile-local.dockerfile -t onclassbackend .
    docker run --network oneclassnetwork -it --rm --env-file "./OnClass.API/configmap-dev.env" -p 25100:25100 -v "${PWD}/OnClass.API/var/data/onclass:/OnClass.API/var/data/onclass" --name onclasscsharp onclassbackend
  ```