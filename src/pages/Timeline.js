import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";
import { mdiAccountCheckOutline } from "@mdi/js";
import { mdiCheckOutline } from "@mdi/js";
import { mdiGamepadVariant } from "@mdi/js";
import { mdiPageLast } from "@mdi/js";
import { mdiOfficeBuildingOutline } from "@mdi/js";
import { mdiAccountGroup } from "@mdi/js";
import { mdiTrophyAward } from "@mdi/js";
function Timeline() {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(238,44,30)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(238,44,30)" }}
          date="4th December"
          iconStyle={{ background: "rgb(238,44,30)", color: "#fff" }}
          icon={
            <Icon
              path={mdiAccountCheckOutline}
              title="account-check-outline"
              size={1}
              horizontal
              vertical
              rotate={90}
              color="#fff"
              spin
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Final day for team registration only through CR/SR. If more than one
            team wishes to register, we take their information to schedule an
            exclusive competition for them.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(255,196,13)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255,196,13)" }}
          date="5th/6th December"
          iconStyle={{ background: "rgb(255,196,13)", color: "#fff" }}
          icon={
            <Icon
              path={mdiCheckOutline}
              title="account-check-outline"
              size={1}
              horizontal
              vertical
              rotate={90}
              color="#fff"
              spin
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Conduction of class-wise competitions to get final teams for the
            main competition
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="7th December "
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <Icon
              path={mdiGamepadVariant}
              title="account-check-outline"
              size={1}
              horizontal
              vertical
              rotate={90}
              color="#fff"
              spin
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Game Development Workshop by Mr. Ram Iyer, Declaration of final
            teams and fixtures
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(82,255,121)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(82,255,121)" }}
          date="8th/9th December"
          iconStyle={{ background: "rgb(82,255,121)", color: "#fff" }}
          icon={
            <Icon
              path={mdiPageLast}
              title="account-check-outline"
              size={1}
              horizontal
              vertical
              rotate={90}
              color="#fff"
              spin
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Round of 64, 32, 16, Quarters and Semis. Final 2 teams to qualify
            for grand finale
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(238,44,30)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(238,44,30)" }}
          date="10th December "
          iconStyle={{ background: "rgb(238,44,30)", color: "#fff" }}
          icon={
            <Icon
              path={mdiAccountGroup}
              title="account-check-outline"
              size={1}
              horizontal
              vertical
              rotate={90}
              color="#fff"
              spin
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Panel Discussion on Interview strategies, Preparation and individual
            journeys in companies. Final team reveals
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(355,196,13)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(355,196,13)" }}
          date="11th December "
          iconStyle={{ background: "rgb(355,196,13)", color: "#fff" }}
          icon={
            <Icon
              path={mdiTrophyAward}
              title="account-check-outline"
              size={1}
              horizontal
              vertical
              rotate={90}
              color="#fff"
              spin
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            PGrand Finale to be held at Seminar Hall - 6th Floor, MPSTME Mumbai
            Main building
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
