import { EventCard } from "../Card/EventCard";
import { EEventType } from "../Enums/EventType";

export const eventCards = [
    new EventCard("Resilient Population", EEventType.ResilientPopulation),
    new EventCard("Air Lift", EEventType.AirLift),
    new EventCard("Forecast", EEventType.Forecast),
    new EventCard("One Quiet Night", EEventType.OneQuietNight),
    new EventCard("Government Grant", EEventType.GovernmentGrant),

]