import { Model } from 'pinia-orm'
import { Str, Uid, Attr, BelongsTo } from 'pinia-orm/decorators'
import { CadEventPiniaORM } from '@/stores/cadEventsPiniaORM'

export class UnitPiniaORM extends Model {
  static entity = 'unitsPiniaORM'

  @Uid() declare id: string
  @Str('') declare callsign: string
  @Str('') declare unitType: string
  @Str('') declare location: string
  @Str('') declare status: string
  @Attr(null) declare assignedEventId: string | null
  @BelongsTo(() => CadEventPiniaORM, 'assignedEventId')
  declare assignedEvent: CadEventPiniaORM | null
}
