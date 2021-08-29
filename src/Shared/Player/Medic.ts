import { Player } from ".";
import { EPlayerRoleType } from "../Enums/PlayerRoleType";

export class Medic extends Player {
    get role() {
        return EPlayerRoleType.Medic;
    }
}