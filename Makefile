clean:
	@go clean
	@git clean -Xf ./*

build:
	@hugo --gc --minify

serve:
	@hugo server --disableFastRender

production: build
	@python3 -m http.server --directory ./public