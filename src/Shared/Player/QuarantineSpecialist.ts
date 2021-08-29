import { Player } from ".";
import { EPlayerRoleType } from "../Enums/PlayerRoleType";

export class QuarantineSpecialist extends Player {
    get role() {
        return EPlayerRoleType.QuarantineSpecialist;
    }
}