import BigTitle from "@/atoms/BigTitle";
import RegularText from "@/atoms/RegularText";
import styles from "./StylesPrivacyVerklaring.scss";
import BoldText from "@/atoms/BoldText";

export default function Page() {
  return (
    <div className={styles.page} style={{ maxWidth: 1100, margin: '2rem auto' }}>
      <BigTitle>Privacyverklaring</BigTitle>
      <br></br>

      <RegularText>Laatst bijgewerkt op 21/11/2023</RegularText>
      <RegularText>
        Welkom bij RouteYou! Wij waarderen het vertrouwen dat je in ons stelt
        door onze applicatie te gebruiken en doen er alles aan om je privacy te
        beschermen. Deze privacyverklaring legt uit hoe we informatie
        verzamelen, gebruiken, delen en beschermen in verband met onze
        applicatie en gerelateerde diensten.
      </RegularText>
      <br></br>
      <BoldText>1. Verzamelde informatie</BoldText>
      <RegularText>
        1.1 Accountinformatie: Bij het aanmaken van een account verzamelen we de
        nodige informatie, zoals je naam, e-mailadres en eventuele andere
        relevante gegevens.
      </RegularText>
      <RegularText>
        1.2 Evenementsinformatie: Wanneer je een evenement aanmaakt, verzamelen
        we informatie over het evenement, inclusief de route(s) die eraan zijn
        gekoppeld, de datum, de locatie en andere relevante details.
      </RegularText>
      <RegularText>
        1.3 Betalingsinformatie: Als je ervoor kiest om deel te nemen aan
        betalende evenementen, verzamelen we de benodigde betalingsinformatie om
        de transactie te voltooien.
      </RegularText>
      <RegularText>
        1.4 Deelnemersinformatie: Bij inschrijving verzamelen we informatie over
        de deelnemers, inclusief hun naam en contactgegevens.
      </RegularText>
      <br></br>

      <BoldText>2. Gebruik van informatie</BoldText>
      <RegularText>
        2.1 We gebruiken de verzamelde informatie om onze diensten aan te
        bieden, evenementen te beheren, betalingen te verwerken, en om je op de
        hoogte te houden van relevante updates.
      </RegularText>
      <RegularText>
        2.2 Je e-mailadres kan worden gebruikt om je informatie te sturen over
        de evenementen waarvoor je je hebt ingeschreven, evenals promotionele en
        informatieve berichten over onze diensten. Je kunt je op elk moment
        afmelden voor dergelijke e-mails.
      </RegularText>
      <br></br>

      <BoldText>3. Delen van informatie</BoldText>
      <RegularText>
        3.1 We delen je informatie niet met derden, behalve indien nodig voor de
        uitvoering van onze diensten (bijvoorbeeld met betalingsverwerkers).
      </RegularText>
      <RegularText>
        3.2 De QR-codes zijn bedoeld voor gebruik door de organisator van het
        evenement en worden niet openbaar gedeeld.
      </RegularText>
      <br></br>

      <BoldText>4. Beveiliging</BoldText>
      <RegularText>
        4.1 We nemen redelijke maatregelen om de veiligheid van je informatie te
        waarborgen, maar houd er rekening mee dat geen enkele methode van
        gegevensoverdracht via internet of elektronische opslag 100% veilig is.
      </RegularText>
      <br></br>

      <BoldText>5. Jouw rechten</BoldText>
      <RegularText>
        5.1 Je hebt het recht om toegang te krijgen tot je persoonlijke
        gegevens, deze te corrigeren, te verwijderen of over te dragen.
      </RegularText>
      <br></br>

      <BoldText>6. Contactgegevens</BoldText>
      <RegularText>
        Voor vragen over deze privacyverklaring of je persoonlijke gegevens,
        neem contact met ons op via [jouw contactgegevens].
      </RegularText>
      <br></br>

      <RegularText>Bedankt voor het vertrouwen in RouteYou!</RegularText>
    </div>
  );
}
