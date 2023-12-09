# Create .env File and Include Below Variables
PORT = 8000
DATABASE_URL = mongodb://localhost:27017/ejs

## EJS

### 1. Syntax For Include File
`<%- include('../partials/head.ejs'); %>`

### 2. Syntax For Code
`<% if (message) { %>`
`<% } %>`

### 3. Syntax For Variable Value
`<%= message %>`

### 4. Syntax For Passing Variable And Check Value
`res.render("pages/homepage", { message: "hi javascript developer" });`

`<%= typeof message !== 'undefined' ? message : '' %>`