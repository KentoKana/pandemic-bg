import { Player } from ".";
import { EPlayerRoleType } from "../Enums/PlayerRoleType";

export class Medic extends Player {
    readonly displayName = "Medic";
    get role() {
        return EPlayerRoleType.Medic;
    }
}