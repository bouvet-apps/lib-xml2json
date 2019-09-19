package no.bouvet.xp.lib.xml2json;

import java.util.Map;

import org.json.JSONObject;
import org.json.XML;

public class JsonConverter {
    public String toXml(final Map jsonObject) throws Exception {
      return XML.toString(new JSONObject(jsonObject));
    }
}

