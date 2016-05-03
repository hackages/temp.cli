#! /bin/bash
#
# This script sets up the local environment. After running this script, everything should be in place.
#
# IMPORTANT: It cleans the local databases!
#
 
checkerrorinbuild() {
  file=$1
  grep -m 1 "BUILD FAILURE\|Context initialization failed" $file > /dev/null 2>&1
  checkerror $? 1 "Ops, error found in $file"
}
 
basedir=`dirname $0`
source $basedir/utils.sh
if [ -e $basedir/settings.conf ]; then
  source $basedir/settings.conf
fi


projectrootdir="../bb-backbase-portal/"

log info "Killing jetty servers"
kill -f jetty
sleep 1
 
echo "setup-local........"
cd $projectrootdir
 
# Reset with the actual value
projectrootdir=`pwd`
 
# Cleaning up databases
log info "Cleaning databases"
rm -rf data/db/*
 
log info "Cleaning previously imported items"
rm -rf data/statics/itemRoot/*
 
log info "Cleaning content"
rm -rf data/content/*
 
log info "Cleaning tmp"
rm -rf data/tmp/*
 
# First, build everything and create the local dbs
mvn clean install -Pclean-database
checkerror $? 0 "Ops, Build failed"
 
log info "Cleaning logs"
rm -rf webapps/portalserver/run.log
rm -rf webapps/contentservices/run.log
rm -rf webapps/orchestrator/run.log
 
log info "Starting Servers"
bash run.sh -b
 
cd $projectrootdir/scripts
 
log info "Waiting for Portal Server..."
bash wait-msg.sh "Started Jetty Server\|BUILD FAILURE" $projectrootdir/webapps/portalserver/run.log
checkerrorinbuild $projectrootdir/webapps/portalserver/run.log
log info "Portal Server started!"
 
log info "Waiting for Content Services..."
bash wait-msg.sh "Started Jetty Server\|BUILD FAILURE" $projectrootdir/webapps/contentservices/run.log
checkerrorinbuild $projectrootdir/webapps/contentservices/run.log
log info "Content Services started!"
 
log info "Waiting for Orchestrator..."
bash wait-msg.sh "Started Jetty Server\|BUILD FAILURE" $projectrootdir/webapps/orchestrator/run.log
checkerrorinbuild $projectrootdir/webapps/orchestrator/run.log
log info "Orchestrator started!"
 
bash import-cxp-manager.sh
checkerror $? 0 "Error importing CXP Manager"
 
# bash import-local-statics.sh
# checkerror $? 0 "Error importing SSF Statics"
#
# bash import-local-portals.sh
# checkerror $? 0 "Error importing SSF Portals"
#
# bash import-local-statics.sh
# checkerror $? 0 "Error re-importing SSF Statics"
