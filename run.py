import os
if os.path.exists("env.py"):
    import env

from app import create_app


if __name__ == "__main__":
    app = create_app()
    app.run(host=os.environ.get("IP", "0.0.0.0"),
            port=int(os.environ.get("PORT", "8000")),
            debug=os.environ.get('DEBUG'))
