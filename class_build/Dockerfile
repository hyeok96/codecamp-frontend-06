FROM node:14

# RUN mkdir class_build를 굳이 따로 만들필요가 없다
WORKDIR /class_build
COPY . /class_build/


RUN yarn install
RUN yarn build:ssr
# RUN yarn start 실행중인 명령어는 RUN에 들어갈 수 없다. 이때는 CMD사용


CMD yarn start
