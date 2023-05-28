 export default function valueOrNA(value: unknown) {
    if (value === undefined || 
        value === null || 
        (typeof(value) === 'string' && value.trim() === '') ||
        (Array.isArray(value) && value.length === 0)
    ) {
        return 'N/A'
    }
    return value;
}