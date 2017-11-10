# Docker build options

## Overview

A directory full of handy docker scripts to execute building, composing and releasing through docker.  Pushed to a subdir to try to keep the source unpoluted with docker implementation coupling.

## files

* ```Dockerfile``` - a standard dockerfile that builds the Angular app and exposes it on 8080
* ```docker-compose.yml``` - a dockercompose file that stands up a View, Rest Service and MongoDB to provide a 3-tier stack.  (see caveats)
* ```docker-build.sh``` - a shell script to build the docker image for convenience and to be called by the docker-release.sh
* ```docker-release.sh``` - a shell script to release the docker image locally.  Creates a Versioned image and updates ```latest```

## Docker Integration Options

### Stand Alone Docker

You can spin up a docker container by executing the docker build in the root directory that has no datasources attached and fails gracefully.

```shell
docker build -t product-view-angular:latest -f build/docker/Dockerfile .
```

### part of a Docker-Compose

A docker compose file has been included that expects to find:

* A docker image in the local repo for ```paldrooler/product-service``` (not on dockerhub)
* Access to docker hub to be able to pull the MongoDB image (on dockerhub)
