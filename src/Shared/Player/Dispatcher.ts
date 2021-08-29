import { Player } from ".";
import { EPlayerRoleType } from "../Enums/PlayerRoleType";

export class Dispatcher extends Player {
    get role() {
        return EPlayerRoleType.Dispatcher;
    }
}