var strHumanize = require('../utils/strHumanize');

function parseTitle(article, id) {
  var hashTitleMatcher = article.match(/^\#\s([^\n]+)/);

  if (hashTitleMatcher) {
    return hashTitleMatcher[1];
  }
  else {
    var strokedTitleMatcher = article.match(/^([^\n]+)\n[\=]{3,}\n/m);

    if (strokedTitleMatcher) {
      return strokedTitleMatcher[1];
    }
    else if (id) {
      return strHumanize(id);
    }
  }
}

module.exports = parseTitle;