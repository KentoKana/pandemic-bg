import { Player } from ".";
import { EPlayerRoleType } from "../Enums/PlayerRoleType";

export class ContingencyPlanner extends Player {
    readonly displayName = "ContingencyPlanner";
    get role() {
        return EPlayerRoleType.ContingencyPlanner;
    }
}