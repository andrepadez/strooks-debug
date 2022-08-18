const isSameDomain = styleSheet => {
  if (!styleSheet.href) {
    return true
  }

  return styleSheet.href.indexOf(window.location.origin) === 0
}

const isStyleRule = rule => rule.type === 1

const getCSSCustomPropIndex = () => {
  return [...document.styleSheets]
    .filter(isSameDomain)
    .reduce(
      (finalArr, sheet) =>
        finalArr.concat(
          [...sheet.cssRules].filter(isStyleRule).reduce((propValArr, rule) => {
            const props = [...rule.style].map(propName => [
              propName.trim(),
              rule.style.getPropertyValue(propName).trim(),
            ])
            return [...propValArr, ...props]
          }, [])
        ),
      []
    )
    .filter(([p]) => p.startsWith('--'))
    .reduce((result, item) => {
      result[item[0]] = item[1]
      return result
    }, {})
}

export default getCSSCustomPropIndex
