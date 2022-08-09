import argparse
import os
import re

from pymongo import MongoClient
from werkzeug.security import generate_password_hash

CLIENT = MongoClient(os.environ.get('MONGO_HOST'))
DB = CLIENT[os.environ.get('MONGO_HOST', 'db')]


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("--email", help="Specify a email/username", required=True)
    parser.add_argument("--password", help="Specify a password", required=True)
    parser.add_argument("--is_admin", help="Specify if user is admin (True/False)", required=True)
    args = parser.parse_args()

    if not re.search(r'^\S+@\S+\.\S+$', args.email):
        raise Exception('Please enter a valid email address.')

    user_exists = DB.users.find_one({'email': args.email})
    if user_exists:
        raise Exception('User already exists.')

    user = DB.users.insert_one({
        'username': args.email,
        'email': args.email,
        'password': generate_password_hash(args.password),
        'is_active': True,
        'is_admin': args.is_admin == 'True',
        'favourites': []
    })

    print(f'User {args.email} created successfully.')
