# Deploying:

To get started you need to:
- install Python (in Windows, 3.6) 
- install AWS CLI
- congifure AWS CLI

Run this command to log into AWS:
```$(aws ecr get-login --no-include-email --region us-west-2)```

Next, build the docker image:
```docker build -t <image name> .```

Next, tag the docker image:
```docker tag <image name>:<image tag> <AWS ECS Repository URL>/<image name>:<image tag>```

Next, push the docker image:
```docker push <AWS ECS Repository URL>/<image name>:<image tag>```





## Resources:
Original Dockerfile: https://www.katacoda.com/courses/docker/create-nginx-static-web-server


