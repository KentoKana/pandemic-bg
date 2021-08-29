import { Player } from ".";
import { EPlayerRoleType } from "../Enums/PlayerRoleType";

export class Scientist extends Player {
    get role() {
        return EPlayerRoleType.Dispatcher;
    }
}