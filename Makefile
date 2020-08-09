install: install-deps

install-deps:
    npm ci

run:
    bin/nodejs-package.js 10

brain-games:
    node bin/brain-games.js

publish:
    npm publish --dry-run

lint:
    npx eslint .

lint-fix:
    npx eslint --fix .
