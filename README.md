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
include "com.github.bouvet-apps:lib-xml2json:2.0.1"
```

## Usage
```
const xml2json = require("/lib/bouvet/xml2json");
const json = xml2json.parseString("<xml><dummy>Dummy content</dummy></xml>");
```
