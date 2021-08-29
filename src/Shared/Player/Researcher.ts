import { Player } from ".";
import { EPlayerRoleType } from "../Enums/PlayerRoleType";

export class Researcher extends Player {
    get role() {
        return EPlayerRoleType.Researcher;
    }
}