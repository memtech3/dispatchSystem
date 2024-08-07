import { Model } from 'pinia-orm'
import { Str, Uid, HasMany } from 'pinia-orm/decorators'
import { UnitEntity } from '@/stores/units'

export class CadEventEntity extends Model {
  static entity = 'cadEventEntities'

  @Uid({ size: 3 }) declare id: string
  @Str('') declare eventType: string
  @Str('') declare location: string
  @Str('') declare narrative: string
  @Str('') declare reportingParty: string
  @HasMany(() => UnitEntity, 'assignedEventId') declare assignedUnits: UnitEntity[]
  // TODO: add comments/event history items
}
