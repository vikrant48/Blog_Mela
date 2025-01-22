import config from '../config/Config.js'

import { Client, Account, ID } from "appwrite"



export class Authservice {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwrite_url)
            .setProject(config.appwrite_project_id);

        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const user = await this.account.create(
                ID.unique(),
                email,
                password,
                name,
            )

            if (user) {
                return this.login({ email, password })
            } else {
                return user
            }

        } catch (error) {
            console.log('appwrite :: Auth :: createAcount :: error', error)
            throw error
        }

    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.log('appwrite :: Auth :: login :: error', error)
            throw error
        }
    }

    async getCurrentUser() {
        try {
            const user =  await this.account.get()
            return user
            
        } catch (error) {
            if (error.message.includes("missing scope (account)")) {
                console.log("User is not authenticated.")
            } else {
                console.log("appwrite :: Auth :: getCurrentUser :: error", error)
            }
        }
        return null
    }

    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log('appwrite :: Auth :: logout :: error', error)
        }
    }

}

const authService = new Authservice()

export default authService





// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('<PROJECT_ID>');                 // Your project ID

// const account = new Account(client);

// const user = await account.create(
//     ID.unique(),
//     'email@example.com',
//     'password'
// );
