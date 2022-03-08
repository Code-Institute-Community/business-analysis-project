from flask import Flask, jsonify, request
from passlib.hash import pbkdf2_sha256
import uuid

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
        user['password'] = pbkdf2_sha256.encrypt(user['password'])
        
        return jsonify(user), 200
