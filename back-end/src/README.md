- Executar no docker:
  ```
    docker build -f "OnClass.API/Dockerfile" -t onclassbackend .
    docker run -it --rm -p 25100:25100 --name onclasscsharp onclassbackend
  ```