declare global {
    interface Window {
        Twitch: {
            ext: {
                onAuthorized: (callback: (auth: any) => void) => void;
                onContext: (callback: (context: any) => void) => void;
            };
        };
    }
}
export {};
