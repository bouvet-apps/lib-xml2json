# lib-xml2json

Simple XML parser for Enonic XP.

Version 3.x targets Enonic XP 8.0.4 or later in the 8.x series and requires Java 25.
Use version 2.x for Enonic XP 7.

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
include "com.github.bouvet-apps:lib-xml2json:3.0.0"
```

## Usage
```
const xml2json = require("/lib/bouvet/xml2json");
const json = xml2json.parseString("<xml><dummy>Dummy content</dummy></xml>");
```

## Development

Select Java 25 before building. With SDKMAN:

```sh
source "$HOME/.sdkman/bin/sdkman-init.sh"
sdk use java 25.0.3-tem
./gradlew build
```

The build runs XP script-engine tests for `parseString`, `parseStream`, and
`toXml`. The library JAR includes `org.json` and exposes the unchanged
`/lib/bouvet/xml2json` module path. It is included by a consuming application,
not deployed as a standalone XP application.
