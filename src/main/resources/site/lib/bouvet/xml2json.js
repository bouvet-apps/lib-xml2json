/**
 * Converts an xml string to json object
 *
 * @param xmlString XML string to convert
 * @returns {object} JSON object
 */
exports.parseString = (xmlString) => {
  const bean = __.newBean("no.bouvet.xp.lib.xml2json.XmlParser");
  const result = bean.parseString(xmlString);
  return __.toNativeObject(result);
};

/**
 * Converts an xml stream to json object
 *
 * @param xmlStream XML stream to convert
 * @returns {object} JSON object
 */
exports.parseStream = (xmlStream) => {
  const bean = __.newBean("no.bouvet.xp.lib.xml2json.XmlParser");
  const result = bean.parseStream(xmlStream);
  return __.toNativeObject(result);
};
