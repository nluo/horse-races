export default function deserilize(
    response: any,
    resouceIndex: number,
    resourceName: string
): any[] {
    try {
        return response.data.updates[resouceIndex].data[resourceName]
    } catch (error) {
        throw error
    }
}