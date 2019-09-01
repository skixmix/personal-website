#!/bin/bash

set -euo pipefail

docker build -t teach-me-to-code/teach-me-to-code:latest .
docker run \
  -it \
  --rm \
  --volume="$PWD:/srv/jekyll" \
  --volume="$PWD/vendor:/usr/local/bundle" \
  -p 4000:4000 \
  teach-me-to-code/teach-me-to-code:latest
