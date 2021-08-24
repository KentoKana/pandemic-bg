import { ICard } from ".";
import { ECardType } from "../Enums/CardType";
import { EEventType } from "../Enums/EventType";

export class EventCard implements ICard {
  constructor(name: string, eventType: EEventType) {
    this.name = name;
    this.eventType = eventType;
  }
  // Resilient Population, Airlift, Forecast, One Quiet Night, and Government Grant.
  readonly cardType = ECardType.Event;
  readonly eventType: EEventType;
  readonly name: string;
}
