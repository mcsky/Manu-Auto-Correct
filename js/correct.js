var textNode,
  walk = document.createTreeWalker(document, NodeFilter.SHOW_TEXT, null, false)
while ((textNode = walk.nextNode())) {
  textNode.nodeValue = textNode.nodeValue
    .replace(/d'Emmanuel Macron/gi, 'de Manu')
    .replace(/Emmanuel Macron/gi, 'Manu')
    .replace(/le Président de la République/gi, 'Manu')
    .replace(/Monsieur le Président/gi, 'Manu')
    .replace(/EmmanuelMacron/gi, 'Manu')
    .replace(/M\. Macron/gi, 'Manu')
    .replace(/Président Macron/gi, 'Manu')
    .replace(/Emmanuel et Brigitte Macron/gi, 'Manu et Brigitte')
}
