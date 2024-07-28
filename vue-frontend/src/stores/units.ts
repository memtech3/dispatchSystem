import { Model } from 'pinia-orm'
import { Str, Uid, Attr, BelongsTo } from 'pinia-orm/decorators'
import { CadEventEntity } from '@/stores/cadEvents'

export class UnitEntity extends Model {
  static entity = 'unitEntities'

  @Uid() declare id: string
  @Str('') declare callsign: string
  @Str('') declare unitType: string
  @Str('') declare location: string
  @Str('') declare status: string
  @Attr(null) declare assignedEventId: string | null
  @BelongsTo(() => CadEventEntity, 'assignedEventId')
  declare assignedEvent: CadEventEntity | null
}
