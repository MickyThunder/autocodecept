const Helper = require('@codeceptjs/helper');
const got = require('got')

class Rest extends Helper {

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }
  async getRestRequest(url){
    try {
      const response = await got(url);
      return response;
      //=> '<!doctype html> ...'
    } catch (error) {
      console.log(error.response.body);
      return error.response;
      //=> 'Internal server error ...'
    }
  }

  async postRestRequest(url){
    const {body} = await got.post(url, {
		json: {
			hello: 'world'
		},
		responseType: 'json'
	});

	console.log(body.data);
  }
  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

}

module.exports = Rest;
