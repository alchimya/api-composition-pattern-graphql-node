  echo '>>Use Docker daemon inside the Minikube instance'
  eval $(minikube docker-env)

  echo '>>Set project directory'
  cd  ..
  PROOJECT_PATH=$(pwd)
  echo $PROOJECT_PATH

  echo '>>Build JS bundle'
  npm run build:prod

  echo '>>Build docker image'
  docker build -t apicomp-lab/inventory-service:v1.0.0 .

  echo '>>Delete deplooyment if exists'
  cd  $PROOJECT_PATH'/deploy'
  kubectl delete -f .
  echo '>>Create new deplooyment'
  kubectl apply -f .

  echo '>>Lists pods and servicces'
  kubectl get pods
  kubectl get svc
