# Dockerfile
FROM python:3.9-slim
WORKDIR /feature-extractors
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
EXPOSE 5000
COPY . .