ARG IMG_BASE=mcr.microsoft.com/dotnet/aspnet:6.0
ARG IMG_BUILD=mcr.microsoft.com/dotnet/sdk:6.0

FROM ${IMG_BASE} AS base
WORKDIR /app



FROM ${IMG_BUILD} AS build
WORKDIR /src
COPY . .

COPY ["OnClassAPI/OnClassAPI.csproj", "OnClassAPI/"]
RUN dotnet restore "OnClassAPI/OnClassAPI.csproj"
WORKDIR "/src/OnClassAPI"
RUN dotnet build "OnClassAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "OnClassAPI.csproj" -c Release -o /app/publish


FROM base AS final

ARG PORT=25100
ENV PORT=${PORT}


ENV Logging__Console__FormatterName=simple
ARG Logging__Console__FormatterName=${Logging__Console__FormatterName}
ENV ASPNETCORE_URLS=http://+:${PORT}

EXPOSE ${PORT} 
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "OnClassAPI.dll"]