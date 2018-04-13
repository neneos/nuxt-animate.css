module.exports = function AnimateCss(moduleOptions) {
    this.options.css.push({ src: 'animate.css/animate.min.css', lang: 'css' })
}

module.exports.meta = require('./package.json');
