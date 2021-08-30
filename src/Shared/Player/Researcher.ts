import { Player } from ".";
import { EPlayerRoleType } from "../Enums/PlayerRoleType";

export class Researcher extends Player {
    readonly displayName = "Researcher";
    get role() {
        return EPlayerRoleType.Researcher;
    }
}