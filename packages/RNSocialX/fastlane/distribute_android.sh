#!/usr/bin/env bash

export ANDROID_VERSION_STRING="0.4.5"
export ANDROID_VERSION_CODE=45

export $(egrep -v '^#' .env | xargs)

bundle exec fastlane android release \
	--env development \
	version_string:${ANDROID_VERSION_STRING} \
	version_code:${ANDROID_VERSION_CODE}
