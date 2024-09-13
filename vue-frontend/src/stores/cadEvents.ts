import { Model } from 'pinia-orm'
import { Attr, Num, Str, Uid, HasMany } from 'pinia-orm/decorators'
import { UnitEntity } from '@/stores/units'

export class ReportingParty {
  constructor(
    public firstName: string,
    public middleName: string,
    public lastName: string,
    public howReported: string,
    public callbackPhone: string,
    public fromPhone: string,
    public reportingPartyLocation: string
  ) {}
}

export class CadEventEntity extends Model {
  static readonly entity: string = 'cadEventEntities'

  @Uid({ size: 3 }) declare id: string
  @Attr(Date) declare createdAt: Date
  @Str('') declare eventType: string
  @Num(7) declare priority: number
  @Str('') declare location: string
  @Str('') declare narrative: string
  @Attr([ReportingParty]) declare reportingParties: ReportingParty[]
  @HasMany(() => UnitEntity, 'assignedEventId') declare assignedUnits: UnitEntity[]
  // TODO: add comments/event history items
}
