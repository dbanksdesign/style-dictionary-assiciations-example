const typographyCSSFormat = (dictionary, options) => {
  return dictionary.allProperties
    .filter(token => token.attributes.category === 'font' && token.attributes.type === 'size')
    .map(token => {
      return `.${token.name} {
  font-size: ${token.value};
  ${Object.keys(token.associations).map(key => {
    return `${key}: ${token.associations[key]}`
  })}
}`
    }).join('\n');
}

module.exports = {
  format: {
    typographyCSSFormat
  },
  
  source: ['./v2/tokens/**/*.json'],
  
  platforms: {
    css: {
      transformGroup: 'web',
      buildPath: 'build/css/',
      files: [{
        destination: 'typography-v2.css',
        format: 'typographyCSSFormat'
      }]
    }
  }
}