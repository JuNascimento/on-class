#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base

ENV VOLUME_PATH=app/var/data/onclass
VOLUME ${VOLUME_PATH}

RUN mkdir -p ./${VOLUME_PATH}

RUN useradd -ms /bin/bash userdockeronclass 

RUN chown -R userdockeronclass ./${VOLUME_PATH}

USER userdockeronclass

WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY . .
COPY ["OnClass.API/OnClass.API.csproj", "OnClass.API/"]
RUN dotnet restore "OnClass.API/OnClass.API.csproj"
WORKDIR "/src/OnClass.API"
RUN dotnet build "OnClass.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "OnClass.API.csproj" -c Release -o /app/publish

FROM base AS final

ARG PORT=25100
ENV PORT=${PORT}

ENV ASPNETCORE_URLS=http://+:${PORT}
EXPOSE ${PORT}

ENV CURRENT_ENV=CONTAINER

WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "OnClass.API.dll"]