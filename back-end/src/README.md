- Executar no docker:
  ```
    docker build -f "OnClass/Dockerfile" -t onclassbackend ./OnClass
    docker run -it --rm -p 25100:25100 --name onclasscsharp onclassbackend
  ```