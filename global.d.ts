interface Window {
    Comagic?: {
        addOfflineRequest: (
            data: { name?: string; phone?: string },
            callback: (response: unknown) => void
        ) => void;
    };
}