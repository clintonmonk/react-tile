.DEFAULT_GOAL := help

.PHONY: help
help: ## Display makefile target descriptions.
	@printf -- "\nreact-tile\n\n"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

.PHONY: ci-install-deps
ci-install-deps: ## Install all application dependencies for CI.
	cd applications/react-tile-frontend && npm ci

.PHONY: lint
lint: ## Lint all applications.
	cd applications/react-tile-frontend && npm run lint

.PHONY: build
build: ## Build all applications.
	cd applications/react-tile-frontend && npm run build

.PHONY: test
test: ## Test all applications.
	cd applications/react-tile-frontend && npm run test
