export enum EEventType {
    /**
     * Removes any 1 card in the infection discard pile from the game. You may play this between the infect and intensify steps of an epidemic
     */
    ResilientPopulation,
    /**
     * Move any 1 player to any city. Get permission before moving another player's pawn
     */
    AirLift,
    /**
     * Draw, look at, and rearrange the top 6 cards of the infection deck. Put them back on top.
     */
    Forecast,
    /**
     * Skip the next infect cities step
     */
    OneQuietNight,
    /**
     * Add 1 research station to any city.
     */
    GovernmentGrant
}