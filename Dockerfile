
ENV HOME=/opt/k8s-doc-controller \
    APP_PORT=8000

RUN mkdir --parents ${HOME}

WORKDIR ${HOME}

LABEL sb1.healthcheck.path=/healthcheck/ \
      sb1.healthcheck.port=${APP_PORT} \
      sb1.k8s.appname=k8s-doc-controller \
      sb1.k8s.port=${APP_PORT} \
      sb1.k8s.apptype=simple-v1 \
      sb1.k8s.path='["/"]'

COPY package.json ${HOME}

RUN npm install

COPY bin ${HOME}/bin
COPY src ${HOME}/src

CMD ["./bin/k8s-doc-controller"]
