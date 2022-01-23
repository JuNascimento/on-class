#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["./OnClass.csproj", "."]
RUN dotnet restore "./OnClass.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "OnClass.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "OnClass.csproj" -c Release -o /app/publish

FROM base AS final

ARG PORT=25100
ENV PORT=${PORT}

ENV ASPNETCORE_URLS=http://+:${PORT}
EXPOSE ${PORT}

WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "OnClass.dll"]