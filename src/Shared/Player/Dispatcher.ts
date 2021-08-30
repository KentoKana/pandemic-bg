import { Player } from ".";
import { EPlayerRoleType } from "../Enums/PlayerRoleType";

export class Dispatcher extends Player {
    readonly displayName = "Dispatcher";
    get role() {
        return EPlayerRoleType.Dispatcher;
    }
}