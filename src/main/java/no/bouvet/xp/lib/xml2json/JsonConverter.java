package no.bouvet.xp.lib.xml2json;

import org.json.JSONObject;
import org.json.XML;

public class JsonConverter {
    public String toXml(final String jsonString) throws Exception {
      return XML.toString(new JSONObject(jsonString));
    }
}

