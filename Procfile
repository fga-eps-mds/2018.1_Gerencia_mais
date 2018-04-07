release: python manage.py makemigrations && python manage.py migrate
web: gunicorn leito_hospitalar.wsgi --log-file -
