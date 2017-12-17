AWS ECS Docker NodeJS POC
---
---

## Local

Setup: `npm`

Test: `npm run test`

Run locally: `npm run dev`

## Docker

Build image: `docker build .`

Test image: `docker run -p <local-port>:8080 -d <image-id>`

View containers: `docker ps -a`

View logs: `docker logs <container-id>`
