import { IUpdateHillMessage } from 'corewar-message-types'
import { Context } from '@azure/functions'
import { IHill } from '../schema/hill'

interface IValidationResult {
    success: boolean
    messages?: string[]
}

//TODO validation:
// https://www.npmjs.com/package/swagger-model-validator
// https://www.npmjs.com/package/swagger-object-validator
const validate = (_input: IUpdateHillMessage): IValidationResult => ({
    success: true
})

export const updateHill = async (context: Context, input: IUpdateHillMessage, existing: IHill[]): Promise<void> => {
    if (existing.length !== 1) {
        context.res = {
            status: 404,
            body: 'Hill not found'
        }
        return
    }

    if (input.body.userId !== existing[0].userId) {
        context.res = {
            status: 401,
            body: 'Unauthorized'
        }
    }

    const validation = validate(input)
    if (!validation.success) {
        context.res = {
            status: 400,
            body: validation.messages
        }
        return
    }

    const id = existing[0].id
    const { userId, name, rules, warriors } = input.body

    const message = {
        id,
        userId,
        name,
        rules,
        warriors
    }

    context.res = { body: message }

    context.bindings.document = message

    context.bindings.bus = {
        body: message
    }

    context.bindings.signalr = [
        {
            target: 'hillUpdated',
            arguments: [message]
        }
    ]
}
