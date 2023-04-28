clean:
	@go clean
	@git clean -Xf ./*

generate:
	@go run main.go

serve:
	@python3 -m http.server --directory ./dist