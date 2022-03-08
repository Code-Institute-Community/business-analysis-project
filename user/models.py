from flask import Flask, jsonify, request


class User:
    
    def register(self):
        
        user = {
			"_id": "",
			"username": request.form.get("username"),
   			"email": request.form.get("email"),
      		"password": request.form.get("password")
		}
        
        return jsonify(user), 200
