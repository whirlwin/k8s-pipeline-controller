const rp = require("request-promise");

const K8S_EVENT_CONTROLLER_BASE_URL = "http://localhost:9000";

class K8SEventControllerClient {

    constructor() {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    }

    getEvents(path) {
        return rp(`${BITBUCKET_BASE_URL}/${path}`);
    }
}

module.exports = BitbucketClient;
