USERNAME=paldrooler
IMAGE=product-view-angular

cd ../..

docker build -t $USERNAME/$IMAGE:latest -f build/docker/Dockerfile .
