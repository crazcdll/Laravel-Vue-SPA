NPM=-1
until [ ${NPM} -eq 0 ]; do
  npm i --no-bin-links
  let NPM=$?
done


NPM=-1
GUARD=20
COUNTER=1
until [ ${NPM} -eq 0 ] || [ ${COUNTER} -gt ${GUARD} ]; do
  npm i --no-bin-links
  let NPM=$?
  let COUNTER+=1
done