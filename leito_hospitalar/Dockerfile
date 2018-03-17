
FROM python:3.6.4

WORKDIR /code

COPY requirements.txt .

RUN pip install -r requirements.txt

CMD python manage.py runserver 0.0.0.0:$PORT

#RUN npm install react

#RUN apt-get update


