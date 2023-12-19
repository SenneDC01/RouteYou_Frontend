import React from "react";
import styles from "./Toegankelijkheidsverklaring.module.scss";
import BigTitle from "@/components/atoms/big-title/BigTitle";
import RegularText from "@/components/atoms/regular-text/RegularText";
import TextLink from "@/components/atoms/text-link/TextLink";
import BoldText from "@/components/atoms/bold-text/BoldText";

export function generateMetadata() {
  return {
    title: "Toegankelijkheidsverklaring - RouteYou",
    description: "Toegankelijkheidsverklaring van RouteYou.",
    keywords:
      "RouteYou, toegankelijkheid, verklaring, toegankelijkheidsverklaring",
  };
}

export default function Toegankelijkheidsverklaring() {
  return (
    <div className={styles.container} data-testid="toegankelijkheids-verklaring">
      <div>
        <BigTitle>Toegankelijkheidsverklaring</BigTitle>
        <RegularText>
          RouteYou, verbindt zich ertoe deze sites toegankelijk te maken, in
          overeenstemming met de volgende wetgeving: Bestuursdecreet van 7
          december 2018 (Vlaanderen).
        </RegularText>

        <RegularText>
          Deze toegankelijkheidsverklaring is van toepassing op:
        </RegularText>
        <ul>
          <li>
            <TextLink href="/">Homepagina</TextLink>
          </li>
          <li>
            <TextLink href="/events/1">Eventpagina</TextLink>
          </li>
        </ul>
      </div>

      <div>
        <BoldText>Nalevingsstatus</BoldText>
        <RegularText>
          Deze sites zijn gedeeltelijk conform als gevolg van de hieronder
          vermelde non-conformiteiten en vrijstellingen.
        </RegularText>
      </div>

      <div>
        <BoldText>Uw verklaring voorbereiden</BoldText>
        <RegularText>
          Er is een externe toegankelijkheidsaudit uitgevoerd. Deze audit was
          een diepgaande analyse. U kunt het verslag hier lezen:
        </RegularText>
        <TextLink href="/evaluatierapport">evaluatierapport</TextLink>
      </div>

      <div>
        <BoldText>Onevenredige last</BoldText>
        <div>
          <RegularText>
            Homepagina en detail pagina van een event zijn toegankelijk.
          </RegularText>
        </div>
      </div>

      <div>
        <BoldText>Niet-toegankelijke inhoud</BoldText>
        <div>
          <RegularText>
            Er zijn slechts 2 pagina&apos;s toegankelijk.
          </RegularText>

          <RegularText>
            Op kaarten is het niet mogelijk om te navigeren met toetsenbord.
          </RegularText>
        </div>
      </div>

      <div>
        <BoldText>Voorgestelde alternatieven</BoldText>
        <div>
          <p>/</p>
        </div>
      </div>

      <div>
        <BoldText>Contactgegevens</BoldText>
        <RegularText>
          Als u vragen of opmerkingen heeft over de toegankelijkheid van onze
          website/applicatie, kunt u contact opnemen met :
        </RegularText>
        <div>
          <TextLink href="mailto:info@routeyou.com">info@routeyou.com</TextLink>
        </div>
      </div>

      <div>
        <BoldText>Verbeteringsplan</BoldText>
        <RegularText>
          Toegankelijkheid aanbieden voor screenreaders en toetsenbord
          functionaliteiten.
        </RegularText>
        <RegularText>Deze verklaring is op 21/11/2023 opgesteld.</RegularText>
        <RegularText>
          De laatste herziening van de verklaring vond plaats op 21/11/2023
        </RegularText>
      </div>
    </div>
  );
}
