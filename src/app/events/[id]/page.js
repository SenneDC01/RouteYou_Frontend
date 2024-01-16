import React from 'react';
import styles from './DetailPage.module.scss';
import '@/app/assets/globals.css';
import DetailColumn from '@/components/organisms/detail-column/DetailColumn';
import { redirect } from 'next/navigation';
import { eventDetail } from '@/services/EventService';

const getEventInfo = async (eventId) => {
  try {
    const response = await eventDetail(eventId);

    if (response.code !== 200) {
      redirect('/');
    }
    return response;
  } catch (error) {
    redirect('/');
  }
};

export async function generateMetadata({ params }) {
  const { event } = await getEventInfo(params.id);

  return {
    title: `${event.name} - RouteYou`,
    description: `Event: ${event.name} - Discover the route and register for this great event on RouteYou.`,
    keywords: 'RouteYou, event, routes, registration',
  };
}

export default async function Page({ params }) {
  const { event } = await getEventInfo(params.id);

  return (
    <div className={styles.detailPage}>
      <DetailColumn event={event} />
      <iframe
        title="Interactive map with the route of the event"
        className={styles.map}
        key="1"
        id="iframe"
        src={`https://plugin.routeyou.com/routeviewer/basic/?key=25578206faf6c7cd92fc96526177379d&language=en&params.route.id=${event.routes[0].route_data.id}&tabPane.position=null&map.api.key=AIzaSyAjwTWF01bBdAC3jSjbfdLGNuj5G6SVXq0&map.route.line.normal.standard.fill.width=3&map.route.line.normal.standard.opacity=1&map.type=terrain&map.show.startControl=true&map.show.instruction=true&map.show.positionData=true&`}
        allow="geolocation"
        allowFullScreen
      ></iframe>
    </div>
  );
}
