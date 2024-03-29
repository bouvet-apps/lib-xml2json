package no.bouvet.xp.lib.xml2json;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

import org.json.JSONObject;
import org.json.XML;

import com.google.common.io.ByteSource;
import com.google.common.io.ByteStreams;

public class XmlParser {
    @SuppressWarnings("unused")
    public Object parseString(final String xmlString) throws Exception {
        final JSONObject jsonObject = XML.toJSONObject(xmlString);
        return new XmlMapper(jsonObject);
    }

    public Object parseStream(final ByteSource byteSource) throws Exception {
        final JSONObject jsonObject = XML.toJSONObject(getAsString(byteSource));
        return new XmlMapper(jsonObject);
    }

    private String getAsString(final ByteSource byteSource) throws IOException {
        try (InputStream in = byteSource.openStream()) {
            return new String(ByteStreams.toByteArray(in), StandardCharsets.UTF_8);
        } catch (IOException e) {
            throw new RuntimeException("Cannot read stream", e);
        }
    }
}

