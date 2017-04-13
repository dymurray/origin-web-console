# Ensure GOPATH is set and configured properly
```
mkdir -p $GOPATH/src/github.com/openshift
mkdir -p $GOPATH/src/github.com/cfchase
```

# Clone appropiate repos
```
git clone https://www.github.com/openshift/origin.git $GOPATH/src/github.com/openshift/origin
git clone https://www.github.com/cfchase/origin-web-console.git $GOPATH/src/github.com/cfchase/origin-web-console
```

# Environment variables for build process
```
export GIT_REF=origin/build-demo
export CONSOLE_REPO_PATH=$GOPATH/src/github.com/cfchase/origin-web-console
```

# This is assuming that assets are already built (which Chris has been doing when committing to his branch). If not, need to do a 'grunt build' in his repo first
```
cd $GOPATH/src/github.com/openshift/origin
./hack/vendor-console.sh
```

# Need to commit here or build process won't pick up changes
```
git add pkg/assets
git commit -m "Added Chris' assets to origin"
```

# Build binaries
```
make release
```

# Build images
```
./hack/build-images
```

# Push images
```
docker tag openshift/origin docker.io/dymurray/origin
docker push docker.io/dymurray/origin
```
