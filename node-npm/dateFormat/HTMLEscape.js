function HTMLEscape(htmlStr) {
  return htmlStr.replace(/<|>|"|&/g, match => {
    switch (match) {
      case '<':
        return '&lt;'
    
      case '>':
        return '&gt;'
    
      case '"':
        return '&quot;'
    
      case '&':
        return '&amp;'
    
      default:
        break;
    }
  })
}

function HTMLUnEscape(str) {
  return str.replace(/&lt;|&gt;|&quot;|&amp;/g, match => {
    switch (match) {
      case '&lt;':
        return '<'
    
      case '&gt;':
        return '>'
    
      case '&quot;':
        return '"'
    
      case '&amp;':
        return '&'
    
      default:
        break;
    }
  })
}

module.exports = {
  HTMLEscape,
  HTMLUnEscape,
}