from flask import Flask, jsonify, request
import uuid

class User:
    
    def register(self):
        
        user = {
			"_id": uuid.uuid4().hex,
			"username": request.form.get("username"),
   			"email": request.form.get("email"),
      		"password": request.form.get("password")
		}
        
        return jsonify(user), 200
