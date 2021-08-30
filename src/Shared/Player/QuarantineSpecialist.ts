import { Player } from ".";
import { EPlayerRoleType } from "../Enums/PlayerRoleType";

export class QuarantineSpecialist extends Player {
    readonly displayName = "Quarantine Specialist";
    get role() {
        return EPlayerRoleType.QuarantineSpecialist;
    }
}