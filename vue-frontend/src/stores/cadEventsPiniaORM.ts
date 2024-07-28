import { Model } from 'pinia-orm'
import { Str, Uid, HasMany } from 'pinia-orm/decorators'
import { UnitPiniaORM } from '@/stores/unitsPiniaORM'

export class CadEventPiniaORM extends Model {
  static entity = 'cadEventsPiniaORM'

  @Uid() declare id: string
  @Str('') declare eventType: string
  @Str('') declare location: string
  @Str('') declare narrative: string
  @Str('') declare reportingParty: string
  @HasMany(() => UnitPiniaORM, 'assignedEventId') declare assignedUnits: UnitPiniaORM[]

  // assignedUnits
}
