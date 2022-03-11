from flask import Flask, jsonify, request
import uuid
# Import DB
client = pymongo.MongoClient("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.2.3")
db = client.test

class User:
    
    def register(self):
        print(request.form)
        
        # Create the user object
        user = {
			"_id": uuid.uuid4().hex,
			"username": request.form.get("username"),
   			"email": request.form.get("email"),
      		"password": request.form.get("password")
		}
        
        # Encrypt the password
        # user['password'] = pbkdf2_sha256.encrypt(user['password'])
        
        # Check for existing email address
        if db.users.find_one({"email": user['email']}):
            return jsonify({"error": "Email address already exists"}), 400
        
        # Insert user in db
        db.users.insert_one(user)
        
        return jsonify(user), 200
