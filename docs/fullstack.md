**github:**  
[Create a New Github Repo](https://github.com/new)

**Setup:**

```
mkdir REPO_NAME
cd REPO_NAME

echo "# REPO_NAME” >> README.md
git init
git add .
git commit -m “init commit"
git remote add origin https://github.com/YOUR-NAME/REPO_NAME.git
git push -u origin master

npm init
npm install concurrently
touch .gitignore

```

**@APP_NAME/.gitignore**

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/backend/node_modules
/frontend/node_modules
/backend/.pnp
/frontend/.pnp
.pnp.js

# testing
/backend/coverage
/frontend/coverage

# production
/backend/build
/frontend/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

```

**@APP_NAME/package.json**  
FIND: `"test": "echo \"Error: no test specified\" && exit 1"`  
REPLACE: `"test": "echo \"Error: no test specified\" && exit 1", "start": "concurrently --kill-others \"cd frontend && npm start\" \"cd backend && npm start\""`

**Backend Setup:**

```
express backend
npm install --prefix ./backend body-parser pg-promise supervisor
cd backend/
npm install

```

**@APP_NAME/backend/bin/www**  
FIND: `var port = normalizePort(process.env.PORT || '3000');`  
REPLACE: `var port = normalizePort(process.env.PORT || '3100');`

**@APP_NAME/backend/package.json**  
FIND: `"start": "node ./bin/www"`  
REPLACE: `"start": "supervisor ./bin/www"`

**Frontend Setup:**

```
create-react-app frontend
npm install --prefix ./frontend axios

```

**@APP_NAME/frontend/package.json**  
FIND: `"browserslist": [ ">0.2%", "not dead", "not ie <= 11", "not op_mini all" ]`  
REPLACE: `"browserslist": [ ">0.2%", "not dead", "not ie <= 11", "not op_mini all" ], "proxy": "http://localhost:3100"`

**_RUN APP_**  
`npm start`

**_frontend@http://localhost:3000/_**  
**_backend@http://localhost:3100/_**
