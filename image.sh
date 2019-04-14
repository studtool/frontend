#!/usr/bin/env bash

command="$1"

app="studtool"
service=$(node -pe "require('./package.json').name")
version=$(node -pe "require('./package.json').version")
image="$app/$service:$version"

if [[ "$command" = "build" ]]; then
  docker build -t "$image" .
elif [[ "$command" = "push" ]]; then
  echo "${DOCKER_PASSWORD}" | docker login -u "${DOCKER_USERNAME}" --password-stdin \
    && docker push "$image"
elif [[ "$command" = "remove" ]]; then
  docker rmi "$image"
else
  echo "command expected 'build/push/remove'"
  exit -1
fi
