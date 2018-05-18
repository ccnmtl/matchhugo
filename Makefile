STAGING_URL=https://matchhugo.stage.ccnmtl.columbia.edu/
PROD_URL=https://match.ctl.columbia.edu/
STAGING_BUCKET=matchhugo.stage.ccnmtl.columbia.edu
PROD_BUCKET=match.ctl.columbia.edu
INTERMEDIATE_STEPS ?= echo nothing
HUGO=/usr/local/bin/hugo-0.18

JS_FILES=themes/ctl-book/static/js/

all: eslint webpack

include *.mk

$(PUBLIC)/js/all.json: $(PUBLIC)/json/all/index.html
	mkdir $(PUBLIC)/js/ || true
	mv $< $@ && ./checkjson.py
