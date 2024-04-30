export default function LocalityService(): Readonly<{
    getLocalityAutoSuggestions: (config: any) => Promise<any>;
    setSelectedLocality: (config: any) => Promise<any>;
}>;
