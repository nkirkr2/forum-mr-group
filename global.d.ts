// Mindbox Types
interface MindboxCustomerData {
    mobilePhone?: string;
    email?: string;
    lastName?: string;
    firstName?: string;
    middleName?: string;
    subscriptions?: Array<{
        pointOfContact: string;
        valueByDefault?: string;
        isSubscribed?: string | boolean;
    }>;
}

interface MindboxData {
    customer?: MindboxCustomerData;
    viewProductCategory?: {
        productCategory: {
            ids: {
                mrGroupRu: string;
            };
        };
    };
    viewProduct?: {
        product: {
            ids: {
                mrGroupRu: string;
            };
        };
    };
    productList?: Array<{
        product: {
            ids: {
                mrGroupRu: string;
            };
        };
    }>;
    pointOfContact?: string;
}

type MindboxCallback = () => void;
type MindboxErrorCallback = (error: unknown) => void;

interface MindboxAsyncOptions {
    operation: string;
    data: MindboxData;
    onSuccess?: MindboxCallback;
    onError?: MindboxErrorCallback;
}

interface MindboxFunction {
    (method: 'create', options: { endpointId: string }): void;
    (method: 'async', options: MindboxAsyncOptions): void;
    queue: unknown[];
}

interface Window {
    Comagic?: {
        addOfflineRequest: (
            data: { name?: string; phone?: string },
            callback: (response: unknown) => void
        ) => void;
    };
    mindbox: MindboxFunction;
}

declare const mindbox: MindboxFunction;