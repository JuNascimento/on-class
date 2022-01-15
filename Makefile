client-docker-build: 
	cd client && docker build -t onclass:latest .

client-docker-run: 
	cd client && docker run -it -p 3000:3000 onclass

