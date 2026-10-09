package no.bouvet.xp.lib.xml2json;

import java.nio.charset.StandardCharsets;

import org.junit.jupiter.api.Test;

import com.google.common.io.ByteSource;
import com.enonic.xp.testing.ScriptTestSupport;

public class Xml2JsonTest extends ScriptTestSupport {
    @Test
    void parseString() {
        runFunction("/xml2json-test.js", "parseString");
    }

    @Test
    void parseStream() {
        final ByteSource stream = ByteSource.wrap(
            "<xml><text>Bl\u00e5b\u00e6r</text></xml>".getBytes(StandardCharsets.UTF_8));
        runFunction("/xml2json-test.js", "parseStream", stream);
    }

    @Test
    void toXmlFromObject() {
        runFunction("/xml2json-test.js", "toXmlFromObject");
    }

    @Test
    void toXmlFromString() {
        runFunction("/xml2json-test.js", "toXmlFromString");
    }

    @Test
    void malformedXml() {
        runFunction("/xml2json-test.js", "malformedXml");
    }
}