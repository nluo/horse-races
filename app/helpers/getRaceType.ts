export function getRaceTypeFromType(type: string): string {
    switch (type) {
        case 'T':
            return 'Thoroughbred'
        case 'G':
            return 'Greyhounds'
        case 'H':
            return 'Harness'
    }
    return ''
}