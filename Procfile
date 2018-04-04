release: npm run build && python manage.py migrate
web: gunicorn leito_hospitalar.wsgi --log-file -
