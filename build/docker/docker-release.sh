set -ex

USERNAME=paldrooler
IMAGE=product-view-angular

git pull

docker run --rm -v "$PWD":/app paldrooler/product-view-angular patch

version=`cat ../../VERSION`

./docker-build.sh

git add -A
git commit -m "version $version"
git tag -a "$version" -m "version $version"
git push
git push --tags

docker tag $USERNAME/$IMAGE:latest $USERNAME/$IMAGE:$version