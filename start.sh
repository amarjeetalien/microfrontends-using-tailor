trap "exit" INT TERM ERR
trap "kill 0" EXIT

npm run build-fragments &>/dev/null &
npm run watch-fragments &>/dev/null &
npm run start-fragments &>/dev/null &
npm start &>/dev/null &

wait

