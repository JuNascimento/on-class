client-run:
	cd client && yarn start

client-setup:
	clear && cd client && yarn

client-test-watch:
	clear && cd client && yarn test-watch

client-test:
	cd client && yarn test

client-lint:
	cd client && yarn lint

client-fix-lint: 
	cd client && yarn fix-lint

client-docker-build: 
	cd client && docker build -t onclass:latest .

client-docker-run: 
	cd client && docker run -it -p 3000:3000 onclass
