export interface PropertyValues {
    [key: string]: any[];
}

export interface Combination {
    (values: PropertyValues): object[];
}