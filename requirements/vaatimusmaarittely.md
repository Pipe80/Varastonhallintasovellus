# Vaatimusmäärittely

## Sisältö

[**Johdanto**](#johdanto)

[**Kaupallinen kohderyhmä**](#kaupallinen-kohderyhmä)

[**Käyttäjärajapinnan kohderyhmät**](#käyttäjärajapinnan-kohderyhmät)

[**Sidosryhmät**](#sidosryhmät)

[**Sidosryhmäkartta**](#sidosryhmäkartta)

[**Palveluun liittyvät asiakaspolut**](#palveluun-liittyvät-asiakaspolut)

[**Palvelun ominaisuudet ja toiminnot**](#palvelun-ominaisuudet-ja-toiminnot)

- [Frontend](#frontend)
- [Frontend MindMap muodossa](#frontend-mindmap-muodossa)
- [Backend](#backend)
- [Backend MindMap muodossa](#backend-mindmap-muodossa)

[**Toiminnalliset vaatimukset**](#toiminnalliset-vaatimukset)

[**Käyttöliittymänäkymä**](#käyttöliittymänäkymä)

[**Ketterän kehittämisen käyttötarinat**](#ketterän-kehittämisen-käyttötarinat)

[**Tekniset vaatimukset**](#tekniset-vaatimukset)

<br>

# Johdanto

Tässä vaatimusmäärittelyssä kuvataan verkkokaupan keräilysovellus.

Sovellus on tarkoitettu matalan kynnyksen keräilysovellukseksi verkkokauppaliiketoiminnan aloittaville yrityksille.

Tavoitteena on tehdä sovellus, joka on helppokäyttöinen ja integroitavissa toimimaan erilaisten verkkokauppa-alustojen sekä varastokirjanpitojärjestelmien kanssa. 

Sovellus suunnitellaan toimimaan Android ympäristössä, jolloin sitä voidaan käyttää Zebra Technologiesin toimittamilla viivakoodinlukijoilla.

Sovelluksen tarkoituksena on helpottaa tilausten keräilyprosessia, vähentää virheitä ja parantaa tehokkuutta.

# Kaupallinen kohderyhmä

Sovellukella halutaan palvella verkkokauppaliiketoimintaa aloittavien yritysten tarpeita. Yritykset ovat todennäköisesti kohtalaisen pieniä ja mahdollisesti liiketoimintansa digitalisoinnin kanssa alkuvaiheessa.

Näille toimijoille tärkeää on että sovellus on integroitavissa heidän olemassa olevaan verkkokauppaansa sekä varastonhallintajärjestelmään. Helppokäyttöisyys, nopeus ja toimintavarmuus ovat heille tärkeitä. Erityisesti digitalisoinnin kanssa alkuvaiheessa olevilla yrityksillä on varmasti tarvetta myös konsuntoivalle myynnille, koska kokemuksen mukanaan tuomaa ymmärrystä tarvittavista prosesseista ei ole muodostunut.

# Käyttäjärajapinnan kohderyhmät

Verkkoliiketoiminnan alkuvaiheessa sovelluksen käyttäjät ovat luultavasti varastohenkilökuntaa. Pienissä yrityksissä, joissa ei ole erillistä varastohenkilökuntaa, käyttäjänä voivat olla esimerkiksi myyjät. Verkkokauppaliiketoiminnan kehityttyä riittävän isoksi, keräilyyn palkattaneen oma erikoistunut työvoimansa.

Kohderyhmässä huomioitavia asioita ovat:

- käyttäjät eivät ole teknisesti koulutettuja, joten sovelluksen käyttöliittymän tulee olla yksinkertainen ja intuitiivinen
- käyttäjissä voi olla paljon maahanmuuttajia, joten ainakin englannin kielen lisääminen lienee tarpeellista

# Sidosryhmät

Sovellus auttaa tilauksen keräilystä vastaavia henkilöitä tekemään työnsä. Tällä työllä he palvelevat tilauksen tehneitä asiakkaita, varmistaen että tilaukset toimitetaan ripeästi, varmasti ja oikein.

Sovelluksen hankkinut yritys on myös sidosryhmä. Yrityksen kannalta kyse on asiakaspalvelun varmistamisesta, työntekijöiden resursoinnista ja keräilyn kustannuksen minimoinnista sekä laadun maksinoinnista.

Kolmas merkittävä sidosryhmä ovat kuljetusyritykset, joiden kuljetuspalveluita tilataan sovelluksen tuottaman tiedon pohjalta.

Neljäntenä sidosryhmänä on ID Systems IDS Oy, jonka tuotekatalogiin sovellus tulee.

Viides sidosryhmä ovat verkkokaupan asiakkaat, joiden tilaus keräillään sovelluksella.

# Sidosryhmäkartta

Sidosryhmäkartassa on esitetty edellä määritetyt sidosryhmät kuvan muodossa. Kuvasta näkee mitä sidosryhmät haluavat sovellukselta ja kuinka eri sidosryhmät linkittyvät toisiinsa.

```plantuml
@startmindmap
skinparam defaultFontSize 30
+[#LightGreen] Keräilysovellus
--[#LightBlue] Keräilyn kustannusten minimoiminen
---[#IndianRed] Sovellusta käyttävä yritys
--[#LightBlue] Työnhelpottaminen
---[#IndianRed] Sovellusta käyttävät työntekijät
++[#LightBlue] Oikeat tiedot kuljetustilaukseen
+++[#IndianRed] Kuljetusyritykset
++++[#LightBlue] Oikein ja ripeästi toimitettu tilaus
+++++[#IndianRed] Verkkokaupan asiakkaat
++[#LightBlue] Liiketoimintamahdollisuudet
+++[#IndianRed] ID Systems IDS Oy
@endmindmap
```

<br>

# Palveluun liittyvät asiakaspolut

Tässä on esitetty keräilysovelluksen käyttötapahtuma asiakaspolun muodossa.

```plantuml
state Askel1 #LawnGreen
state Askel2 #LawnGreen
state Askel3 #LawnGreen
state Askel4 #LawnGreen
state Askel5 #LawnGreen
state Askel6 #Red
state Askel7 #LawnGreen
state Askel8 #LawnGreen
state Askel9 #LawnGreen
state Exit #LawnGreen
Askel1: Keräilijä kirjautuu sovellukseen
Askel2: Keräilijä valitsee keräiltävän tilauksen
Askel3: Keräilijä lukee viivakoodin
Askel4: Keräilijä kuittaa tuotteen ja määrän
Askel5: Kaikki tuotteet keräilty
Askel6: Luettua viivakoodia ei löydy tilauksesta
Askel7: Tilauksen toimittaminen pakkaamoon
Askel8: Rahtitilaus keräillyille tuotteille
Askel9: Rahtiyhtiö noutaa tilauksen
Exit: Verkkokaupan asiakas saa tilauksensa

[*] --> Askel1
Askel1 -[#Green]-> Askel2
  Askel2 -[#Green]-> Askel3
    Askel3 -[#Green]-> Askel4
      Askel3 -[#Gold]-> Askel6
      Askel6 -[#Gold]-> Askel3
    Askel4 -[#Green]-> Askel3
      Askel4 -[#Green]-> Askel5                      
        Askel5 -[#Green]-> Askel7
        Askel5 -[#Green]-> Askel8
            Askel8 -[#Red]-> Askel9
            Askel7 -[#Red]-> Askel9
              Askel9 -[#Red]-> Exit
```

<br>

# Palvelun ominaisuudet ja toiminnot

Seuraavaksi esitetään palvelun ominaisuudet ja niihin liittyvät toiminnot. Esitys on jaettu frontend ja backend osioihin. Kummassakin osiossa on ensin listattu taulukossa ominaisuudet ja toiminnot ja tämän jälkeen sama asia vielä mindmap muodossa.

## Frontend

| **Ominaisuus** | **Ominaisuuteen liittyvät toiminnot** |
| -: | :- |
| **Luo uusi käyttäjä** | **Syöte:** Käyttäjän nimi |
| | **Syöte:** Sähköposti
| | **Syöte:** Salasana |
| | **Syöte:** Salasana uudelleen |
| | **Nappi:** Rekisteröidy |
| | **Nappi:** Kirjaudu sisään |
| **Kirjaudu sisään** | **Syöte:** Sähköposti |
| | **Syöte:** Salasana |
| | **Nappi:** Kirjaudu sisään |
| | **Nappi:** Rekisteröidy |
| **Perusnäkymä** | **Ominaisuus:** Hae backendistä siirtolistat |
| | **Lista:** Avoimet siirtolistat<ul><li>**Nappi:** Valitse siirtolista</li></ul> |
| | Vastaanota siirtolista |
| | **Nappi / Ominaisuus:** Asetukset |
| | **Nappi:** Kirjaudu ulos |
| **Keräilynäkymä** | **Nappi:** Keskeytä keräily |
| | **Lista:** Valitun siirtolistan tuotteet<ul><li>**Lista:** Tuotteiden hyllypaikat (jokaiseen tuotteeseen)</li><li>**Nappi:** Tuotetta ei löydy varastosta (jokaiseen tuotteeseen)</li></ul> |
| | **Ominaisuus:** Lue viivakoodi |
| | Tarkista onko tuote siirtolistassa |
| | **Pop-up:** Kaikki tuotteet keräilty<ul><li>**Nappi:** Lähetä valmis siirtolista backendiin</li></ul> |
| **Asetukset näkymä** | **Syöte:** Kirjoita uusi salasana |
| | **Syöte:** Kirjoita uusi salasana uudelleen |
| | **Nappi:** Vaihda salasana |
| | **Dropdown menu:** Valitse kieli 1. Suomi, 2.Englanti, 3. Ruotsi |
| | **Nappi on/off: Pop-up:** Kaikki tuotteet keräilty |
| | **Nappi on/off: Pop-up:** Ilmoita virheellisestä tuotteesta |
| | **Nappi on/off: Pop-up:** Tuote lisätty siirtolistalle |
| | **Nappi on/off: Pop-up:** Lisätäänkö tuote siirtolistaan? |
| **Lue viivakoodi** | **Nappi:** Lue viivakoodi |
| | Välitä viivakoodin sisältö sovellukseen |
| | Etsi vastaava tuote siirtolistasta |
| | **Pop-up:** Ilmoita virheellisestä tuotteesta |
| | **Pop-up:** Lisätäänkö tuote siirtolistaan?<ul><li>**Nappi:** määrä +</li><li>**Nappi:** määrä -</li><li>**Nappi:** Ei</li><li>**Nappi:** Kyllä</li><li>Lisää keräillyn tuotteen määrää siirtolistassa</li></ul> |
| | **Pop-up:** Tuote lisätty siirtolistalle |

<br>

## Frontend MindMap muodossa

```plantuml
@startmindmap
+[#White] FRONTEND
--[#Salmon] Luo uusi käyttäjä
---[#Salmon] Syöte: käyttäjän nimi
---[#Salmon] Syöte: sähköposti
---[#Salmon] Syöte: salasana
---[#Salmon] Syöte: salasana uudelleen
---[#Salmon] Nappi: rekisteröidy
---[#Salmon] Nappi: kirjaudu sisään
--[#LightBlue] Kirjaudu sisään
---[#LightBlue] Syöte: sähköposti
---[#LightBlue] Syöte: salasana
---[#LightBlue] Nappi: kirjaudu sisään
---[#LightBlue] Nappi: rekisteröidy
--[#PaleVioletRed] Keräilynäkymä
---[#PaleVioletRed] Nappi: Keskeytä keräily
---[#PaleVioletRed] Lista: Valitun siirtolistan tuotteet
----[#PaleVioletRed] Lista: Tuotteiden hyllypaikat
----[#PaleVioletRed] Nappi: Tuotetta ei löydy varastosta
---[#PaleVioletRed] Ominaisuus: Lue viivakoodi
---[#PaleVioletRed] Tarkista onko tuote siirtolistassa
---[#PaleVioletRed] Pop-up: Kaikki tuotteet keräilty
----[#PaleVioletRed] Nappi: Lähetä valmis siirtolista backendiin
++[#DarkSeaGreen] Lue viivakoodi
+++[#DarkSeaGreen] Lue viivakoodi
+++[#DarkSeaGreen] Välitä viivakoodin sisältö sovellukseen
+++[#DarkSeaGreen] Etsi vastaava tuote siirtolistasta
+++[#DarkSeaGreen] Pop-up: Ilmoita virheellisestä tuotteesta
+++[#DarkSeaGreen] Pop-up: Lisätäänkö tuote siirtolistaan?
++++[#DarkSeaGreen] Nappi: määrä +
++++[#DarkSeaGreen] Nappi: määrä -
++++[#DarkSeaGreen] Nappi: Ei
++++[#DarkSeaGreen] Nappi: Kyllä
++++[#DarkSeaGreen] Lisää keräillyn tuotteen määrää siirtolistassa
+++[#DarkSeaGreen] Pop-up: Tuote lisätty siirtolistalle
++[#GoldenRod] Asetukset näkymä
+++[#GoldenRod] Syöte: Kirjoita uusi salasana
+++[#GoldenRod] Syöte: Kirjoita uusi salasana uudelleen
+++[#GoldenRod] Nappi: Vaihda salasana
+++[#GoldenRod] Dropdown menu: Valitse kieli 1. Suomi, 2.Englanti, 3. Ruotsi
+++[#GoldenRod] Nappi on/off: Pop-up: Kaikki tuotteet keräilty
+++[#GoldenRod] Nappi on/off: Pop-up: Ilmoita virheellisestä tuotteesta
+++[#GoldenRod] Nappi on/off: Pop-up: Tuote lisätty siirtolistalle
+++[#GoldenRod] Nappi on/off: Pop-up: Lisätäänkö tuote siirtolistaan?
@endmindmap
```

<br>

## Backend

| **Ominaisuus** | **Ominaisuuteen liittyvät toiminnot** |
| -: | :- |
| **Luo uusi käyttäjä** | Ota vastaan käyttäjän nimi, sähköposti ja salasana |
| | Tarkista että sähköposti on uniikki |
| | Tee salasanasta hash |
| | Tallenna tietokantaan uusi käyttäjä |
| **Tarkista sisäänkirjautuminen** | Ota vastaan sähköposti ja salasana |
| | Tarkista vastaako salana tietokantaan tallennettua hashia |
| | Validoi käyttäjän sessio |
| **Lähetä ilmoitus uudesta siirtolistasta kaikkiin keräilypäätteisiin** | Ota siirtotiedosto vastaan nettikaupasta |
| | Lähetä viesti kaikkiin päätteisiin uudesta siirtolistasta |
| | Vastaanota vahvistus keräilyn aloittamisesta |
| | Lähetä siirtolista |
| **Lähetä viesti asiakkaalle keräilyn aloittamisesta** | Vastaanota kuittaus keräilyn aloittamisesta |
| | Poimi tilausnumero siirtolistasta |
| | Poimi asiakkaan sähköpostiosoite siirtolistasta |
| | Poimi tilauksen sisältö siirtolistasta |
| | Luo sähköpostiviesti valmiilla pohjalla |
| | Lähetä sähköposti asiakkaalle |
| **Lähetä rahtitilaus rahtiyhtiön API:iin** | Ota siirtolista vastaan frontendistä |
| | Poimi asiakkaan yhteystiedot siirtolistasta |
| | Ominaisuus: Laske tilauksen paino ja tilavuus |
| | Poimi tilauksen paino ja tilavuus siirtolistasta |
| | Luo rahtitilaus |
| | Lähetä rahtitilaus rahtiyhtiön API:iin |
| | Vastaanota rahtikirjan numero |
| | Linkitä rahtikirjan numero ja siirtolista toisiinsa |
| **Lähetä viesti asiakkaalle rahtitilauksesta** | Vastaanota rahtiyhtiön vahvistus rahtitilauksesta |
| | Poimi rahtikirjan numero ja siihen liittyvä siirtolistan numero |
| | Poimi asiakkaan sähköpostiosoite siirtolistasta |
| | Luo sähköpostiviesti valmiilla pohjalla |
| | Lähetä sähköposti asiakkaalle |
| **Laske tilauksen paino ja tilavuus** | Hae tuotekuvauksesta paino |
| | Hae tuotekuvauksesta tilavuus |
| | Laske kpl * paino ja kpl* tilavuus |
| | Lisää tilauksen paino ja tilavuus siirtolistaan |

<br>

## Backend MindMap muodossa

```plantuml
@startmindmap
<style>
mindmapDiagram {
  rootStyle {
    FontColor blue
  }
}
</style>
+_ BACKEND <<rootStyle>>
--[#Salmon] Luo uusi käyttäjä
---[#Salmon] Ota vastaan käyttäjän nimi, sähköposti ja salasana
---[#Salmon] Tarkista että sähköposti on uniikki
---[#Salmon] Tee salasanasta hash
---[#Salmon] Tallenna tietokantaan uusi käyttäjä
--[#LightBlue] Tarkista sisäänkirjautuminen
---[#LightBlue] Ota vastaan sähköposti ja salasana
---[#LightBlue] Tarkista vastaako salana tietokantaan tallennettua hashia
---[#LightBlue] Validoi käyttäjän sessio
--[#PaleVioletRed] Lähetä ilmoitus uudesta siirtolistasta kaikkiin keräilypäätteisiin
---[#PaleVioletRed] Ota siirtotiedosto vastaan nettikaupasta
---[#PaleVioletRed] Lähetä viesti kaikkiin päätteisiin uudesta siirtolistasta
---[#PaleVioletRed] Vastaanota vahvistus keräilyn aloittamisesta
---[#PaleVioletRed] Lähetä siirtotiedosto
--[#DarkSeaGreen] Lähetä viesti asiakkaalle keräilyn aloittamisesta
---[#DarkSeaGreen] Vastaanota kuittaus keräilyn aloittamisesta
---[#DarkSeaGreen] Poimi tilausnumero siirtolistasta
---[#DarkSeaGreen] Poimi asiakkaan sähköpostiosoite siirtolistasta
---[#DarkSeaGreen] Poimi tilauksen sisältö siirtolistasta
---[#DarkSeaGreen] Luo sähköpostiviesti valmiilla pohjalla
---[#DarkSeaGreen] Lähetä sähköposti asiakkaalle
++[#Ivory] Lähetä rahtitilaus rahtiyhtiön API:iin
+++[#Ivory] Ota siirtolista vastaan frontendistä
+++[#Ivory] Poimi asiakkaan yhteystiedot siirtolistasta
+++[#Ivory] Ominaisuus: Laske tilauksen paino ja tilavuus
+++[#Ivory] Poimi tilauksen paino ja tilavuus siirtolistasta
+++[#Ivory] Luo rahtitilaus
+++[#Ivory] Lähetä rahtitilaus rahtiyhtiön API:iin
+++[#Ivory] Vastaanota rahtikirjan numero
+++[#Ivory] Linkitä rahtikirjan numero ja siirtolista toisiinsa
++[#GoldenRod] Lähetä viesti asiakkaalle rahtitilauksesta
+++[#GoldenRod] Vastaanota rahtiyhtiön vahvistus rahtitilauksesta
+++[#GoldenRod] Poimi rahtikirjan numero ja siihen liittyvä siirtolistan numero
+++[#GoldenRod] Poimi asiakkaan sähköpostiosoite siirtolistasta
+++[#GoldenRod] Luo sähköpostiviesti valmiilla pohjalla
+++[#GoldenRod] Lähetä sähköposti asiakkaalle
++[#Gainsboro] Laske tilauksen paino ja tilavuus
+++[#Gainsboro] Hae tuotekuvauksesta paino
+++[#Gainsboro] Hae tuotekuvauksesta tilavuus
+++[#Gainsboro] Laske kpl * paino ja kpl* tilavuus
+++[#Gainsboro] Lisää tilauksen paino ja tilavuus siirtolistaan
@endmindmap
```

<br>

# Toiminnalliset vaatimukset

Alla olevassa taulukossa on esitetty sovellukseen kohdistuvat toiminnalliset vaatimukset sekä ominaisuudet, joissa ne toteutuvat.

| Toiminnallisen vaatimuksen kuvaus | Toiminnallinen ominaisuus |
| -: | :- |
| Käyttäjä voi kirjautua henkilökortilla | [Kirjaudu sisään](#Frontend) |
| Käyttäjä voi kirjautua salasanalla ja | [Kirjaudu sisään](#Frontend) |
| Sovellus vastaanottaa xml-tiedoston verkkokaupasta | [Lähetä ilmoitus uudesta siirtolistasta kaikkiin keräilypäätteisiin](#backend) |
| Sovellus ilmoitta uudesta siirtolistasta | [Lähetä ilmoitus uudesta siirtolistasta kaikkiin keräilypäätteisiin](#backend) |
| Sovelluksella pitää voida kuitata siirtolista työnalle | [Perusnäkymä](#frontend) |
| Sovelluksella pitää voida keräillä tilaus | [Keräilynäkymä](#frontend) |
| Sovellus tuottaa keräilystä siirtotiedoston XML-muodossa | [Keräilynäkymä](#frontend) |
| Tuotteiden keräilyssä pitää käyttää viivakoodeja | [Lue viivakoodi](#frontend) |
| Sovelluksessa tulee olla mahdollisuus vaihtaa kieltä | [Asetukset näkymä](#frontend) |
| Salasana pitää voida vaihtaa | [Asetukset näkymä](#frontend) |
| Sovelluksen pop-upeille on/off vaihtoehto | [Asetukset näkymä](#frontend) |
| Keräily pitää voida keskeyttää | [Keräilynäkymä](#frontend) |
| Sovelluksen pitää kertoa keräiltävän tuotteen hyllypaikka | [Keräilynäkymä](#frontend) |
| Jos tuotetta ei löydy, siitä pitää voida ilmoittaa | [Keräilynäkymä](#frontend) |
| Sovelluksen pitää ilmoittaa jos viivakoodin tuotetta ei löydy siirtolistasta | [Lue viivakoodi](#frontend) |
| Sovelluksen tulee ilmoittaa kun kaikki tuotteet on keräilty | [Keräilynäkymä](#frontend) |
| Sovelluksen pitää lähettää tilaajalle viesti keräilyn aloittamisesta | [Lähetä viesti asiakkaalle keräilyn aloittamisesta](#backend) |
| Kun tilaus on keräilty, sovellus tilaa rahdin | [Lähetä rahtitilaus rahtiyhtiön API:iin](#backend) |
| Sovelluksen tulee lähettää tilaajalle viesti rahtitilauksesta | [Lähetä viesti asiakkaalle rahtitilauksesta](#backend) |
| Sovelluksen tulee nostaa keräämättömät tuotteet listauksen alkuun | [Keräilynäkymä](#frontend) |
| Sovelluksen tulee järjestää keräiltävät tuotteet hyllypaikan sijainnin mukaan | [Keräilynäkymä](#frontend) |

<br>

# Käyttöliittymänäkymä

<br>
<br>
<br>
<br>

# Ketterän kehittämisen käyttötarinat

Alla olevassa taulukossa on esitetty käyttötarinat ja niiden prioriteetti kehityksessä. Prioriteetti P1 on korkeimman prioriteetin luokka ja P5 on matalimman prioriteetin luokka.

| Prioriteetti | Käyttötarina |
| -: | :- |
| P1 | Käyttäjänä haluan voida kirjautua sovellukseen, jotta voin aloittaa keräilyn. |
| P1 | Käyttäjänä haluan voida kuitata uuden keräilytehtävän, jotta voin aloittaa keräilyn. |
| P1 | Käyttäjänä haluan voida skannata tuotteen viivakoodin, jotta voin varmistaa keräilyn oikeellisuuden. |
| P1 | Käyttäjänä haluan voida seurata keräilyn tilaa, jotta voin varmistaa sen onnistuneen suorittamisen. |
| P2 | Käyttäjänä haluan voida keskeyttää keräilyn tarvittaessa. |
| P2 | Käyttäjänä haluan voida valita, että tuotetta ei löydy varastosta, jos näin on. |
| P2 | Käyttäjänä haluan, että sovellus ilmoittaa kun kaikki tuotteet on keräilty. |
| P2 | Käyttäjänä haluan, että sovellus ilmoittaa jos luen väärän tuotteen viivakoodin. | 
| P3 | Yrityksen omistajana haluan, että tilauksessa olevan tuotteen puuttuminen varastosta aiheuttaa automaattisen ilmoituksen haluttuun sähköpostiin. |
| P4 | Käyttäjänä haluan voida lähettää kuljetustilauksen kuljetusliikkeelle. |
| P4 | Käyttäjänä haluan että sovellus kertoo keräiltävien tuotteiden hyllypaikat. |
| P5 | Käyttäjänä haluan että voin määrittää sovelluksen pop-up viestit halutessani pois päältä. |
| P4 | As a user I wan't to be able to change language to english. |
| P5 | Käyttäjänä haluan että sovellus listaa siirtää keräillyt tuotteet kerättävien listan pohjalle. |
| P5 | Käyttäjänä haluan että sovellus järjestää keräiltävien tuotteiden listan, tuotteiden hyllypaikan mukaan, minimoiden kuljetun matkan. |

<br>

# Tekniset vaatimukset

Käyttöjärjestelmätuki: Sovelluksen tulee toimia Android-ympäristössä. Sovellus tehdään ensisijaisesti Zebra Technologiesin viivakoodinlukijoille, joissa on tällä hetkellä Android 10 käyttöjärjestelmä.

Kehitystyökalut: Kotlin-ohjelmointikieli ja Android Studio kehitysympäristö tai React Native.

Tietokanta: Tietokanta tallennetaan ulkoiseen palveluun ja sitä käytetään REST-rajapinnan avulla. Käytettävä tietokantasovellus on valittavissa vapaasti.

Ulkoiset rajapinnat: Mahdollisuus käyttää REST-rajapintoja verkkopalveluiden käyttämiseen.

Käyttöliittymäsuunnittelu: Käyttöliittymäsuunnittelu toteutetaan Material Design -ohjeiden mukaisesti.

Dokumentaatio: Palvelun tulee sisältää kattava dokumentaatio, joka sisältää käyttöohjeet, tekniset tiedot ja sovelluksen arkkitehtuurikuvauksen.

Palvelun tulee myös täyttää Android-sovelluksille asetetut turvavaatimukset, kuten käyttäjätietojen suojaus ja tietojen salaus.

Palvelun tulee myös olla skaalautuva ja kykenevä käsittelemään suuria datamääriä.

<br>
<br>
<br>
<br>

# Mahdollisesti jonkin otsikon alle tuleva Chat GPT:n diibadaaba :)

Sprinttien suunnittelu ja toteutus: Jokaisessa sprintissä sovitaan kehitettävistä ominaisuuksista, priorisoidaan tehtävät ja jaetaan työt kehittäjien kesken. 

Tämän jälkeen kehittäjät toteuttavat sovitut tehtävät tiimin sisäisissä palavereissa.

Asiakaspalautteen kerääminen: Kehitystiimi kerää jatkuvasti asiakaspalautetta kehitettävästä sovelluksesta. Palautetta käytetään hyväksi sprinttien suunnittelussa ja sovelluksen kehitystyössä.

Tuotteen julkaisu: Kun sovelluksen kehitystyö on valmis, tuote julkaistaan. 

Julkaisun yhteydessä tarkistetaan, että sovellus täyttää kaikki sille asetetut vaatimukset ja että se toimii virheettömästi.

Käyttöönotto: Sovelluksen käyttöönotossa huolehditaan siitä, että käyttäjät saavat riittävästi ohjeistusta ja tukea sovelluksen käyttöön. 

Käyttöönotossa huomioidaan myös tarvittavat integraatiot ja käyttöliittymien yhteensopivuus.

Ylläpito: Sovelluksen julkaisun jälkeen sen ylläpito on tärkeä osa kehitystyötä. 

Kehitystiimi vastaa sovelluksen päivityksistä ja huolehtii, että sovellus pysyy turvallisena ja toimii virheettömästi.

Jatkuva kehittäminen: Ketterän kehityksen periaatteisiin kuuluu jatkuva kehittäminen ja parantaminen. 

Kehitystiimi seuraa jatkuvasti sovelluksen käyttöä ja kerää palautetta käyttäjiltä. 

Palautteen perusteella sovellusta kehitetään edelleen ja pyritään parantamaan sen toimivuutta ja käyttökokemusta.