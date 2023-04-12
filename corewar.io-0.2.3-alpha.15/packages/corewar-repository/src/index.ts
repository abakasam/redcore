import IId from './IId'
import { MongoClient, FilterQuery } from 'mongodb'

export interface IRepository {
    getAll<T extends IId>(): Promise<T[]>
    getById<T extends IId>(id: string): Promise<T>
    /* eslint-disable-next-line */
    getOneBy<T extends IId>(filter: FilterQuery<any>): Promise<T>
    /* eslint-disable-next-line */
    getManyBy<T extends IId>(filter: FilterQuery<any>): Promise<T[]>
    upsert<T extends IId>(data: T): Promise<void>
    delete(id: string): Promise<void>
}

export default class Repository implements IRepository {
    private databaseName: string
    private collectionName: string

    constructor(databaseName: string, collectionName: string) {
        this.databaseName = databaseName
        this.collectionName = collectionName
    }

    private async getClient(): Promise<MongoClient> {
        /* eslint-disable-next-line */
        const connectionString = process.env.DB_CONNECTION_STRING
        if (!connectionString) {
            throw Error('Unable to access database')
        }

        const client = new MongoClient(connectionString)

        return new Promise((resolve, reject) => {
            try {
                client.connect(err => {
                    if (err) {
                        reject(err)
                    }

                    resolve(client)
                })
            } catch (e) {
                reject(e)
            }
        })
    }

    async getAll<T extends IId>(): Promise<T[]> {
        const client = await this.getClient()
        try {
            const database = client.db(this.databaseName)
            const collection = database.collection(this.collectionName)

            return (await collection.find().toArray()) as T[]
        } finally {
            client.close()
        }
    }

    async getById<T extends IId>(id: string): Promise<T> {
        const client = await this.getClient()
        try {
            const database = client.db(this.databaseName)
            const collection = database.collection(this.collectionName)

            return (await collection.findOne({ id })) as T
        } finally {
            client.close()
        }
    }

    /* eslint-disable-next-line */
    async getOneBy<T extends IId>(filter: FilterQuery<any>): Promise<T> {
        const client = await this.getClient()
        try {
            const database = client.db(this.databaseName)
            const collection = database.collection(this.collectionName)

            return (await collection.findOne(filter)) as T
        } finally {
            client.close()
        }
    }

    /* eslint-disable-next-line */
    async getManyBy<T extends IId>(filter: FilterQuery<any>): Promise<T[]> {
        const client = await this.getClient()
        try {
            const database = client.db(this.databaseName)
            const collection = database.collection(this.collectionName)

            return (await collection.find(filter).toArray()) as T[]
        } finally {
            client.close()
        }
    }

    async upsert<T extends IId>(data: T): Promise<void> {
        const client = await this.getClient()
        try {
            const database = client.db(this.databaseName)
            const collection = database.collection(this.collectionName)

            const existing = await collection.findOne({ id: data.id })
            if (!existing) {
                await collection.insertOne(data)
            } else {
                await collection.updateOne({ id: data.id }, { $set: data })
            }
        } finally {
            client.close()
        }
    }

    async delete(id: string): Promise<void> {
        const client = await this.getClient()
        try {
            const database = client.db(this.databaseName)
            const collection = database.collection(this.collectionName)

            await collection.deleteOne({ id })
        } finally {
            client.close()
        }
    }
}
