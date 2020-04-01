
const typographyCSSFormat = (dictionary, options) => {
  return dictionary.allProperties
    .filter(token => token.attributes.category === 'font' && token.attributes.type === 'size')
    .map(token => {
      return `.${token.name} {
  font-size: ${token.value};
  ${token.associations.map(association => {
    return `${association.attributes.type}: ${association.value}`
  })}
}`
    }).join('\n');
}

module.exports = {
  format: {
    typographyCSSFormat
  },
  
  source: ['./v1/tokens/**/*.json'],
  
  platforms: {
    css: {
      transformGroup: 'web',
      buildPath: 'build/css/',
      files: [{
        destination: 'typography-v1.css',
        format: 'typographyCSSFormat'
      }]
    }
  }
}