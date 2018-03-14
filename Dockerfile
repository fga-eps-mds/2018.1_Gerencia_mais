FROM python:3.6.4

#RUN apt-get update

COPY requirements.txt .
RUN pip install -r requirements.txt 


