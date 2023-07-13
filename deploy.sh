#!.bin/bash
LOCAL_PATH=$(pwd)
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'
function bildFrontend {
  printf "${RED}Start FRONTEND building...${NC}\n";
  cd "$LOCAL_PATH/frontend" && npm run build
  printf "${BLUE}End FRONTEND building${NC}\n";
}

function buildBackend {
  printf "${RED}Start BACKEND building...${NC}\n";
  cd $LOCAL_PATH && rsync -av -e ssh --exclude="$LOCAL_PATH/backend/vendor" --exclude='.env' backend root@94.130.74.136:/data/dev/kursmarketnew
  printf "${BLUE}End BACKKEND building${NC}\n"
}

function buildAdmin {
  printf "${RED}Start ADMIN building...${NC}\n";
  cd $LOCAL_PATH && rsync -av -e ssh --exclude="$LOCAL_PATH/admin/vendor" --exclude='.env' admin root@94.130.74.136:/data/dev/kursmarketnew
  printf "${BLUE}End Admin building${NC}\n";
}

function remoteSshActions {
  printf "${RED}Start REMOTE-SSH-ACTION building...${NC}\n";
  ssh -t root@94.130.74.136 "cd /data/dev/kursmarketnew/admin && composer install --ignore-platform-reqs --no-interaction && composer dumpautoload --ignore-platform-reqs --no-interaction && php artisan migrate && php artisan db:seed && php artisan config:cache && cd /data/dev/kursmarketnew/backend && composer install --ignore-platform-reqs --no-interaction && composer dumpautoload --ignore-platform-reqs --no-interaction && php artisan config:cache"
  printf "${BLUE}End REMOTE-SSH-ACTION building${NC}\n";
}

bildFrontend
buildBackend
buildAdmin
remoteSshActions
