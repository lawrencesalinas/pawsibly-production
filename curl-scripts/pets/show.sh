#!/bin/bash

curl "http://localhost:8000/pets/${ID}/" \
  --include \
  --request GET \
  --header "Authorization: Token ${TOKEN}"

echo