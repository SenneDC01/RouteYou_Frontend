// pages/index.js or any other component file
"use client";
import React from "react";
import styles from "./styles.module.scss";

const Page = () => {
  return (
    <div className={styles.container}>
      <h1>Toegankelijkheidsverklaring</h1>
      <p>
        RouteYou, verbindt zich ertoe deze sites toegankelijk te maken, in
        overeenstemming met de volgende wetgeving: Bestuursdecreet van 7
        december 2018 (Vlaanderen).
      </p>
      <p>Deze toegankelijkheidsverklaring is van toepassing op :</p>
      <ul>
        <li>
          Website:{" "}
          <a href="https://routeyou1-atp-2324.com">
            https://routeyou1-atp-2324.com
          </a>
        </li>
        <li>
          Website:{" "}
          <a href="https://routeyou1-atp-2324.com/events/1">
            https://routeyou1-atp-2324.com/events/1
          </a>
        </li>
      </ul>
      <h2>Nalevingsstatus</h2>
      <p>
        Deze sites zijn gedeeltelijk conform als gevolg van de hieronder
        vermelde non-conformiteiten en vrijstellingen.
      </p>
      <h2>Uw verklaring voorbereiden</h2>
      <p>
        Er is een externe toegankelijkheidsaudit uitgevoerd. Deze audit was een
        diepgaande analyse. U kunt het verslag hier lezen:{" "}
        <a href="https://routeyou1-atp-2324.com/evaluatierapport">
          https://routeyou1-atp-2324.com/evaluatierapport
        </a>
      </p>
      <h2>Onevenredige last</h2>
      <div>
        <p>
          &nbsp;Homepagina en detail pagina van een event zijn toegankelijk.
        </p>
      </div>
      <h2>Niet-toegankelijke inhoud</h2>
      <div>
        <p>Er zijn slechts 2 pagina's toegankelijk.</p>

        <p>Op kaarten is het niet mogelijk om te navigeren met toetsenbord.</p>
      </div>
      <h2>Voorgestelde alternatieven</h2>
      <div>
        <p>/</p>
      </div>
      <h2>Contactgegevens</h2>
      <p>
        Als u vragen of opmerkingen heeft over de toegankelijkheid van onze
        website/applicatie, kunt u contact opnemen met :
      </p>
      <div>
        <p>
          <a href="mailto:info@routeyou.com">info@routeyou.com</a>
        </p>
      </div>
      <p>
        Als de bovenstaande service niet reageert, kunt u contact opnemen met de
        volgende controle-instantie:
      </p>
      <div>
        <p>
          <a href="mailto:info@routeyou.com">info@routeyou.com</a>
        </p>
      </div>
      <h2>Verbeteringsplan</h2>
      <div>
        <p>
          Toegankelijkheid aanbieden voor screenreaders en toetsenbord
          functionaliteiten.
        </p>
      </div>
      <div></div>
      <p>Deze verklaring is op 21/11/2023 opgesteld.</p>
      <div></div>
      <p>De laatste herziening van de verklaring vond plaats op 21/11/2023</p>
    </div>
  );
};

export default Page;
