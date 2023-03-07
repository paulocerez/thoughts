# glue.sh
DELAY=2

docker build -t thoughtsbackend .

docker-compose --file docker-compose.yml down

docker-compose --file docker-compose.yml up -d --build

echo "****** Waiting for ${DELAY} seconds for containers to go up ******"
sleep $DELAY

docker exec mongo1 sh /scripts/rs-init.sh