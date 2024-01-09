import BigTitle from '@/components/atoms/big-title/BigTitle';
import RegularText from '@/components/atoms/regular-text/RegularText';
import styles from './PrivacyDeclaration.module.scss';
import BoldText from '@/components/atoms/bold-text/BoldText';

export function generateMetadata() {
  return {
    title: 'Privacy declaration - RouteYou',
    description: 'Privacy declaration of RouteYou.',
    keywords: 'RouteYou, privacy, declaration, privacy declaration',
  };
}

export default function PrivacyDeclaration() {
  return (
    <div className={styles.page} data-testid="privacy-verklaring">
      <BigTitle>Privacy Declaration</BigTitle>
      <br></br>

      <RegularText>Last updated on 14/12/2023</RegularText>
      <RegularText>
        Welcome to RouteYou! We appreciate the trust you place in us by using
        our application and make every effort to protect your privacy. This
        privacy policy explains how we collect, use, share, and protect
        information related to our application and related services.
      </RegularText>
      <br></br>
      <BoldText>1. Collected Information</BoldText>
      <RegularText>
        1.1 Account Information: When creating an account, we collect necessary
        information such as your name, email address, and any other relevant
        details.
      </RegularText>
      <RegularText>
        1.2 Event Information: When you create an event, we collect information
        about the event, including the associated route(s), date, location, and
        other relevant details.
      </RegularText>
      <RegularText>
        1.3 Payment Information: If you choose to participate in paid events, we
        collect the necessary payment information to complete the transaction.
      </RegularText>
      <RegularText>
        1.4 Participant Information: During registration, we collect information
        about participants, including their name and contact details.
      </RegularText>
      <br></br>

      <BoldText>2. Use of Information</BoldText>
      <RegularText>
        2.1 We use the collected information to provide our services, manage
        events, process payments, and keep you informed about relevant updates.
      </RegularText>
      <RegularText>
        2.2 Your email address may be used to send you information about the
        events you&apos;ve registered for, as well as promotional and
        informational messages about our services. You can unsubscribe from such
        emails at any time.
      </RegularText>
      <br></br>

      <BoldText>3. Sharing of Information</BoldText>
      <RegularText>
        3.1 We do not share your information with third parties, except when
        necessary for the execution of our services (e.g., with payment
        processors).
      </RegularText>
      <RegularText>
        3.2 QR codes are intended for use by the event organizer and are not
        publicly shared.
      </RegularText>
      <br></br>

      <BoldText>4. Security</BoldText>
      <RegularText>
        4.1 We take reasonable measures to ensure the security of your
        information, but please note that no method of data transfer over the
        internet or electronic storage is 100% secure.
      </RegularText>
      <br></br>

      <BoldText>5. Your Rights</BoldText>
      <RegularText>
        5.1 You have the right to access, correct, delete, or transfer your
        personal data.
      </RegularText>
      <br></br>

      <BoldText>6. Contact Information</BoldText>
      <RegularText>
        For questions about this privacy policy or your personal data, contact
        us at info@routeyou.com.
      </RegularText>
      <br></br>

      <RegularText>Thank you for trusting RouteYou!</RegularText>
    </div>
  );
}
