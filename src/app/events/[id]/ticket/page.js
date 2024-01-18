import { redirect } from 'next/navigation';
import styles from './StylesTicketPage.module.scss';
import DetailColumn from '@/components/organisms/detail-column/DetailColumn';
import { eventTicket } from '@/services/EventService';
import MediumTitle from '@/components/atoms/medium-title/MediumTitle';
import SubText from '@/components/atoms/sub-text/SubText';
import Image from 'next/image';

const getEventTicket = async (eventId) => {
  try {
    const ticketResponse = await eventTicket(eventId);

    if (ticketResponse.code !== 200) {
      redirect('/');
    }
    return { ...ticketResponse.data };
  } catch (error) {
    redirect('/');
  }
};

export async function generateMetadata({ params }) {
  const event = await getEventTicket(params.id);

  return {
    title: `Ticket ${event.name} - RouteYou`,
    description: `Ticket: ${event.name} - Your ticket for this great event on RouteYou.`,
    keywords: 'RouteYou, ticket, event, routes',
  };
}

export default async function TicketPage({ params }) {
  const event = await getEventTicket(params.id);

  return (
    <div className={styles.page}>
      <div className={styles.eventInfo}>
        <DetailColumn event={event} />
      </div>

      <section className={styles.ticketInfo}>
        <div>
          <MediumTitle>{event.name} ticket</MediumTitle>
          <SubText>Let the event coördinator scan your ticket</SubText>
        </div>
        <Image
          src={event.qr_code}
          alt={`Ticket of ${event.name} event`}
          width={300}
          height={300}
          className={styles.ticketImage}
        />
      </section>
    </div>
  );
}
