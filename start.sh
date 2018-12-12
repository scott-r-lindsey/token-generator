#!/bin/bash

#------------------------------------------------------------------------------
set -o pipefail
set -e
#------------------------------------------------------------------------------

__here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd $__here/docker
source $__here/config.sh


echo "-------------------------------------------------------------------------------"
echo ""
echo -n "  This app should be available at "
echo "http://localhost:$APP_PORT/"
echo ""
echo " Access MySQL:"
echo ""
echo "  mysql -h 127.0.0.1 -P $MYSQL_PORT -u challenge --password=challenge challenge"
echo ""
echo " To shell into the running php instance:"
echo ""
echo "  docker exec -u node -it challenge-node-container bash"
echo ""
echo "-------------------------------------------------------------------------------"


docker-compose --project-name=scott_lindsey_challenge up
