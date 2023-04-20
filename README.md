# First Step
1. Install Git Bash
2. git init
3. git add .
4. git commit -m "Initial Commit"
5. git branch -M main
6. git remote add origin https://github.com/sharjilansari/bookapp.git
7. git push -u origin main

# After that
1. git add .
2. git commit -m "Commit message"
3. git push origin main

# Backend Setup
1. Install node.js
2. npm init 
3. Install express, mongoose (npm i express mongoose)

# Setup Application
1. git clone "https://github.com/sharjilansari/bookapp"
2. Go inside backend directory and type npm i command
3. Run the application using node index.js

# API Endpoints
1. http://localhost:5000/getdata
2. http://localhost:5000/postdata
   {
    "email": "sharjil@gmail.com",
    "name": "Sharjil",
    "password": "123456778"
   }

# Postman
1. For GET API use GET from postman dropdown and add http://localhost:5000/getdata
2. For POST API use POST from postman dropdown and add http://localhost:5000/postdata URL and add data into body as a raw json