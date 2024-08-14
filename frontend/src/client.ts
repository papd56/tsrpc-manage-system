import { HttpClient } from "tsrpc-browser";
import { serviceProto } from "./shared/protocols/serviceProto";

export const BASEURL = "https://backendtop.top"
export const UPLOADURL = BASEURL + '/uploads/'
// Create Client
export const client = new HttpClient(serviceProto, {
    server: BASEURL,
    // Remove this to use binary mode (remove from the server too)
    json: true,
    logger: console,
});