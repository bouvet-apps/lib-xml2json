# lib-xml2json

Simple XML parser for Enonic XP.

## Setup
To use this library in your project, you need to add the jitpack repository to your build.gradle file:

```
repositories {
  ...
  maven { url 'https://www.jitpack.io' }
}
```

You also need to add the library as a dependency:
```
include "com.github.bouvet-apps:lib-xml2json:1.1.0"
```

## Usage
```
var xml2json = require("/lib/bouvet/xml2json");
var json = xml2json.parseString("<xml><dummy>Dummy content</dummy></xml>");
```
