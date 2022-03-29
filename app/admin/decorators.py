from functools import wraps
from flask import request, redirect, url_for
from flask_login import current_user


def admin_access(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not current_user.is_admin:
            return redirect(url_for('auth.login', next=request.url))
        return f(*args, **kwargs)
    return decorated_function
