"use client";

import posthog from "posthog-js";

export const posthogLogs = {
  eventExplorationRequested() {
    posthog.logger.info("event exploration requested", {
      action: "events_explored",
      surface: "hero",
    });
  },

  eventDetailsOpened(eventSlug: string) {
    posthog.logger.info("event details opened", {
      action: "event_details_opened",
      event_slug: eventSlug,
      surface: "featured_event_card",
    });
  },
};
