FROM golang:alpine3.16 AS builder

COPY . $GOPATH/src/

WORKDIR $GOPATH/src/

RUN CGO_ENABLED=0 go build hello-full-cycle.go

FROM scratch

COPY --from=builder /go/src/hello-full-cycle /go/src/hello-full-cycle

ENTRYPOINT [ "/go/src/hello-full-cycle" ]