var assert = require("assert");

var generate_bsd_url = require("./index");

var api_id = "bsd-api-auth";
var api_timestamp = 1416856860;
var api_url = "https://sendto.mozilla.org/page/api/cons/get_constituents_by_id";
var api_version = "2"
var params = { cons_ids: 25730 };
var api_secret = "secret";
var api_signed_url = generate_bsd_url(api_id, api_timestamp, api_url, api_version, params, api_secret);

assert.equal(api_signed_url, "https://sendto.mozilla.org/page/api/cons/get_constituents_by_id?api_id=bsd-api-auth&api_ts=1416856860&api_ver=2&cons_ids=25730&api_mac=dc6aead204c9cdc8ce6683d8898cc9d8f3d041cb");
