STAGING_URL=https://matchhugo.stage.ccnmtl.columbia.edu/
PROD_URL=https://match.ctl.columbia.edu/
STAGING_BUCKET=matchhugo.stage.ccnmtl.columbia.edu
PROD_BUCKET=match.ctl.columbia.edu
INTERMEDIATE_STEPS ?= echo nothing

JS_FILES=static/js/src

all: jshint jscs webpack

include *.mk

$(PUBLIC)/js/all.json: $(PUBLIC)/json/all/index.html
	mkdir $(PUBLIC)/js/ || true
	mv $< $@ && ./checkjson.py

runserver-zarina:
	hugo --buildDrafts --verboseLog=true -v
	hugo server --baseUrl=http://kodos.ccnmtl.columbia.edu/ --bind=0.0.0.0 --port=13093 --watch --buildDrafts --verboseLog=true -v
