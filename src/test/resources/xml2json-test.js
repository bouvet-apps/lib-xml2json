const assert = require('/lib/xp/testing');
const xml2json = require('/lib/bouvet/xml2json');

exports.parseString = function () {
  const result = xml2json.parseString(
    '<xml><item><name>first</name></item><item><name>second</name></item>' +
    '<number>1</number><number>2</number><enabled>true</enabled></xml>'
  );
  assert.assertJsonEquals([{ name: 'first' }, { name: 'second' }], result.xml.item);
  assert.assertJsonEquals([1, 2], result.xml.number);
  assert.assertEquals(true, result.xml.enabled);
};

exports.parseStream = function (stream) {
  assert.assertJsonEquals({ xml: { text: 'Bl\u00e5b\u00e6r' } }, xml2json.parseStream(stream));
};

exports.toXmlFromObject = function () {
  assert.assertEquals('<xml><text>A &amp; B</text></xml>', xml2json.toXml({ xml: { text: 'A & B' } }));
};

exports.toXmlFromString = function () {
  assert.assertEquals('<xml><text>hello</text></xml>', xml2json.toXml('{"xml":{"text":"hello"}}'));
};

exports.malformedXml = function () {
  assert.assertThrows(function () {
    xml2json.parseString('<xml><text>missing closing tags');
  });
};