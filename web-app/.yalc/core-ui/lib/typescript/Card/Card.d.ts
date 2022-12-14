import React from 'react';
interface ImageProps {
    url: string;
    alt?: string;
}
export interface CardProps {
    practitioner: string;
    facility: string;
    images: ImageProps;
}
export declare const Card: React.FC<CardProps>;
export {};
//# sourceMappingURL=Card.d.ts.map