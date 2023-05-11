import axios from "axios";

const getCalendlyEvents = async (accessToken) => {
  try {
    const response = await axios.get(
      "https://api.calendly.com/scheduled_events?status=active",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const events = response.data.collection;
    return events;
  } catch (error) {
    console.error(error);
  }
};

export default getCalendlyEvents;
