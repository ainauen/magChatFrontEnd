import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId: "d52e818c-2f47-4183-96b6-049268bbcc08",
        authority: 'https://login.microsoftonline.com/07449a1e-1efe-4d4b-b621-f8e38a0db6aa',
        redirectUri:"https://localhost:3000/",
    },
    cache:{
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true,
    },
    system: {
        loggerOptions: {
            loggerCallback: (level: any, message: string, containsPii: any) =>{
                if (containsPii){
                    return;
                }
                switch(level){
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                    //    console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                }

            },
        },
    },
};

export const loginApiRequest = {
    scopes:["api://805bf292-ee7f-4e42-a4ad-585c74c3e922/magchatapi.scope"]
};