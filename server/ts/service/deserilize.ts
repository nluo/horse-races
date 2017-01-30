export default function deserilize(
    response: any,
    resourceIndex: number,
    resourceName: string
): any[] {
    try {
        return response.data.updates[resourceIndex].data[resourceName]
    } catch (error) {
        throw error
    }
}