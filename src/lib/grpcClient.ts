const { AS_SERVICE_URL: SERVICE_URL } = process.env;

import * as grpc from "@grpc/grpc-js";
import * as SearchRequestProto from "../protos/SearchRequest";

const client = new SearchRequestProto.FlightsSearchServiceClient(SERVICE_URL!, grpc.credentials.createInsecure());

export { client };
