import { Player } from ".";
import { EPlayerRoleType } from "../Enums/PlayerRoleType";

export class Scientist extends Player {
    readonly displayName = "Scientist";
    get role() {
        return EPlayerRoleType.Dispatcher;
    }
}