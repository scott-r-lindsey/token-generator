#!/bin/bash

#------------------------------------------------------------------------------
set -o pipefail
set -e
#------------------------------------------------------------------------------

__here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

docker exec -u node -it challenge-node-container /bin/bash -c \
    "NODE_ENV=test DB_HOST=mysql-test npm test"

