const bufferToBody = require("./bufferToBody");
const setTimeout = require("./setTimeout");
const promise = require("./promise");

module.exports = {
    bufferToBody,
};
module.exports.promise = promise;//above or below
exports.setTimeout = setTimeout;
// module.exports.promise = promise;
