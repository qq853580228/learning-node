const date = require('./dateFormat');
const escape = require('./HTMLEscape');

module.exports = {
  ...date,
  ...escape,
}