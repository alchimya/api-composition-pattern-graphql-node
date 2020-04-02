import {ModckDataset} from "./ModckDataset";
import axios from "axios";

export enum ServiceType {
    BOOK_SERVICE,
    AUTHOR_SERVICE,
    INVENTORY_SERVICE
}
export class ServiceData {

    async fetch (serviceType: ServiceType) {
        let mockDataset = new ModckDataset();
        let data = null;

        if (serviceType === ServiceType.BOOK_SERVICE) {
            if (!process.env.BOOK_SERVICE_URI) {
                data = mockDataset.books;
            } else {
                data = await this.getData(`${process.env.BOOK_SERVICE_URI}/api/v1/books`);
            }
        } else if (serviceType === ServiceType.AUTHOR_SERVICE) {
            if (!process.env.AUTHOR_SERVICE_URI) {
                data = mockDataset.authors;
            } else {
                data = await this.getData(`${process.env.AUTHOR_SERVICE_URI}/api/v1/authors`);
            }
        } else if (serviceType === ServiceType.INVENTORY_SERVICE) {
            if (!process.env.INVENTORY_SERVICE_URI) {
                data = mockDataset.inventory;
            } else {
                data = await this.getData(`${process.env.INVENTORY_SERVICE_URI}/api/v1/inventory`);
            }
        }

        return data;
    }

    private async getData (restApiUrl: string) {
        let data = null;
        await axios.get(restApiUrl)
        .then(response => {
            data = response.data;
        })
        .catch(err => {
            data =  {"error": err.response ? err.response.status : err.message};
        });

        return data;
    }

}