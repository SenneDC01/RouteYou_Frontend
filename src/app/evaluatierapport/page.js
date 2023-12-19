export function generateMetadata() {
  return {
    title: 'Evaluatierapport - RouteYou',
    description: 'Evaluatierapport van RouteYou.',
    keywords:
      'RouteYou, evaluatie, rapport, evaluatierapport, WCAG, toegankelijkheid',
  };
}

export default function Evaluatierapport() {
  return (
    <div data-testid="evaluatierapport">
      <main>
        <h1>Evaluatierapport voor RouteYou Events</h1>
        <div>
          <h2>Over deze evaluatie</h2>
          <dl>
            <dt>Rapport auteur</dt>
            <dd>Studenten RouteYou Team 1</dd>
            <dt>Evaluatie opdrachtgever</dt>
            <dd>Odisee</dd>
            <dt>Evaluatiedatum</dt>
            <dd>Tue Nov 21 2023</dd>
          </dl>
        </div>
        <div>
          <h2>Managementsamenvatting</h2>
          <div>
            <span>Niet ingevuld</span>
          </div>
        </div>
        <div>
          <h2>Scope van de evaluatie</h2>
          <dl>
            <dt>Website naam</dt>
            <dd>http://10.129.23.204:3000/</dd>
            <dt>Scope van de website</dt>
            <dd>
              http://10.129.23.204:3000/ http://10.129.23.204:3000/events/1
            </dd>
            <dt>WCAG Versie</dt>
            <dd>2.1</dd>
            <dt>Conformiteitsdoel</dt>
            <dd>AA</dd>
            <dt>Basisniveau van toegankelijkheid-ondersteuning</dt>
            <dd>FireFox met NVDA Chrome met NVDA</dd>
            <dt>Verdere onderzoeksvereisten</dt>
            <dd>
              De evaluatie zal gebeuren op 2 pagina&apos;s, de homepagina en
              detail pagina van een event.
            </dd>
          </dl>
        </div>
        <h2>Uitgebreide toetsresultaten</h2>
        <h3>Samenvatting</h3>
        <p>Gerapporteerd over 50 van 50 WCAG 2.1 AA Success Criteria.</p>
        <ul>
          <li>
            <span>15</span> <span>Voldoende</span>
          </li>
          <li>
            <span>0</span> <span>Onvoldoende</span>
          </li>
          <li>
            <span>0</span> <span>Onbekend</span>
          </li>
          <li>
            <span>35</span> <span>Niet van toepassing</span>
          </li>
          <li>
            <span>0</span> <span>Niet getoetst</span>
          </li>
        </ul>
        <h3>Alle resultaten</h3>
        <h4>1 Waarneembaar</h4>
        <h5 id="guideline-11">1.1 Tekstalternatieven</h5>
        <table aria-labelledby="guideline-11">
          <tbody>
            <tr>
              <th scope="col">Success Criterium</th>
              <th scope="col">Uitkomst</th>
              <th scope="col">Bevindingen</th>
            </tr>
            <tr>
              <th scope="row" id="criterion-111">
                1.1.1: Niet-tekstuele content
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Voldoende
                </p>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <h5 id="guideline-12">1.2 Op tijd gebaseerde media</h5>
        <table aria-labelledby="guideline-12">
          <tbody>
            <tr>
              <th scope="col">Success Criterium</th>
              <th scope="col">Uitkomst</th>
              <th scope="col">Bevindingen</th>
            </tr>
            <tr>
              <th scope="row" id="criterion-121">
                1.2.1: Louter-geluid en louter-videobeeld (vooraf opgenomen)
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-122">
                1.2.2: Ondertitels voor doven en slechthorenden (vooraf
                opgenomen)
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-123">
                1.2.3: Audiodescriptie of media-alternatief (vooraf opgenomen)
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-124">
                1.2.4: Ondertitels voor doven en slechthorenden (live)
              </th>
              <td>
                <h6>Hele sample</h6>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-125">
                1.2.5: Audiodescriptie (vooraf opgenomen)
              </th>
              <td>
                <h6>Hele sample</h6>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <h5 id="guideline-13">1.3 Aanpasbaar</h5>
        <table aria-labelledby="guideline-13">
          <tbody>
            <tr>
              <th scope="col">Success Criterium</th>
              <th scope="col">Uitkomst</th>
              <th scope="col">Bevindingen</th>
            </tr>
            <tr>
              <th scope="row" id="criterion-131">
                1.3.1: Info en relaties
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Voldoende
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-132">
                1.3.2: Betekenisvolle volgorde
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Voldoende
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-133">
                1.3.3: Zintuiglijke eigenschappen
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Voldoende
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-134">
                1.3.4: Weergavestand
              </th>
              <td>
                <h6>Hele sample</h6>
                <p>
                  <span>Uitkomst:</span> Voldoende
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-135">
                1.3.5: Identificeer het doel van de input
              </th>
              <td>
                <h6>Hele sample</h6>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <h5 id="guideline-14">1.4 Onderscheidbaar</h5>
        <table aria-labelledby="guideline-14">
          <tbody>
            <tr>
              <th scope="col">Success Criterium</th>
              <th scope="col">Uitkomst</th>
              <th scope="col">Bevindingen</th>
            </tr>
            <tr>
              <th scope="row" id="criterion-141">
                1.4.1: Gebruik van kleur
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Voldoende
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-142">
                1.4.2: Geluidsbediening
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-143">
                1.4.3: Contrast (minimum)
              </th>
              <td>
                <h6>Hele sample</h6>
                <p>
                  <span>Uitkomst:</span> Voldoende
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-144">
                1.4.4: Herschalen van tekst
              </th>
              <td>
                <h6>Hele sample</h6>
                <p>
                  <span>Uitkomst:</span> Voldoende
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-145">
                1.4.5: Afbeeldingen van tekst
              </th>
              <td>
                <h6>Hele sample</h6>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-1410">
                1.4.10: Reflow
              </th>
              <td>
                <h6>Hele sample</h6>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-1411">
                1.4.11: Contrast van niet-tekstuele content
              </th>
              <td>
                <h6>Hele sample</h6>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-1412">
                1.4.12: Tekstafstand
              </th>
              <td>
                <h6>Hele sample</h6>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-1413">
                1.4.13: Content bij hover of focus
              </th>
              <td>
                <h6>Hele sample</h6>
                <p>
                  <span>Uitkomst:</span> Voldoende
                </p>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <h4>2 Bedienbaar</h4>
        <h5 id="guideline-21">2.1 Toetsenbordtoegankelijk</h5>
        <table aria-labelledby="guideline-21">
          <tbody>
            <tr>
              <th scope="col">Success Criterium</th>
              <th scope="col">Uitkomst</th>
              <th scope="col">Bevindingen</th>
            </tr>
            <tr>
              <th scope="row" id="criterion-211">
                2.1.1: Toetsenbord
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Voldoende
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-212">
                2.1.2: Geen toetsenbordval
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-214">
                2.1.4: Enkel teken sneltoetsen
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <h5 id="guideline-22">2.2 Genoeg tijd</h5>
        <table aria-labelledby="guideline-22">
          <tbody>
            <tr>
              <th scope="col">Success Criterium</th>
              <th scope="col">Uitkomst</th>
              <th scope="col">Bevindingen</th>
            </tr>
            <tr>
              <th scope="row" id="criterion-221">
                2.2.1: Timing aanpasbaar
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-222">
                2.2.2: Pauzeren, stoppen, verbergen
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <h5 id="guideline-23">2.3 Toevallen en fysieke reacties</h5>
        <table aria-labelledby="guideline-23">
          <tbody>
            <tr>
              <th scope="col">Success Criterium</th>
              <th scope="col">Uitkomst</th>
              <th scope="col">Bevindingen</th>
            </tr>
            <tr>
              <th scope="row" id="criterion-231">
                2.3.1: Drie flitsen of beneden drempelwaarde
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <h5 id="guideline-24">2.4 Navigeerbaar</h5>
        <table aria-labelledby="guideline-24">
          <tbody>
            <tr>
              <th scope="col">Success Criterium</th>
              <th scope="col">Uitkomst</th>
              <th scope="col">Bevindingen</th>
            </tr>
            <tr>
              <th scope="row" id="criterion-241">
                2.4.1: Blokken omzeilen
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-242">
                2.4.2: Paginatitel
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Voldoende
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-243">
                2.4.3: Focus volgorde
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-244">
                2.4.4: Linkdoel (in context)
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-245">
                2.4.5: Meerdere manieren
              </th>
              <td>
                <h6>Hele sample</h6>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-246">
                2.4.6: Koppen en labels
              </th>
              <td>
                <h6>Hele sample</h6>
                <p>
                  <span>Uitkomst:</span> Voldoende
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-247">
                2.4.7: Focus zichtbaar
              </th>
              <td>
                <h6>Hele sample</h6>
                <p>
                  <span>Uitkomst:</span> Voldoende
                </p>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <h5 id="guideline-25">2.5 Input Modaliteiten</h5>
        <table aria-labelledby="guideline-25">
          <tbody>
            <tr>
              <th scope="col">Success Criterium</th>
              <th scope="col">Uitkomst</th>
              <th scope="col">Bevindingen</th>
            </tr>
            <tr>
              <th scope="row" id="criterion-251">
                2.5.1: Aanwijzergebaren
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-252">
                2.5.2: Aanwijzerannulering
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-253">
                2.5.3: Label in naam
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-254">
                2.5.4: Bewegingsactivering
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <h4>3 Begrijpelijk</h4>
        <h5 id="guideline-31">3.1 Leesbaar</h5>
        <table aria-labelledby="guideline-31">
          <tbody>
            <tr>
              <th scope="col">Success Criterium</th>
              <th scope="col">Uitkomst</th>
              <th scope="col">Bevindingen</th>
            </tr>
            <tr>
              <th scope="row" id="criterion-311">
                3.1.1: Taal van de pagina
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-312">
                3.1.2: Taal van onderdelen
              </th>
              <td>
                <h6>Hele sample</h6>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <h5 id="guideline-32">3.2 Voorspelbaar</h5>
        <table aria-labelledby="guideline-32">
          <tbody>
            <tr>
              <th scope="col">Success Criterium</th>
              <th scope="col">Uitkomst</th>
              <th scope="col">Bevindingen</th>
            </tr>
            <tr>
              <th scope="row" id="criterion-321">
                3.2.1: Bij focus
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Voldoende
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-322">
                3.2.2: Bij input
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-323">
                3.2.3: Consistente navigatie
              </th>
              <td>
                <h6>Hele sample</h6>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-324">
                3.2.4: Consistente identificatie
              </th>
              <td>
                <h6>Hele sample</h6>
                <p>
                  <span>Uitkomst:</span> Voldoende
                </p>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <h5 id="guideline-33">3.3 Assistentie bij invoer</h5>
        <table aria-labelledby="guideline-33">
          <tbody>
            <tr>
              <th scope="col">Success Criterium</th>
              <th scope="col">Uitkomst</th>
              <th scope="col">Bevindingen</th>
            </tr>
            <tr>
              <th scope="row" id="criterion-331">
                3.3.1: Foutidentificatie
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-332">
                3.3.2: Labels of instructies
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-333">
                3.3.3: Foutsuggestie
              </th>
              <td>
                <h6>Hele sample</h6>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-334">
                3.3.4: Foutpreventie (wettelijk, financieel, gegevens
              </th>
              <td>
                <h6>Hele sample</h6>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <h4>4 Robuust</h4>
        <h5 id="guideline-41">4.1 Compatibel</h5>
        <table aria-labelledby="guideline-41">
          <tbody>
            <tr>
              <th scope="col">Success Criterium</th>
              <th scope="col">Uitkomst</th>
              <th scope="col">Bevindingen</th>
            </tr>
            <tr>
              <th scope="row" id="criterion-411">
                4.1.1: Parsen
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-412">
                4.1.2: Naam, rol, waarde
              </th>
              <td>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" id="criterion-413">
                4.1.3: Statusberichten
              </th>
              <td>
                <h6>Hele sample</h6>
                <p>
                  <span>Uitkomst:</span> Niet van toepassing
                </p>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <h2>Sample met getoetste webpagina&amp;#39;s</h2>
        <ol>
          <li>
            <span>Home</span> - <span>http://10.129.23.204:3000/</span>
          </li>
          <li>
            <span>Event Detail</span> -
            <span>http://10.129.23.204:3000/events/1</span>
          </li>
        </ol>
        <h2>Webtechnologie</h2>
        <p>HTML,CSS,WAI-ARIA,JavaScript,SVG,React</p>
        <h2>Onderbouwing van de evaluatie</h2>
        <p>Niet ingevuld</p>
      </main>
    </div>
  );
}
