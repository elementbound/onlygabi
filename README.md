![Tóth Gabi Content Blocker](icon128.png)
# OnlyGabi Content Focuser 1.5.0

Ez a Chrome kiegészítő eltávolítja az összes Tóth Gabihoz nem kapcsolódó
tartalmakat a magyar (.hu) weboldalakról, biztosítva egy optimális, Tóth
Gabi-vezérelt böngészési élményt.

## Funkciók

- **Tartalom Szűrés**: Automatikusan eltávolít minden nem Tóth Gabihoz
  kapcsolódó tartalmat a .hu domainnel rendelkező oldalakról.
- **Egyszerű Kezelés**: A kiegészítő állapota egyszerűen szabályozható egy ki-
  bekapcsoló gombbal.
- **Könnyű Telepítés**: Egyszerű telepítés és azonnali működés.

## Telepítés

1. [Töltse
   le](https://codeload.github.com/elementbound/onlygabi/zip/refs/heads/main) a
   forrást egy mappába
1. Írja be a böngészősorba [chrome://extensions/](chrome://extensions/)
1. Kapcsolja be a fejlesztő módot, jobb felül.
1. Kicsomagolt elemek betöltése gombbal válassza ki a mappát.
1. Kapcsolja be a kiegészítőt.
   
## Használat

A kiegészítő ikonja megjelenik a Chrome eszköztárán. Kattintson rá a bekapcsoló
gomb eléréséhez, ahol ki- és bekapcsolhatja a kiegészítő működését.

## Súgó és Támogatás

A szűrő logikáját a [content.js](content.js) tartalmazza. A tartalmi
változásokat a
[MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
figyeli.

## Fejlesztői információk

- **Verzió**: 1.5.0
- **Fejlesztő**: [Petke](https://github.com/tajtipeter71)
- **Licenc**: [MIT](LICENSE) © [Petke](https://github.com/tajtipeter71),
  [2024]. Minden jog fenntartva.
