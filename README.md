# Project workflow
## 1) User-Level 
### 1. A user can browse all products without any login
### 2. To buy a certain product user must log on 
### 3. Sign Up is for those, who are new to application
### 4. At checkout page, by default product quantity is set to 1
### 5. When user confirms order, then admin places that order from his side 

## 2) Admin-Level (accessed by only owners and admins)
### 1. Admin can perform mainly 3 tasks -> 1. Add new product, 2. Delete Product, 3. Place Order
### 2. When admin place's order (In future-scope: we can notify user that his order is placed by email/sms on registered mail/mobile no)
### 3. Admin can not go directly to dashboard page or add_product page without login

# Instructions:

### Admin credentials:
#### `username: admin`
#### `password: admin`

### User credentials: (I have created mine, you can use that or else you can sign up also)
#### `mobile no: 9325851819`
#### `password: 1234` (NOTE: this password is set only for testing purpose, I've done modification -> now, password must be min of 8 characters)

# Installation: 

#### Navigate to frontend folder: `cd frontend`
#### Install node_modules using: `npm install`
#### after that use: `npm init`

##### same for backend

#### Navigate to frontend folder: `cd backend`
#### Install node_modules using: `npm install`
#### after that use: `npm init`


# Run Command: 

#### Navigate to frontend folder
#### To start the frontend, run the command: `npm run dev`

#### Navigate to backend folder
#### If you have `nodemon` installed globally, use: `nodemon app.js`
#### else, use: `node app.js`
