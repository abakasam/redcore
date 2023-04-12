import { AzureFunction, Context } from '@azure/functions'
import { deleteHill } from '../deleteHill'
import { IDeleteHillMessage } from 'corewar-message-types'
import { IHill } from '../schema/hill'

const deleteHillBus: AzureFunction = async (
    context: Context,
    trigger: IDeleteHillMessage,
    records: IHill[]
): Promise<void> => deleteHill(context, trigger, records)

export default deleteHillBus
