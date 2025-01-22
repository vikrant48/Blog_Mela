import config from '../config/Config.js'

import { Client, Databases, ID, Storage, Query } from "appwrite"

export class Service {

    client = new Client()
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwrite_url)
            .setProject(config.appwrite_project_id);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, image, content, status, userId }) {
        try {
            return await this.databases.createDocument(
                config.appwrite_database_id,
                config.appwrite_collection_id,
                slug,
                {
                    title,
                    content,
                    image,
                    status,
                    userId,
                }
            )

        } catch (error) {
            console.log("Appwrite serives :: createPost :: error", error)
            throw error
        }
    }

    async updatePost(slug, { title, image, content, status }) {
        try {
            return await this.databases.updateDocument(
                config.appwrite_database_id,
                config.appwrite_collection_id,
                slug,
                {
                    title,
                    image,
                    content,
                    status,
                }
            )

        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error)
            throw error

        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwrite_database_id,
                config.appwrite_collection_id,
                slug,
            )
            return true

        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error)
            throw error
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appwrite_database_id,
                config.appwrite_collection_id,
                slug,
            )

        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error)
            throw error

        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.appwrite_database_id,
                config.appwrite_collection_id,
                queries,
            )

        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error)
            throw error

        }
    }

    // file uploaded in storege service 

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appwrite_bucket_id,
                ID.unique(),
                file,
            )

        } catch (error) {
            console.log("Appwrite serive :: Storage:: updateFile :: error", error)
            throw error

        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                config.appwrite_bucket_id,
                fileId,
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: Storage:: deleteFile :: error", error)
            throw error
        }
    }

    getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview(config.appwrite_bucket_id, fileId);
        } catch (error) {
            console.error("Appwrite Service :: getFilePreview :: Error", error);
            throw error;
        }
    }


}

const service = new Service()

export default service