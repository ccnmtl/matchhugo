WEBPACK_UTIL=./node_modules/webpack/bin/webpack.js
OUTPUT_PATH=static/lib/

webpack:  $(JS_SENTINAL)
	rm -rf static/lib/*
	$(WEBPACK_UTIL) --output-path $(OUTPUT_PATH)dentalvisit/ --config ./node_modules/dentalvisitactivity-pack/webpack.config.js
	$(WEBPACK_UTIL) --output-path $(OUTPUT_PATH)speechassessment/ --config ./node_modules/speechassessment-pack/webpack.config.js
	$(WEBPACK_UTIL) --output-path $(OUTPUT_PATH)swallowassessment/ --config ./node_modules/swallowassessment-pack/webpack.config.js
	$(WEBPACK_UTIL) --output-path $(OUTPUT_PATH)speechdiagnoses/ --config ./node_modules/speechdiagnoses-pack/webpack.config.js
	$(WEBPACK_UTIL) --output-path $(OUTPUT_PATH)anticipatoryguidance/ --config ./node_modules/anticipatoryguidance-pack/webpack.config.js
