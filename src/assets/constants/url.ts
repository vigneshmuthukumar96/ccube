import { environment } from "src/environments/environment";

// config all the rest api url required
export class ApiConstants {
    public static url = {
        ccube: {
            server_url: environment.serverUrl,
            test:{
                ccube_test_new:[''],
            },
        },
    }
}
