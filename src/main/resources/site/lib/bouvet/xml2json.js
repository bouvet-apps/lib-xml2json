const xmlParserBean = __.newBean('no.bouvet.xp.lib.xml2json.XmlParser');
const jsonConverterBean = __.newBean('no.bouvet.xp.lib.xml2json.JsonConverter');

/**
 * Converts an xml string to json object
 *
 * @param xmlString XML string to convert
 * @returns {object} JSON object
 */
function parseString(xmlString) {
  const result = xmlParserBean.parseString(xmlString);
  return __.toNativeObject(result);
}

exports.parseString = parseString;

/**
* Converts an xml stream to json object
*
* @param xmlStream XML stream to convert
* @returns {object} JSON object
*/
function parseStream(xmlStream) {
  const result = xmlParserBean.parseStream(xmlStream);
  return __.toNativeObject(result);
}

exports.parseStream = parseStream;

/**
* Converts json string or object to an xml string
*
* @param jsonObject JSON object to convert
* @returns {string} XML string
*/
function toXml(jsonObject) {
  let json = jsonObject;
  if (json !== null && typeof json === 'object') {
    json = JSON.stringify(json);
  }
  const result = jsonConverterBean.toXml(json);
  return __.toNativeObject(result);
}

exports.toXml = toXml;