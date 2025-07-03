export const formatDateHeader = (dateString) => {
    const date = new Date(dateString)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(today.getDate() - 1)

    if (dateString === today.toISOString().split("T")[0]) {
        return `Today (${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()})`
    } else if (dateString === yesterday.toISOString().split("T")[0]) {
        return `Yesterday (${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()})`
    } else {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }
}