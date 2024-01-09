import React from 'react';
import styles from './AccessibilityStatement.module.scss';
import BigTitle from '@/components/atoms/big-title/BigTitle';
import RegularText from '@/components/atoms/regular-text/RegularText';
import TextLink from '@/components/atoms/text-link/TextLink';
import BoldText from '@/components/atoms/bold-text/BoldText';

export function generateMetadata() {
  return {
    title: 'Accessibility statement - RouteYou',
    description: 'Accessibility statement of RouteYou.',
    keywords: 'RouteYou, accessibility, statement, accessibility statement',
  };
}

export default function AccessibilityStatement() {
  return (
    <div
      className={styles.container}
      data-testid="toegankelijkheids-verklaring"
    >
      <div>
        <BigTitle>Accessibility Statement</BigTitle>
        <RegularText>
          RouteYou is committed to making these sites accessible in accordance
          with the following legislation: Administrative Decree of December 7,
          2018 (Flanders).
        </RegularText>

        <RegularText>This accessibility statement applies to:</RegularText>
        <ul>
          <li>
            <TextLink href="/">Homepage</TextLink>
          </li>
          <li>
            <TextLink href="/events/1">Event Page</TextLink>
          </li>
        </ul>
      </div>

      <div>
        <BoldText>Compliance Status</BoldText>
        <RegularText>
          These sites are partially compliant due to the non-conformities and
          exemptions listed below.
        </RegularText>
      </div>

      <div>
        <BoldText>Preparing Your Statement</BoldText>
        <RegularText>
          An external accessibility audit has been conducted. This audit was a
          thorough analysis. You can read the report here:
        </RegularText>
        <TextLink href="/evaluation-report">evaluation report</TextLink>
      </div>

      <div>
        <BoldText>Disproportionate Burden</BoldText>
        <div>
          <RegularText>
            The homepage and event detail page are accessible.
          </RegularText>
        </div>
      </div>

      <div>
        <BoldText>Non-Accessible Content</BoldText>
        <div>
          <RegularText>Only 2 pages are accessible.</RegularText>

          <RegularText>
            It is not possible to navigate on maps using the keyboard.
          </RegularText>
        </div>
      </div>

      <div>
        <BoldText>Proposed Alternatives</BoldText>
        <div>
          <p>/</p>
        </div>
      </div>

      <div>
        <BoldText>Contact Information</BoldText>
        <RegularText>
          If you have questions or comments about the accessibility of our
          website/application, you can contact:
        </RegularText>
        <div>
          <TextLink href="mailto:info@routeyou.com">info@routeyou.com</TextLink>
        </div>
      </div>

      <div>
        <BoldText>Improvement Plan</BoldText>
        <RegularText>
          Provide accessibility for screen readers and keyboard functionalities.
        </RegularText>
        <RegularText>This statement was prepared on 21/11/2023.</RegularText>
        <RegularText>
          The last revision of the statement took place on 21/11/2023.
        </RegularText>
      </div>
    </div>
  );
}
