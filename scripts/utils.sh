#!/bin/bash

log() {
   case "$1" in
      warn)
         LEVEL=WARN
      ;;
      error)
         LEVEL=ERROR
      ;;
      *)
         LEVEL=INFO
      ;;
   esac

   printf "%30s %5s - %s\n" "`date`" "$LEVEL" "$2"
}

value() {
   for val in "$@"; do 
     if [ ! -z "$val" ]; then
       echo $val
       return
     fi
   done
}

checkerror() {
  if [ "$1" -ne "$2" ]; then
    log error "$3"
    cleanup
    exit 1
  fi
}

assertexists() {
  if [ ! -e "$1" ]; then
    log error "$2"
    cleanup
    exit 1
  fi
}

cleanup() {
  log info "Cleaning up.."
  for file in $tmpfiles; do
    log info "Deleting $file"
    rm -rf $file
  done
}
