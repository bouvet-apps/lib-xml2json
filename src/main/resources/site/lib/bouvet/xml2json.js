/**
 * Converts an xml string to json object
 *
 * @param xmlString XML string to convert
 * @returns {object} JSON object
 */
function parseString(xmlString) {
  var bean = __.newBean('no.bouvet.xp.lib.xml2json.XmlParser');
  var result = bean.parseString(xmlString);
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
  var bean = __.newBean('no.bouvet.xp.lib.xml2json.XmlParser');
  var result = bean.parseStream(xmlStream);
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
  var bean = __.newBean('no.bouvet.xp.lib.xml2json.JsonConverter');
  var json = jsonObject;
  if (typeof json === 'object') {
    json = JSON.stringify(json);
  }
  var result = bean.toXml(json);
  return __.toNativeObject(result);
}

exports.toXml = toXml;