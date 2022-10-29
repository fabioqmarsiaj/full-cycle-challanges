FROM golang:alpine3.16 AS builder

ENV APP_NAME hello-full-cycle-go
ENV CMD_PATH hello-full-cycle.go

COPY . $GOPATH/src/$APP_NAME

WORKDIR $GOPATH/src/$APP_NAME

RUN CGO_ENABLED=0 go build -v -o /$APP_NAME $GOPATH/src/$APP_NAME/$CMD_PATH

FROM scratch

COPY --from=builder /go/src/hello-full-cycle-go/hello-full-cycle /go/src/hello-full-cycle-go/hello-full-cycle

ENTRYPOINT [ "/go/src/hello-full-cycle-go/hello-full-cycle" ]