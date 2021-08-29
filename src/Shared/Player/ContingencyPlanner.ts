import { Player } from ".";
import { EPlayerRoleType } from "../Enums/PlayerRoleType";

export class ContingencyPlanner extends Player {
    get role() {
        return EPlayerRoleType.ContingencyPlanner;
    }
}