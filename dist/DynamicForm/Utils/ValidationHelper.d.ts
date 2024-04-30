export const regexPatterns: {
    '^[0-9]+$': {
        errorMessage: string;
        doesValueUpdate: boolean;
    };
    '^[A-Za-z]+$': {
        errorMessage: string;
        doesValueUpdate: boolean;
    };
    '^[0-9a-zA-Z]+$': {
        errorMessage: string;
        doesValueUpdate: boolean;
    };
    '^[1-9][0-9]{9}$': {
        errorMessage: string;
        doesValueUpdate: boolean;
    };
    '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$': {
        errorMessage: string;
        doesValueUpdate: boolean;
    };
};
export function validateField(field: any, value: any, type: any, event: any, helpers: any): (string | boolean)[];
export function prepareEventKey(eventType: any, elementId: any): string;
export function prepareSubscribers(event: any, elementIds: any, handler: any): {};
export function getAge(dateString: any): number;
export function calculateUnixForGivenDays(date: any, days: any): Date;
