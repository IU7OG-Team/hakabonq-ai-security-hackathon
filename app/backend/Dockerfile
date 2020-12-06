# hakabonq backend

FROM nikolaik/python-nodejs:python3.8-nodejs15
LABEL maintainer="hakabonq"

COPY requirements.txt /requirements.txt
RUN python -m pip install -r /requirements.txt

RUN mkdir /backend
COPY ./ /backend
WORKDIR /backend

RUN npm install