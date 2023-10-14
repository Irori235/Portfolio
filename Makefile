build:
	docker build . -t portfolio

run:
	docker run -p 3000:3000 portfolio