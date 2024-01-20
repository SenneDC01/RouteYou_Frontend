'use client';
import React, { useEffect } from 'react';
import '@/app/assets/globals.css';
import ButtonLink from '@/components/atoms/button-link/ButtonLink';
import styles from './DetailColumn.module.scss';
import BigTitle from '@/components/atoms/big-title/BigTitle';
import SubText from '@/components/atoms/sub-text/SubText';
import RegularText from '@/components/atoms/regular-text/RegularText';
import ViewMore from '@/components/molecules/view-more/ViewMore';
import ArrowRightSVG from '@/utils/icons/ArrowRightSVG';
import Image from 'next/image';

export default function DetailColumn({ event }) {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');

    script.setAttribute(
      'src',
      'https://connect.facebook.net/nl_NL/sdk.js#xfbml=1&version=v18.0'
    );
    script.setAttribute('async', 'async');
    script.setAttribute('defer', 'defer');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('nonce', 'PdGt3vQp');
    head.appendChild(script);
  });

  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    window.location.href
  )}&src=sdkpreparse`;

  return (
    <section className={styles.column} data-testid="detail_column">
      <div className={styles.imageContainer}>
        <Image
          src={event.image_url}
          priority={true}
          alt=""
          className={styles.image}
          width={400}
          height={400}
        />
      </div>
      <div className={styles.columnContent}>
        <BigTitle>{event.name}</BigTitle>
        <SubText>
          {event.author} <br />
          {event.start_date}
        </SubText>
        <RegularText>{event.description}</RegularText>
        <ViewMore link={`/events/${event.id}/posts`}>Posts</ViewMore>
        <ViewMore link={`/events/${event.id}/pictures`}>Pictures</ViewMore>
        {event.routes?.map((e, index) => {
          return (
            <ViewMore key={index} link={e.route_data.uri}>
              Route {index + 1}
            </ViewMore>
          );
        })}
        <div className={styles.row}>
          <div
            className={styles.shareButton}
            data-href={window.location.href}
            data-layout="button"
            data-size=""
          >
            <a target="_blank" href={url} className="fb-xfbml-parse-ignore">
              Share to Facebook
            </a>
          </div>

          {(!('relation' in event) ||
            event.relation === null ||
            event.relation === 'INTERESTED') && (
            <ButtonLink
              link={`/events/${event.id}/signup`}
              icon={<ArrowRightSVG />}
              ariaLabel="Go to the sign-up page of this event"
            >
              Sign-up
            </ButtonLink>
          )}
          {'relation' in event && event.relation === 'OWNER' && (
            <ButtonLink
              link={`/events/${event.id}/manage-event`}
              icon={<ArrowRightSVG />}
              ariaLabel="Go to the manage page of this event"
            >
              Manage
            </ButtonLink>
          )}
          {'relation' in event && event.relation === 'SIGNED_UP' && (
            <ButtonLink
              link={`/events/${event.id}/ticket`}
              icon={<ArrowRightSVG />}
              ariaLabel="Go to the ticket page of this event"
            >
              Ticket
            </ButtonLink>
          )}
        </div>
      </div>
    </section>
  );
}
