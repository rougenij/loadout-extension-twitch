export declare const CONFIG: {
    firebase: {
        apiKey: string;
        authDomain: string;
        databaseURL: string;
        projectId: string;
        storageBucket: string;
        messagingSenderId: string;
        appId: string;
    };
    development: {
        testStreamerId: string;
        enableDebugLogs: boolean;
    };
    extension: {
        maxLoadouts: number;
        refreshInterval: number;
        defaultHeight: number;
    };
};
export declare const isDevelopment: () => boolean;
export declare const debugLog: (message: string, data?: any) => void;
